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
      company: "TechZard",
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
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Career Journey
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            From content creation to technical project management - a journey of continuous growth and learning
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-0.5 h-full bg-gray-300"></div>

          <div className="space-y-8 sm:space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 200 + 400}ms` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                  item.color === 'teal' ? 'bg-teal-500' :
                  item.color === 'blue' ? 'bg-blue-500' :
                  item.color === 'purple' ? 'bg-purple-500' : 'bg-green-500'
                } animate-pulse-glow`}></div>

                {/* Content Card */}
                <div className={`ml-12 sm:ml-0 sm:w-5/12 ${
                  index % 2 === 0 ? 'sm:mr-auto sm:pr-8' : 'sm:ml-auto sm:pl-8'
                }`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift">
                    {/* Header */}
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

                    {/* Meta Information */}
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

                    {/* Description */}
                    <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
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

        {/* Summary */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg animate-fade-in-up animation-delay-1000">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">3.5+ Years of Growth</h3>
            <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base">
              My journey from content creation to technical project management has equipped me with a unique 
              perspective on bridging business requirements with technical solutions. Each role has contributed 
              to my comprehensive understanding of the product development lifecycle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;