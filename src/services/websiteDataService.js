// Website Data Service - Provides comprehensive website content for chatbot
class WebsiteDataService {
  constructor() {
    this.websiteData = this.initializeWebsiteData();
  }

  // Initialize comprehensive website data
  initializeWebsiteData() {
    return {
      company: {
        name: "IntelliSync Office Automation Limited",
        description: "Intelligent solutions for modern businesses",
        contact: {
          phone: "+254-722-952-138",
          email: "support@intellisync.com",
          infoEmail: "info@intellisync.com",
          supportHours: "24/7 for emergencies, 8 AM to 6 PM EAT standard"
        },
        location: "Kenya",
        founded: "2024"
      },

      services: {
        businessIntelligence: {
          name: "Business Intelligence",
          description: "Enterprise-grade business intelligence platform delivering actionable insights through advanced analytics, real-time dashboards, and AI-powered predictive modeling.",
          features: [
            "Advanced Analytics Engine with machine learning and predictive modeling",
            "Executive Dashboard Suite with drill-down capabilities",
            "Regulatory Compliance for SOX, GDPR, HIPAA",
            "Data Integration Hub with 200+ enterprise systems"
          ],
          benefits: [
            "Data-driven decision making",
            "Real-time insights",
            "Predictive analytics",
            "Compliance management"
          ],
          useCases: [
            "Financial reporting and analysis",
            "Sales performance tracking",
            "Customer behavior analysis",
            "Operational efficiency monitoring"
          ]
        },

        dataAutomation: {
          name: "Data Automation",
          description: "Automate data entry, forms processing, and email management with our intelligent data processing solutions. Reduce errors and increase efficiency.",
          features: [
            "Data Entry Automation with intelligent OCR",
            "Forms Processing with automated data extraction",
            "Email Management with automated classification",
            "Workflow Automation for repetitive tasks"
          ],
          benefits: [
            "90% time savings in data processing",
            "99% accuracy improvement",
            "5x productivity increase",
            "Unlimited scalability"
          ],
          industries: ["Healthcare", "Finance", "Government", "Education", "Legal", "Insurance", "Real Estate", "Manufacturing"]
        },

        documentManagement: {
          name: "Document Management",
          description: "Transform Your Business with Intelligent Document Management. Centralize documents in a protected digital repository with smart capture and automation.",
          features: [
            "Secure digital repository with enterprise-grade security",
            "Smart capture and automation for document processing",
            "Collaborative workflows and retention policies",
            "Mobile access and cloud deployment"
          ],
          benefits: [
            "Boost productivity with automated workflows",
            "Enhance security with tamper-proof storage",
            "Maximize flexibility with cloud and mobile access",
            "Ensure compliance with regulatory standards"
          ]
        },

        dataProcessing: {
          name: "Data Processing",
          description: "Automate data entry, forms processing, and email management with our intelligent data processing solutions.",
          services: [
            "Data Entry Automation with intelligent OCR and data validation",
            "Forms Processing with automated data extraction",
            "Email Management with automated processing and classification"
          ],
          advantages: [
            "Reduce manual errors and improve data accuracy",
            "Process data and forms up to 10x faster",
            "Ensure compliance and data security",
            "Automate repetitive tasks and save valuable time"
          ]
        },

        workflowAutomation: {
          name: "Workflow Automation",
          description: "Streamline your business processes with our comprehensive workflow automation solutions.",
          processes: [
            "Invoice Processing - automate capture, validation, and payment workflows",
            "Purchase-to-Pay - streamline procurement, approvals, and payment cycles",
            "Employee Onboarding - digitize onboarding, document collection, and access setup"
          ],
          capabilities: [
            "Process automation and optimization",
            "Approval workflows and routing",
            "Integration with existing systems",
            "Real-time monitoring and reporting"
          ]
        },

        qualityManagement: {
          name: "Quality Management",
          description: "Comprehensive quality management and compliance solutions. Ensure quality standards and regulatory compliance with our intelligent systems.",
          services: [
            "Quality Management System with process control and compliance monitoring",
            "Compliance Management with automated monitoring and reporting"
          ]
        },

        salesMarketing: {
          name: "Sales & Marketing",
          description: "Optimize your sales and marketing operations with automated order processing and comprehensive CRM solutions.",
          services: [
            "Sales Order Processing automation",
            "Customer Relationship Management (CRM)",
            "Marketing campaign automation",
            "Lead management and tracking"
          ]
        },

        mobileSolutions: {
          name: "Mobile Solutions",
          description: "Mobile-first solutions for modern businesses with responsive design and cross-platform compatibility.",
          features: [
            "Mobile-responsive interfaces",
            "Cross-platform compatibility",
            "Offline functionality",
            "Push notifications and alerts"
          ]
        },

        securityServices: {
          name: "Security Services",
          description: "Enterprise-grade security solutions to protect your data and ensure compliance with industry standards.",
          features: [
            "SSL encryption and secure protocols",
            "Regular security audits and compliance checks",
            "GDPR and regulatory compliance",
            "Data backup and disaster recovery"
          ]
        },

        integrations: {
          name: "System Integrations",
          description: "Seamless integration with 200+ enterprise systems and real-time data synchronization.",
          capabilities: [
            "API-first architecture",
            "RESTful APIs for easy integration",
            "Real-time data synchronization",
            "Custom integration development"
          ]
        }
      },

      pricing: {
        plans: [
          {
            name: "Starter",
            price: "$29/month",
            description: "Perfect for small teams and startups",
            features: [
              "Basic automation features",
              "Standard support",
              "Cloud deployment",
              "Mobile access"
            ]
          },
          {
            name: "Professional",
            price: "$79/month",
            description: "Ideal for growing businesses",
            features: [
              "Advanced automation features",
              "Priority support",
              "Custom integrations",
              "Advanced analytics"
            ]
          },
          {
            name: "Enterprise",
            price: "Custom pricing",
            description: "For large organizations with custom needs",
            features: [
              "Full feature suite",
              "24/7 dedicated support",
              "Custom development",
              "On-premise deployment options"
            ]
          }
        ]
      },

      industries: {
        healthcare: {
          name: "Healthcare",
          icon: "🏥",
          description: "HIPAA-compliant solutions for patient data management and healthcare automation",
          useCases: ["Patient records management", "Medical billing automation", "Compliance monitoring"]
        },
        finance: {
          name: "Finance",
          icon: "💰",
          description: "Secure financial data processing and regulatory compliance solutions",
          useCases: ["Financial reporting", "Transaction processing", "Regulatory compliance"]
        },
        government: {
          name: "Government",
          icon: "🏛️",
          description: "Public sector automation and document management solutions",
          useCases: ["Citizen services", "Document processing", "Compliance management"]
        },
        education: {
          name: "Education",
          icon: "🎓",
          description: "Educational institution automation and student data management",
          useCases: ["Student records", "Administrative automation", "Learning analytics"]
        },
        legal: {
          name: "Legal",
          icon: "⚖️",
          description: "Legal document management and case tracking solutions",
          useCases: ["Case management", "Document automation", "Compliance tracking"]
        },
        insurance: {
          name: "Insurance",
          icon: "🛡️",
          description: "Insurance claims processing and policy management automation",
          useCases: ["Claims processing", "Policy management", "Risk assessment"]
        },
        realEstate: {
          name: "Real Estate",
          icon: "🏢",
          description: "Property management and transaction automation solutions",
          useCases: ["Property listings", "Transaction processing", "Client management"]
        },
        manufacturing: {
          name: "Manufacturing",
          icon: "🏭",
          description: "Manufacturing process automation and quality control",
          useCases: ["Production tracking", "Quality control", "Supply chain management"]
        }
      },

      technical: {
        requirements: {
          system: "Modern web browser",
          deployment: "Cloud-based with API-first architecture",
          security: "Enterprise-grade with SSL encryption",
          integration: "RESTful APIs with 200+ system compatibility"
        },
        features: [
          "Cloud-native architecture",
          "Mobile-responsive design",
          "Real-time data synchronization",
          "Scalable infrastructure"
        ]
      },

      testimonials: {
        general: [
          "IntelliSync transformed our data processing workflow, saving us 90% of our manual work time.",
          "The business intelligence dashboards provide insights we never had before.",
          "Our document management is now completely secure and accessible from anywhere.",
          "The automation features have increased our team productivity by 5x."
        ]
      },

      awards: {
        description: "Celebrating our achievements and industry recognition",
        awards: [
          "Best Business Automation Solution 2024",
          "Excellence in Customer Service",
          "Innovation in Technology Award"
        ]
      },

      caseStudies: {
        description: "Real results from real businesses",
        examples: [
          "Healthcare provider reduced patient data processing time by 85%",
          "Financial institution achieved 99.9% accuracy in transaction processing",
          "Manufacturing company increased productivity by 300% through automation"
        ]
      }
    };
  }

  // Search website data by keyword
  searchData(keyword) {
    const results = [];
    const searchTerm = keyword.toLowerCase();

    // Search in services
    Object.keys(this.websiteData.services).forEach(serviceKey => {
      const service = this.websiteData.services[serviceKey];
      if (service.name.toLowerCase().includes(searchTerm) ||
          service.description.toLowerCase().includes(searchTerm)) {
        results.push({
          type: 'service',
          category: serviceKey,
          data: service
        });
      }
    });

    // Search in industries
    Object.keys(this.websiteData.industries).forEach(industryKey => {
      const industry = this.websiteData.industries[industryKey];
      if (industry.name.toLowerCase().includes(searchTerm) ||
          industry.description.toLowerCase().includes(searchTerm)) {
        results.push({
          type: 'industry',
          category: industryKey,
          data: industry
        });
      }
    });

    // Search in pricing
    this.websiteData.pricing.plans.forEach(plan => {
      if (plan.name.toLowerCase().includes(searchTerm) ||
          plan.description.toLowerCase().includes(searchTerm)) {
        results.push({
          type: 'pricing',
          data: plan
        });
      }
    });

    // Search in technical info
    if (this.websiteData.technical.requirements.system.toLowerCase().includes(searchTerm) ||
        this.websiteData.technical.requirements.deployment.toLowerCase().includes(searchTerm)) {
      results.push({
        type: 'technical',
        data: this.websiteData.technical
      });
    }

    return results;
  }

  // Get specific service information
  getServiceInfo(serviceName) {
    const serviceKey = serviceName.toLowerCase().replace(/\s+/g, '');
    return this.websiteData.services[serviceKey] || null;
  }

  // Get industry information
  getIndustryInfo(industryName) {
    const industryKey = industryName.toLowerCase().replace(/\s+/g, '');
    return this.websiteData.industries[industryKey] || null;
  }

  // Get pricing information
  getPricingInfo() {
    return this.websiteData.pricing;
  }

  // Get contact information
  getContactInfo() {
    return this.websiteData.company.contact;
  }

  // Get technical requirements
  getTechnicalInfo() {
    return this.websiteData.technical;
  }

  // Get all services
  getAllServices() {
    return this.websiteData.services;
  }

  // Get all industries
  getAllIndustries() {
    return this.websiteData.industries;
  }

  // Get testimonials
  getTestimonials() {
    return this.websiteData.testimonials;
  }

  // Get company information
  getCompanyInfo() {
    return this.websiteData.company;
  }

  // Generate response based on search results
  generateResponseFromData(searchResults, userMessage) {
    if (searchResults.length === 0) {
      return null;
    }

    const response = {
      found: true,
      data: searchResults,
      summary: this.generateSummary(searchResults, userMessage)
    };

    return response;
  }

  // Generate summary from search results
  generateSummary(results, userMessage) {
    let summary = "Based on your inquiry about '" + userMessage + "', here's what I found:\n\n";

    results.forEach((result, index) => {
      if (result.type === 'service') {
        summary += `${index + 1}. **${result.data.name}**: ${result.data.description}\n`;
        if (result.data.features) {
          summary += `   Key features: ${result.data.features.slice(0, 3).join(', ')}\n`;
        }
      } else if (result.type === 'industry') {
        summary += `${index + 1}. **${result.data.name} ${result.data.icon}**: ${result.data.description}\n`;
      } else if (result.type === 'pricing') {
        summary += `${index + 1}. **${result.data.name} Plan**: ${result.data.price} - ${result.data.description}\n`;
      } else if (result.type === 'technical') {
        summary += `${index + 1}. **Technical Requirements**: ${result.data.requirements.system}\n`;
      }
      summary += "\n";
    });

    return summary;
  }
}

// Create singleton instance
const websiteDataService = new WebsiteDataService();

export default websiteDataService; 