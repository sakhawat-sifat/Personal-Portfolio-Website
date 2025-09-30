import { lazy, Suspense } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Header from './components/Header';
import Hero from './components/Hero';
import { LoadingFallback } from './utils/lazyLoading';

// Lazy load components that are not immediately visible
const About = lazy(() => import('./components/About'));
const CareerTimeline = lazy(() => import('./components/CareerTimeline'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Footer = lazy(() => import('./components/Footer'));
const BackToTop = lazy(() => import('./components/BackToTop'));
// const Contact = lazy(() => import('./components/Contact')); // Re-enable when ready

function App() {
  // Contact component configuration
  const ENABLE_CONTACT = false; // Set to true when Contact component is ready
  
  // reCAPTCHA configuration with environment variables
  const isDevelopment = import.meta.env.DEV;
  const recaptchaKey = isDevelopment 
    ? import.meta.env.VITE_RECAPTCHA_SITE_KEY_DEV || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
    : import.meta.env.VITE_RECAPTCHA_SITE_KEY_PROD || "6Lfl59MrAAAAAFatfg_421cj3IMRcIFQjeMWG8dL";

  const AppContent = () => (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<LoadingFallback height="400px" />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingFallback height="600px" />}>
          <CareerTimeline />
        </Suspense>
        <Suspense fallback={<LoadingFallback height="500px" />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoadingFallback height="400px" />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<LoadingFallback height="300px" />}>
          <Education />
        </Suspense>
        {/* {ENABLE_CONTACT && <Suspense fallback={<LoadingFallback />}><Contact /></Suspense>} */}
      </main>
      <Suspense fallback={<div className="h-20" />}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <BackToTop />
      </Suspense>
    </div>
  );

  // Only wrap with reCAPTCHA provider if Contact is enabled
  if (ENABLE_CONTACT) {
    return (
      <GoogleReCaptchaProvider 
        reCaptchaKey={recaptchaKey}
        scriptProps={{
          async: false,
          defer: true,
          appendTo: "head",
          nonce: undefined
        }}
      >
        <AppContent />
      </GoogleReCaptchaProvider>
    );
  }

  // Return app without reCAPTCHA when Contact is disabled
  return <AppContent />;
}

export default App;