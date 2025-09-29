import { Target, Users, Lightbulb } from 'lucide-react';
import ScrollAnimateSection from './ScrollAnimateSection';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimateSection className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about transforming complex business requirements into successful digital solutions
          </p>
        </ScrollAnimateSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <ScrollAnimateSection animation="fade-left" delay={200}>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p>
                My career began in content creation, where I developed a keen eye for detail and 
                storytelling. This foundation led me to creative design, where I learned to visualize 
                complex ideas and communicate them effectively.
              </p>
              <p>
                The transition to project management felt natural as I discovered my passion for 
                bridging the gap between business requirements and technical implementation. Today, 
                I specialize in managing SaaS projects, mobile applications, and automation solutions 
                that drive real business value.
              </p>
              <p>
                What excites me most is the opportunity to work at the intersection of technology 
                and business strategy, ensuring that every project not only meets technical 
                specifications but also delivers meaningful outcomes for users and stakeholders.
              </p>
            </div>
          </ScrollAnimateSection>
          
          <ScrollAnimateSection animation="fade-right" delay={400} className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover-lift">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">What Drives Me</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <Target className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Problem Solving</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    I thrive on breaking down complex challenges into manageable solutions that 
                    deliver real business value.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Team Collaboration</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Building bridges between technical teams and stakeholders to ensure everyone 
                    is aligned and moving toward common goals.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Continuous Learning</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Staying current with emerging technologies and methodologies to deliver 
                    innovative solutions that drive business growth.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimateSection>
        </div>
        
        <ScrollAnimateSection delay={600} className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6 sm:p-8 hover-lift">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Beyond Work</h3>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
              When I'm not managing projects or analyzing business requirements, you'll find me 
              exploring new places, trying different cuisines, and seeking out experiences that 
              broaden my perspective. I believe that diverse experiences fuel creativity and 
              help me bring fresh insights to every project I work on.
            </p>
          </div>
        </ScrollAnimateSection>
      </div>
    </section>
  );
};

export default About;