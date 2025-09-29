import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Education
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Academic foundation in Computer Science & Engineering with focus on technology and business applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Education Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover-lift animate-fade-in-up animation-delay-400">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              {/* Icon */}
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-teal-600" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      B.Sc in Computer Science and Engineering
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <BookOpen size={16} className="mr-2" />
                      <span className="font-medium text-sm sm:text-base">
                        Bangladesh University of Business and Technology (BUBT)
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2 mt-2 sm:mt-0">
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                      Bachelor's Degree
                    </span>
                  </div>
                </div>

                {/* Meta Information */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-2" />
                    <span>2015 - 2020</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2" />
                    <span>Mirpur, Dhaka, Bangladesh</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                  Comprehensive study of computer science fundamentals, software engineering principles, 
                  and technology applications. The program provided a strong foundation in programming, 
                  system design, and analytical thinking that directly supports my current role in 
                  technical project management.
                </p>

                {/* Key Areas */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base flex items-center">
                    <Award size={16} className="mr-2 text-teal-600" />
                    Key Areas of Study
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Software Engineering",
                      "Database Management",
                      "System Analysis & Design",
                      "Project Management",
                      "Web Technologies",
                      "Data Structures & Algorithms"
                    ].map((area, index) => (
                      <div key={index} className="flex items-center text-gray-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3"></span>
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Education Info */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Continuous Learning */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift animate-fade-in-up animation-delay-600">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Continuous Learning</h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Actively pursuing knowledge in emerging technologies, project management methodologies, 
                and business analysis techniques through online courses and industry certifications.
              </p>
            </div>

            {/* Professional Development */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift animate-fade-in-up animation-delay-800">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Professional Growth</h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Leveraging academic foundation to excel in practical applications, combining theoretical 
                knowledge with hands-on experience in real-world project management scenarios.
              </p>
            </div>
          </div>

          {/* Impact Statement */}
          <div className="mt-8 sm:mt-12 text-center">
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6 sm:p-8 animate-fade-in-up animation-delay-1000">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Education Meets Experience
              </h3>
              <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base">
                My computer science background provides the technical foundation that enables me to 
                effectively communicate with development teams, understand system architectures, and 
                make informed decisions in technical project management roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;