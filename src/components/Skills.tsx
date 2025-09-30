import {
  Code, Database, Smartphone, Brain, Users, Lightbulb,
  BarChart, Target, Zap, BookOpen, CheckCircle, Settings,
  BarChart3, Wrench, MessageSquare
} from 'lucide-react';
import ScrollAnimateSection from './ScrollAnimateSection';

const Skills = () => {
  const skillCategories = [
    {
      title: "Project Management",
      icon: Settings,
      color: "teal",
      skills: [
        "Agile Team Management",
        "Scrum & Kanban",
        "Sprint Planning",
        "Roadmapping",
        "User Acceptance Testing (UAT)",
        "Cross-functional Team Coordination"
      ]
    },
    {
      title: "Product Management",
      icon: Target,
      color: "blue",
      skills: [
        "Requirement Gathering",
        "User Stories",
        "User Flow Design",
        "Feature Prioritization",
        "Market & Competitor Research",
        "Product Strategy"
      ]
    },
    {
      title: "Technical Expertise",
      icon: Code,
      color: "purple",
      skills: [
        "SaaS Architecture",
        "API Integration",
        "Mobile & Web App Development",
        "E-commerce Systems",
        "Cloud Migration",
        "System Integration"
      ]
    },
    {
      title: "Data Analysis",
      icon: BarChart3,
      color: "green",
      skills: [
        "Basic SQL",
        "Excel/Google Sheets (Advanced)",
        "Report Generation",
        "Behavioral Analytics",
        "KPI Tracking",
        "Performance Metrics"
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "orange",
      skills: [
        "Jira, Trello, Notion",
        "ClickUp, Asana",
        "Microsoft Clarity",
        "Webflow, Figma, Adobe XD",
        "Google Suite",
        "Postman (API Testing)"
      ]
    },
    {
      title: "Business & Communication",
      icon: MessageSquare,
      color: "pink",
      skills: [
        "Stakeholder Management",
        "Technical Documentation",
        "Client Interaction",
        "Risk Management",
        "Process Optimization",
        "Team Leadership"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      teal: "bg-teal-100 text-teal-600 border-teal-200",
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      green: "bg-green-100 text-green-600 border-green-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200",
      pink: "bg-pink-100 text-pink-600 border-pink-200"
    };
    return colors[color as keyof typeof colors] || colors.teal;
  };

  const getIconBgColor = (color: string) => {
    const colors = {
      teal: "bg-teal-500",
      blue: "bg-blue-500",
      purple: "bg-purple-500",
      green: "bg-green-500",
      orange: "bg-orange-500",
      pink: "bg-pink-500"
    };
    return colors[color as keyof typeof colors] || colors.teal;
  };

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning project management, technical analysis, and strategic planning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="bg-white rounded-2xl p-6 shadow-lg hover-lift border border-gray-100"
              >
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${getIconBgColor(category.color)}`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-start group"
                    >
                      <CheckCircle 
                        size={16} 
                        className="text-gray-400 group-hover:text-teal-500 mr-3 mt-0.5 flex-shrink-0 transition-colors duration-200" 
                      />
                      <span className="text-gray-700 text-sm sm:text-base group-hover:text-gray-900 transition-colors duration-200">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 sm:p-8">
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Additional Expertise</h3>
              <p className="text-gray-700 max-w-3xl mx-auto text-sm sm:text-base">
                Beyond core skills, I bring specialized knowledge in various domains
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-teal-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">SaaS Expertise</h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Deep understanding of SaaS product lifecycle, subscription models, and scalability challenges
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Team Leadership</h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Experience leading cross-functional teams and managing stakeholder relationships
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Innovation</h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Passionate about emerging technologies and innovative solutions for business challenges
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;