import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Heart, Shield, BookOpen, Leaf, TrendingUp, Zap, Brain, Users, Globe, Target } from 'lucide-react'

export default function Solutions() {
  const solutions = [
                    {
                  id: 'healthcare',
                  icon: Heart,
                  title: 'Healthcare Access',
                  color: 'text-african-purple',
                  bgColor: 'bg-african-purple',
      problems: [
        'Critical care delays in rural areas',
        'Inefficient hospital resource allocation',
        'Limited access to specialist care'
      ],
      solutions: [
        {
          name: 'ICU-CONNECT',
          description: 'AI-powered ICU bed allocation and smart ambulance dispatch system',
          features: ['Real-time bed availability tracking', 'Intelligent routing algorithms', 'Integration with emergency services'],
          impact: 'Reducing life-saving delays by over 90%',
          stats: '500+ lives saved across 50+ hospitals'
        },
        {
          name: 'TeleMed-Africa',
          description: 'Telemedicine platform connecting rural patients with specialists',
          features: ['Video consultations', 'Digital health records', 'Prescription management'],
          impact: 'Increasing specialist access by 300%',
          stats: '10,000+ consultations completed'
        }
      ]
    },
                    {
                  id: 'emergency',
                  icon: Shield,
                  title: 'Emergency Response & Mobility',
                  color: 'text-african-teal',
                  bgColor: 'bg-african-teal',
      problems: [
        'Slow emergency response times',
        'Poor coordination between services',
        'Limited real-time data sharing'
      ],
      solutions: [
        {
          name: 'Emergency-AI',
          description: 'Smart dispatch system with real-time coordination',
          features: ['AI-powered incident prioritization', 'Real-time vehicle tracking', 'Multi-agency coordination'],
          impact: 'Reducing response times by 60%',
          stats: 'Active in 25+ cities across Africa'
        }
      ]
    },
                    {
                  id: 'education',
                  icon: BookOpen,
                  title: 'Education Access & Optimization',
                  color: 'text-african-green',
                  bgColor: 'bg-african-green',
      problems: [
        'Poor learning outcomes tracking',
        'Inefficient resource allocation',
        'Limited access to quality education'
      ],
      solutions: [
        {
          name: 'EduTrack',
          description: 'Data-powered school performance analytics and optimization',
          features: ['Student performance tracking', 'Resource optimization algorithms', 'Personalized learning paths'],
          impact: 'Improving learning outcomes by 35%',
          stats: '500+ schools connected, 100K+ students served'
        },
        {
          name: 'LearnConnect',
          description: 'Digital learning platform for remote communities',
          features: ['Offline-capable content', 'Multi-language support', 'Progress tracking'],
          impact: 'Increasing educational access by 200%',
          stats: '50,000+ students reached'
        }
      ]
    },
                    {
                  id: 'agriculture',
                  icon: Leaf,
                  title: 'Agricultural Intelligence & Food Systems',
                  color: 'text-african-yellow',
                  bgColor: 'bg-african-yellow',
      problems: [
        'Poor crop yield predictions',
        'Inefficient market access',
        'Limited farming knowledge transfer'
      ],
      solutions: [
        {
          name: 'Agri-Map',
          description: 'AI-driven crop yield prediction and market matching platform',
          features: ['Satellite imagery analysis', 'Weather pattern prediction', 'Market price forecasting'],
          impact: 'Increasing farmer income by 40%',
          stats: '10,000+ farmers served across 15 countries'
        },
        {
          name: 'FarmConnect',
          description: 'Digital marketplace connecting farmers with buyers',
          features: ['Direct buyer connections', 'Quality certification', 'Payment processing'],
          impact: 'Reducing post-harvest losses by 30%',
          stats: '5,000+ transactions completed'
        }
      ]
    },
                    {
                  id: 'urban',
                  icon: TrendingUp,
                  title: 'Data for Policy & Urban Development',
                  color: 'text-primary-600',
                  bgColor: 'bg-primary-600',
      problems: [
        'Lack of data-driven policy making',
        'Inefficient urban planning',
        'Poor resource allocation'
      ],
      solutions: [
        {
          name: 'UrbanAI',
          description: 'Intelligent urban planning and policy-making through data analytics',
          features: ['Population density mapping', 'Infrastructure optimization', 'Policy impact simulation'],
          impact: 'Improving urban planning efficiency by 50%',
          stats: 'Used by 10+ major African cities'
        }
      ]
    },
                    {
                  id: 'custom',
                  icon: Zap,
                  title: 'Custom Tech Solutions for Public Good',
                  color: 'text-accent-700',
                  bgColor: 'bg-accent-700',
      problems: [
        'Generic solutions not fitting local needs',
        'High implementation costs',
        'Limited technical expertise'
      ],
      solutions: [
        {
          name: 'CustomBuild',
          description: 'Bespoke technology solutions for government and social impact organizations',
          features: ['Needs assessment', 'Custom development', 'Training and support'],
          impact: 'Reducing implementation costs by 40%',
          stats: '50+ custom solutions delivered'
        }
      ]
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-african-purple to-african-teal text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              Our Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Technology-driven solutions that address Africa's most pressing challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Problems We Solve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We identify critical challenges and build intelligent solutions that create measurable impact.
            </p>
          </div>
          
          <div className="space-y-16">
            {solutions.map((sector, index) => (
              <div key={sector.id} id={sector.id} className="scroll-mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Problems */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className={`w-16 h-16 ${sector.bgColor} bg-opacity-10 rounded-xl flex items-center justify-center`}>
                        <sector.icon className={`w-8 h-8 ${sector.color}`} />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">{sector.title}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-gray-900">Key Challenges:</h4>
                      <ul className="space-y-3">
                        {sector.problems.map((problem, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className={`w-2 h-2 ${sector.bgColor} rounded-full mt-2 flex-shrink-0`}></div>
                            <span className="text-gray-600">{problem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Solutions */}
                  <div className="space-y-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">Our Solutions:</h4>
                    <div className="space-y-6">
                      {sector.solutions.map((solution, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className={`w-10 h-10 ${sector.bgColor} rounded-lg flex items-center justify-center`}>
                              <Brain className="w-5 h-5 text-white" />
                            </div>
                            <h5 className="text-xl font-bold text-gray-900">{solution.name}</h5>
                          </div>
                          
                          <p className="text-gray-600 mb-4 leading-relaxed">{solution.description}</p>
                          
                          <div className="space-y-4">
                            <div>
                              <h6 className="font-semibold text-gray-900 mb-2">Key Features:</h6>
                              <ul className="space-y-1">
                                {solution.features.map((feature, featureIdx) => (
                                  <li key={featureIdx} className="text-sm text-gray-600 flex items-center space-x-2">
                                    <Target className="w-3 h-3 text-african-teal" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                              <div className="bg-african-teal bg-opacity-10 rounded-lg p-3">
                  <p className="text-sm font-semibold text-african-teal">Impact</p>
                                <p className="text-sm text-gray-700">{solution.impact}</p>
                              </div>
                                              <div className="bg-african-purple bg-opacity-10 rounded-lg p-3">
                  <p className="text-sm font-semibold text-african-purple">Reach</p>
                                <p className="text-sm text-gray-700">{solution.stats}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="section-padding bg-gradient-to-r from-african-purple to-african-teal text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Our Impact Across Sectors
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Real results from real solutions built for African contexts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <p className="text-gray-100">African Countries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <p className="text-gray-100">Lives Saved</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <p className="text-gray-100">Farmers Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">100K+</div>
              <p className="text-gray-100">Students Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Ready to Implement These Solutions?
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Whether you're a government agency, healthcare provider, educational institution, or agricultural organization, 
              we can customize these solutions for your specific needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contact" className="btn-accent text-lg px-8 py-4">
                Get Started Today
              </a>
              <a href="/contact" className="btn-secondary text-lg px-8 py-4">
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 