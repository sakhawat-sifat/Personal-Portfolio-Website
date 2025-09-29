import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show button after scrolling 300px
      const shouldShowBasedOnScroll = scrollTop > 300;
      
      // Check if we're on mobile (screen width < 640px)
      const isMobile = window.innerWidth < 640;
      
      // Hide button when footer is visible on mobile
      let shouldHideAtFooter = false;
      if (isMobile) {
        const footer = document.querySelector('footer');
        if (footer) {
          const footerRect = footer.getBoundingClientRect();
          // Hide button when footer is visible (even partially)
          shouldHideAtFooter = footerRect.top < windowHeight;
        } else {
          // Fallback: hide when near bottom of page on mobile
          const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
          shouldHideAtFooter = distanceFromBottom < 100;
        }
      }
      
      setIsVisible(shouldShowBasedOnScroll && !shouldHideAtFooter);
    };

    // Add both scroll and resize listeners
    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('resize', toggleVisibility);

    // Initial check
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg sm:hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp 
          size={18} 
          className="sm:w-5 sm:h-5 sm:group-hover:animate-bounce" 
        />
      </button>
    </>
  );
};

export default BackToTop;