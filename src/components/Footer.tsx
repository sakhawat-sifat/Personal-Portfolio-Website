import { Mail, MapPin, Linkedin, Heart, Download } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamic year

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 sm:py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2 sm:animate-fade-in-up">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <span className="text-xl font-bold">SH</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Sakhawat Hossain</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-base leading-relaxed">
              Passionate about transforming business requirements into successful digital solutions. 
              Specialized in SaaS, mobile app development, and automation projects with a focus on 
              bridging the gap between business and technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/1yyc-PSdCtcB6KUZWESLR9Qmks6F_nkHZ/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white rounded-lg transition-all duration-300 sm:hover:shadow-lg sm:transform sm:hover:scale-105 font-medium"
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:animate-fade-in-up sm:animation-delay-200">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <div className="w-2 h-6 bg-gradient-to-b from-teal-400 to-blue-400 rounded-full mr-3"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'About', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Education', href: '#education' }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-teal-400 transition-all duration-300 sm:hover:translate-x-2 inline-block group"
                  >
                    <span className="group-hover:text-teal-400">→</span> {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:animate-fade-in-up sm:animation-delay-400">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <div className="w-2 h-6 bg-gradient-to-b from-teal-400 to-blue-400 rounded-full mr-3"></div>
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-center group cursor-pointer">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3 sm:group-hover:bg-teal-500 transition-colors duration-300">
                  <MapPin size={18} className="text-teal-400 sm:group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-300 text-sm">Dhaka, Bangladesh</p>
                </div>
              </div>
              
              <div className="flex items-center group cursor-pointer">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3 sm:group-hover:bg-blue-500 transition-colors duration-300">
                  <Mail size={18} className="text-blue-400 sm:group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a 
                    href="mailto:contact@sakhawatsifat.me"
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm"
                  >
                    contact@sakhawatsifat.me
                  </a>
                </div>
              </div>
              
              <div className="flex items-center group cursor-pointer">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3 sm:group-hover:bg-blue-600 transition-colors duration-300">
                  <Linkedin size={18} className="text-blue-400 sm:group-hover:text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/hossain-sakhawat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-200 text-sm"
                  >
                    hossain-sakhawat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 sm:animate-fade-in-up sm:animation-delay-600">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Md Sakhawat Hossain. Made with 
                <Heart size={16} className="inline text-red-500 mx-1 sm:animate-pulse" /> 
                in Dhaka, Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
