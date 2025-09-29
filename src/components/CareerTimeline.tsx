import { Calendar, MapPin, Building, TrendingUp } from 'lucide-react';

const CareerTimeline = () => {
  const timeline = [
    {
      title: "Technical Project Manager",
      company: "JoulesLabs",
      companyUrl: "https://jouleslabs.com",
      location: "Mirpur DOHS, Dhaka, Bangladesh",
      period: "February 2022 - Present",
      description: "Leading cross-functional teams in delivering SaaS solutions, mobile applications, and automation projects. Managing product roadmaps, stakeholder communications, and ensuring successful project delivery.",
      achievements: [
        "Scaled Crowdfundly user base from 2K to 14K+ users",
        "Successfully delivered 6+ major SaaS projects",
        "Implemented Agile methodologies across development teams"
      ],
      color: "teal",
      current: true
    },
    {
      title: "Associate",
      company: "Quantanite Bangladesh",
      companyUrl: "https://quantanite.com",
      location: "Dhaka, Bangladesh",
      period: "2021 - 2022",
      description: "Worked on business analysis and project coordination, gaining valuable experience in requirement gathering and stakeholder management.",
      achievements: [
        "Improved project delivery timelines by 25%",
        "Coordinated between technical and business teams",
        "Developed comprehensive project documentation"
      ],
      color: "blue",
      current: false
    },
    {
      title: "Creative Designer",
      company: "TecZard",
      location: "Dhaka, Bangladesh",
      period: "2020 - 2021",
      description: "Focused on visual design and user experience, developing skills in translating complex ideas into intuitive designs.",
      achievements: [
        "Created design systems for multiple projects",
        "Collaborated with development teams on UI/UX",
        "Improved user engagement through design optimization"
      ],
      color: "purple",
      current: false
    },
    {
      title: "Content Writer",
      company: "MarketDeal24",
      location: "Dhaka, Bangladesh",
      period: "2019 - 2020",
      description: "Started my professional journey in content creation, developing strong communication and analytical skills.",
      achievements: [
        "Produced high-quality content for various industries",
        "Developed strong research and analytical skills",
        "Built foundation for technical communication"
      ],
      color: "green",
      current: false
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      teal: "bg-teal-100 text-teal-600 border-teal-200",
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      green: "bg-green-100 text-green-600 border-green-200"
    };
    return colors[color as keyof typeof colors] || colors.teal;
  };

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gray-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
                <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Journey
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            A timeline of my career progression and key achievements in technology project management
          </p>
        </div>

        {/* Timeline Container with Responsive Layouts */}
        <div className="relative">
          {/* Desktop Timeline Line - Original Design */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>
          
          {/* Mobile Timeline Line - Enhanced for Mobile Only */}
          <div className="sm:hidden absolute left-5 w-0.5 h-full bg-gradient-to-b from-teal-400 via-blue-400 to-purple-400"></div>

          <div className="space-y-8 sm:space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                } sm:flex sm:items-start`}
              >
                {/* Timeline Dot - Responsive Design */}
                <div className={`absolute w-5 h-5 sm:w-4 sm:h-4 left-5 sm:left-1/2 transform -translate-x-1/2 sm:transform sm:-translate-x-1/2 rounded-full border-3 sm:border-4 border-white shadow-lg sm:shadow-lg z-10 ${
                  item.color === 'teal' ? 'bg-gradient-to-br from-teal-400 to-teal-600 sm:bg-teal-500' :
                  item.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-blue-600 sm:bg-blue-500' :
                  item.color === 'purple' ? 'bg-gradient-to-br from-purple-400 to-purple-600 sm:bg-purple-500' : 
                  'bg-gradient-to-br from-green-400 to-green-600 sm:bg-green-500'
                }`}
                style={{ top: '1.5rem' }}></div>

                {/* Content Card - Different Layouts for Mobile vs Desktop */}
                <div className={`ml-8 sm:ml-0 sm:w-5/12 ${
                  index % 2 === 0 
                    ? 'sm:mr-auto sm:pr-8' 
                    : 'sm:ml-auto sm:pl-8'
                }`}>
                  {/* Mobile Layout (< 640px) */}
                  <div className="bg-white rounded-xl p-3 shadow-lg border border-gray-100 overflow-hidden sm:hidden sm:hover:shadow-xl transition-all duration-300">
                    <div className="mb-3">
                      <div className="flex flex-col gap-2 mb-3">
                        <div className="flex-1 overflow-hidden">
                          <h3 className="text-base font-bold text-gray-900 mb-1 leading-tight break-words">
                            {item.title}
                          </h3>
                          <div className="flex items-center text-gray-600 overflow-hidden">
                            <Building size={12} className="mr-2 flex-shrink-0" />
                            {item.companyUrl ? (
                              <a 
                                href={item.companyUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="font-medium text-sm hover:text-teal-600 transition-colors duration-200 hover:underline truncate"
                              >
                                {item.company}
                              </a>
                            ) : (
                              <span className="font-medium text-sm truncate">{item.company}</span>
                            )}
                          </div>
                        </div>
                        {item.current && (
                          <div className={`px-2 py-1 rounded-full text-xs font-medium border flex-shrink-0 whitespace-nowrap ${getColorClasses(item.color)}`}>
                            Current
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col gap-1.5 text-xs text-gray-500">
                        <div className="flex items-center overflow-hidden">
                          <Calendar size={11} className="mr-1.5 flex-shrink-0" />
                          <span className="truncate">{item.period}</span>
                        </div>
                        <div className="flex items-center overflow-hidden">
                          <MapPin size={11} className="mr-1.5 flex-shrink-0" />
                          <span className="truncate">{item.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-3 text-sm leading-relaxed break-words">
                      {item.description}
                    </p>

                    <div className="overflow-hidden">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm flex items-center">
                        <TrendingUp size={12} className="mr-2 text-teal-600 flex-shrink-0" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1.5">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-gray-600 text-xs flex items-start leading-relaxed">
                            <span className={`w-1.5 h-1.5 rounded-full mt-1.5 mr-2.5 flex-shrink-0 ${
                              item.color === 'teal' ? 'bg-teal-500' :
                              item.color === 'blue' ? 'bg-blue-500' :
                              item.color === 'purple' ? 'bg-purple-500' : 'bg-green-500'
                            }`}></span>
                            <span className="break-words overflow-hidden">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Desktop Layout (≥ 640px) - Original Design */}
                  <div className="hidden sm:block bg-white rounded-2xl p-6 shadow-lg hover-lift">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Building size={16} className="mr-2 flex-shrink-0" />
                          {item.companyUrl ? (
                            <a 
                              href={item.companyUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="font-medium text-sm sm:text-base hover:text-teal-600 transition-colors duration-200 hover:underline"
                            >
                              {item.company}
                            </a>
                          ) : (
                            <span className="font-medium text-sm sm:text-base">{item.company}</span>
                          )}
                        </div>
                      </div>
                      {item.current && (
                        <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getColorClasses(item.color)}`}>
                          Current
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-2" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-2" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base flex items-center">
                        <TrendingUp size={16} className="mr-2 text-teal-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-gray-600 text-sm flex items-start">
                            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Section - Responsive Design */}
        <div className="text-center mt-12 sm:mt-16">
          {/* Mobile Summary */}
          <div className="sm:hidden mx-2">
            <div className="bg-gradient-to-r from-white via-gray-50 to-white rounded-xl p-4 shadow-lg border border-gray-100 overflow-hidden">
              <div className="flex items-center justify-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <TrendingUp size={20} className="text-white" />
                </div>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-3 break-words">
                3.5+ Years of Professional Growth
              </h3>
              <p className="text-gray-700 text-xs leading-relaxed px-1 break-words">
                My journey from content creation to technical project management has equipped me with a unique 
                perspective on bridging business requirements with technical solutions.
              </p>
            </div>
          </div>

          {/* Desktop Summary - Original Design */}
          <div className="hidden sm:block">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">3.5+ Years of Growth</h3>
              <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base">
                My journey from content creation to technical project management has equipped me with a unique 
                perspective on bridging business requirements with technical solutions. Each role has contributed 
                to my comprehensive understanding of the product development lifecycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;