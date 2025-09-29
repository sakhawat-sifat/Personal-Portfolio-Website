import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollAnimateSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right';
  delay?: number;
}

const ScrollAnimateSection = ({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0 
}: ScrollAnimateSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-left':
        return 'scroll-animate-left';
      case 'fade-right':
        return 'scroll-animate-right';
      default:
        return 'scroll-animate';
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${isVisible ? 'animate' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimateSection;