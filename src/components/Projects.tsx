import { ExternalLink, Calendar, Users, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Crowdfundly",
      description: "Led the end-to-end planning, execution, and product transformation of a SaaS-based content monetization platform, scaling user base from 2,000 to 14,000+ in 2 years.",
      link: "https://crowdfundly.com/",
      gradient: "from-purple-500 to-pink-500",
      stats: { users: "14K+", growth: "600%" }
    },
    {
      title: "DeedSign",
      description: "Spearheaded the development and delivery of a secure SaaS digital document e-signing platform, ensuring alignment with client requirements and smooth mobile and web integration.",
      link: "https://deedsign.com/",
      gradient: "from-blue-500 to-cyan-500",
      stats: { security: "Bank-level", integration: "Multi-platform" }
    },
    {
      title: "Wi Platform",
      description: "Managed the multi-module digital commerce ecosystem, including Wi Account, Wi Bazaar, and Wi Pay. Led the integration of payment gateways and cross-border shipping workflows.",
      link: "https://wibazaar.com/",
      gradient: "from-green-500 to-teal-500",
      stats: { modules: "3+", payments: "Multi-gateway" }
    },
    {
      title: "Flowfy",
      description: "Directed the full lifecycle of a no-code workflow automation app for Shopify, aligning product features with market demand and successfully managing development sprints.",
      link: "https://apps.shopify.com/store-flow-workflow-automation",
      gradient: "from-orange-500 to-red-500",
      stats: { platform: "Shopify", automation: "No-code" }
    },
    {
      title: "ReviewX",
      description: "Oversaw the cloud migration of a high-performing WordPress plugin, coordinating dual-track development for cloud and legacy versions, ensuring seamless user experiences.",
      link: "https://reviewx.io/",
      gradient: "from-indigo-500 to-purple-500",
      stats: { migration: "Cloud", platform: "WordPress" }
    },
    {
      title: "Winblink",
      description: "Led the development of a greenfield ad network platform, conducting in-depth research and building a solid foundation for ad delivery mechanisms and monetization models.",
      link: "https://winblink.com/",
      gradient: "from-pink-500 to-rose-500",
      stats: { type: "Ad Network", stage: "Greenfield" }
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Key Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            A showcase of successful SaaS, mobile, and automation projects that have driven real business impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl shadow-lg hover-lift animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 100 + 400}ms` }}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-teal-600 transition-colors duration-200 hover:scale-110 transform"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <span
                      key={key}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {value}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200 text-sm group"
                >
                  View Project
                  <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6 sm:p-8 animate-fade-in-up animation-delay-1000">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Next Project?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Let's discuss how I can help transform your business requirements into successful digital solutions.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary inline-flex items-center"
            >
              <Users size={20} className="mr-2" />
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;