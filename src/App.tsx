import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CareerTimeline from './components/CareerTimeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  // Contact component configuration
  const ENABLE_CONTACT = true; // Set to true when Contact component is ready
  
  // reCAPTCHA configuration - use environment variable or fallback to test key
  const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"; // Fallback to Google's test key

  const AppContent = () => (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <CareerTimeline />
        <Projects />
        <Skills />
        <Education />
        {ENABLE_CONTACT && <Contact />}
      </main>
      <Footer />
      <BackToTop />
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