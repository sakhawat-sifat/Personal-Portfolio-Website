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
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6Lfl59MrAAAAAFatfg_421cj3IMRcIFQjeMWG8dL">
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <About />
          <CareerTimeline />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </GoogleReCaptchaProvider>
  );
}

export default App;