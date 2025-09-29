// Performance monitoring and Web Vitals tracking

interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

// Web Vitals thresholds
const VITALS_THRESHOLDS = {
  CLS: { good: 0.1, poor: 0.25 },
  FID: { good: 100, poor: 300 },
  FCP: { good: 1800, poor: 3000 },
  LCP: { good: 2500, poor: 4000 },
  TTFB: { good: 800, poor: 1800 },
};

// Rate performance metrics
const rateMetric = (name: string, value: number): 'good' | 'needs-improvement' | 'poor' => {
  const thresholds = VITALS_THRESHOLDS[name as keyof typeof VITALS_THRESHOLDS];
  if (!thresholds) return 'good';
  
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.poor) return 'needs-improvement';
  return 'poor';
};

// Performance observer for monitoring metrics
export const initPerformanceMonitoring = () => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  const metrics: PerformanceMetric[] = [];

  // Monitor Largest Contentful Paint (LCP)
  const lcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lcpEntry = entries[entries.length - 1] as PerformanceEntry;
    
    metrics.push({
      name: 'LCP',
      value: lcpEntry.startTime,
      rating: rateMetric('LCP', lcpEntry.startTime)
    });
    
    if (import.meta.env.DEV) {
      console.log(`LCP: ${lcpEntry.startTime.toFixed(2)}ms - ${rateMetric('LCP', lcpEntry.startTime)}`);
    }
  });

  try {
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
  } catch (e) {
    // LCP not supported
  }

  // Monitor First Input Delay (FID)
  const fidObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry: any) => {
      metrics.push({
        name: 'FID',
        value: entry.processingStart - entry.startTime,
        rating: rateMetric('FID', entry.processingStart - entry.startTime)
      });
      
      if (import.meta.env.DEV) {
        console.log(`FID: ${(entry.processingStart - entry.startTime).toFixed(2)}ms - ${rateMetric('FID', entry.processingStart - entry.startTime)}`);
      }
    });
  });

  try {
    fidObserver.observe({ entryTypes: ['first-input'] });
  } catch (e) {
    // FID not supported
  }

  // Monitor Cumulative Layout Shift (CLS)
  let clsValue = 0;
  const clsObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry: any) => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    });
    
    metrics.push({
      name: 'CLS',
      value: clsValue,
      rating: rateMetric('CLS', clsValue)
    });
    
    if (import.meta.env.DEV) {
      console.log(`CLS: ${clsValue.toFixed(4)} - ${rateMetric('CLS', clsValue)}`);
    }
  });

  try {
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  } catch (e) {
    // CLS not supported
  }

  // Monitor First Contentful Paint (FCP)
  const fcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
      if (entry.name === 'first-contentful-paint') {
        metrics.push({
          name: 'FCP',
          value: entry.startTime,
          rating: rateMetric('FCP', entry.startTime)
        });
        
        if (import.meta.env.DEV) {
          console.log(`FCP: ${entry.startTime.toFixed(2)}ms - ${rateMetric('FCP', entry.startTime)}`);
        }
      }
    });
  });

  try {
    fcpObserver.observe({ entryTypes: ['paint'] });
  } catch (e) {
    // FCP not supported
  }

  return metrics;
};

// Resource loading performance
export const monitorResourceLoading = () => {
  if (typeof window === 'undefined') return;

  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];

    if (import.meta.env.DEV) {
      console.group('🚀 Performance Metrics');
      
      // Page load timing
      console.log(`📄 DOM Content Loaded: ${navigation.domContentLoadedEventEnd - navigation.fetchStart}ms`);
      console.log(`⚡ Page Load Complete: ${navigation.loadEventEnd - navigation.fetchStart}ms`);
      console.log(`🌐 TTFB: ${navigation.responseStart - navigation.fetchStart}ms`);
      
      // Resource analysis
      const slowResources = resources.filter(resource => resource.duration > 500);
      if (slowResources.length > 0) {
        console.warn('🐌 Slow loading resources (>500ms):');
        slowResources.forEach(resource => {
          console.log(`  • ${resource.name}: ${resource.duration.toFixed(2)}ms`);
        });
      }
      
      // Bundle size analysis
      const jsResources = resources.filter(r => r.name.includes('.js'));
      const cssResources = resources.filter(r => r.name.includes('.css'));
      
      console.log(`📦 JS Bundle Size: ${jsResources.reduce((acc, r) => acc + (r.transferSize || 0), 0) / 1024}KB`);
      console.log(`🎨 CSS Bundle Size: ${cssResources.reduce((acc, r) => acc + (r.transferSize || 0), 0) / 1024}KB`);
      
      console.groupEnd();
    }
  });
};

// Memory usage monitoring
export const monitorMemoryUsage = () => {
  if (typeof window === 'undefined' || !('performance' in window)) return;

  const checkMemory = () => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      if (import.meta.env.DEV) {
        console.log(`💾 Memory Usage: ${(memory.usedJSHeapSize / 1048576).toFixed(2)}MB / ${(memory.totalJSHeapSize / 1048576).toFixed(2)}MB`);
      }
    }
  };

  // Check memory usage every 30 seconds in development
  if (import.meta.env.DEV) {
    setInterval(checkMemory, 30000);
  }
};

// Initialize all performance monitoring
export const initializePerformanceTracking = () => {
  initPerformanceMonitoring();
  monitorResourceLoading();
  monitorMemoryUsage();
  
  if (import.meta.env.DEV) {
    console.log('🔍 Performance monitoring initialized');
  }
};