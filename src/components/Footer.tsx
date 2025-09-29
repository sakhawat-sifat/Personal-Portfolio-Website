import { Mail, MapPin, Linkedin, Heart, Download } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamic year

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="animate-fade-in-up">
            <h3 className="text-lg sm:text-xl font-bold mb-4">Sakhawat Hossain</h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Technical Project Manager specializing in SaaS solutions and business analysis.
            </p>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Bridging the gap between business and technology.
            </p>
            <div className="mt-4">
              <a
                href="https://drive.google.com/file/d/1yyc-PSdCtcB6KUZWESLR9Qmks6F_nkHZ/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 text-sm sm:text-base"
              >
                <Download size={16} className="mr-2" />
                Download Resume
              </a>
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-200">
            <h4 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-teal-400 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up animation-delay-400">
            <h4 className="text-base sm:text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-teal-400 flex-shrink-0" />
                <span className="text-gray-300">Mirpur, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-teal-400 flex-shrink-0" />
                <a 
                  href="mailto:contact@sakhawatsifat.me"
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-200 break-all"
                >
                  contact@sakhawatsifat.me
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin size={16} className="mr-2 text-teal-400 flex-shrink-0" />
                <a 
                  href="https://www.linkedin.com/in/hossain-sakhawat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-200 break-all"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base animate-fade-in-up animation-delay-600">
            © {currentYear} Md Sakhawat Hossain. Made with <Heart size={16} className="inline text-red-500 mx-1" /> in Dhaka, Bangladesh.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
