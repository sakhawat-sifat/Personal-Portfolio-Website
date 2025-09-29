import { Mail, MapPin, Linkedin } from 'lucide-react';

const Hero = () => {
  const handleGetInTouch = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-20 sm:-right-40 w-60 h-60 sm:w-80 sm:h-80 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-20 sm:-left-40 w-60 h-60 sm:w-80 sm:h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-20 sm:left-40 w-60 h-60 sm:w-80 sm:h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fade-in-up max-w-full">
              Md Sakhawat
              <span className="text-teal-600 block animate-fade-in-up animation-delay-200">Hossain</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4 sm:mb-6 font-medium animate-fade-in-up animation-delay-400">
              Bridging the gap between business and technology
            </p>
            
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-600">
              Technical Project Manager with 3.5+ years of experience driving SaaS, mobile app, 
              and automation projects from concept to delivery. Passionate about transforming 
              business requirements into successful digital solutions.
            </p>
            
            <div className="flex justify-center lg:justify-start mb-6 sm:mb-8 animate-fade-in-up animation-delay-800">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleGetInTouch();
                }}
                className="btn-secondary flex items-center"
              >
                <Mail size={20} className="mr-2" />
                Get in Touch
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 text-gray-600 justify-center lg:justify-start animate-fade-in-up animation-delay-1000">
              <div className="flex items-center justify-center lg:justify-start">
                <MapPin size={18} className="mr-2 text-teal-600" />
                <span className="text-sm sm:text-base">Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Linkedin size={18} className="mr-2 text-teal-600" />
                <a 
                  href="https://www.linkedin.com/in/hossain-sakhawat/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-teal-600 transition-colors duration-200 text-sm sm:text-base"
                >
                  hossain-sakhawat
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative animate-fade-in-up animation-delay-300">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 sm:border-8 border-white shadow-2xl hover:scale-105 transition-transform duration-500">
                <img
                  src="/user_image.png"
                  alt="Md Sakhawat Hossain"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        </div>
      </div>
    </section>
  );
};

export default Hero;