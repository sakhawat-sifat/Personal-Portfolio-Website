import { ComponentType, lazy, Suspense, ReactElement, useRef, useEffect } from 'react';

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
  </div>
);

// Generic loading fallback
const LoadingFallback = ({ height = "200px" }: { height?: string }) => (
  <div className="flex items-center justify-center animate-pulse" style={{ height }}>
    <div className="bg-gray-200 rounded-lg w-full h-full flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-gray-300 border-t-teal-600 rounded-full animate-spin"></div>
    </div>
  </div>
);

// Higher-order component for lazy loading with custom loading state
export const withLazyLoading = <T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: ReactElement
) => {
  const LazyComponent = lazy(importFunc);
  
  return (props: any) => (
    <Suspense fallback={fallback || <LoadingSpinner />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Intersection Observer hook for lazy loading on scroll
export const useLazyLoad = (callback: () => void, rootMargin = '100px') => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback();
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [callback, rootMargin]);

  return ref;
};

export { LoadingSpinner, LoadingFallback };