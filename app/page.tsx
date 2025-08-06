import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ArrowRight, Heart, Brain, Globe, Shield, BookOpen, Leaf, Zap, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const sectors = [
    {
      icon: Heart,
      title: 'Healthcare Access',
      description: 'AI-powered medical diagnostics and telemedicine solutions for remote communities.',
      color: 'text-african-purple'
    },
    {
      icon: Shield,
      title: 'Emergency Response & Mobility',
      description: 'Smart dispatch systems and real-time emergency coordination.',
      color: 'text-african-teal'
    },
    {
      icon: BookOpen,
      title: 'Education Access & Optimization',
      description: 'Data-driven learning platforms and educational resource optimization.',
      color: 'text-african-green'
    },
    {
      icon: Leaf,
      title: 'Agricultural Intelligence & Food Systems',
      description: 'AI for crop yield prediction and sustainable farming solutions.',
      color: 'text-african-yellow'
    },
    {
      icon: TrendingUp,
      title: 'Data for Policy & Urban Development',
      description: 'Intelligent urban planning and policy-making through data analytics.',
      color: 'text-primary-600'
    },
    {
      icon: Zap,
      title: 'Custom Tech Solutions for Public Good',
      description: 'Bespoke technology solutions for government and social impact organizations.',
      color: 'text-accent-700'
    }
  ]

  const flagshipSolutions = [
    {
      name: 'ICU-CONNECT',
      description: 'AI-powered ICU bed allocation and smart ambulance dispatch system',
      impact: 'Reducing life-saving delays by over 90%',
      stats: '500+ lives saved',
      color: 'bg-african-purple'
    },
    {
      name: 'Agri-Map',
      description: 'AI-driven crop yield prediction and market matching platform',
      impact: 'Increasing farmer income by 40%',
      stats: '10,000+ farmers served',
      color: 'bg-african-teal'
    },
    {
      name: 'EduTrack',
      description: 'Data-powered school performance analytics and optimization',
      impact: 'Improving learning outcomes by 35%',
      stats: '500+ schools connected',
      color: 'bg-primary-600'
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight animate-fade-in">
              Real Solutions for Africa.
              <br />
                                        <span className="text-african-purple">Powered by Intelligence.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              We use AI and human-centered design to solve Africa's most urgent challenges — from health to logistics, education to emergency response.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <Link href="/contact" className="btn-accent text-lg px-8 py-4">
                Partner With Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/solutions" className="btn-secondary text-lg px-8 py-4">
                Explore Our Work
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce-slow"></div>
                            <div className="absolute bottom-20 right-10 w-16 h-16 bg-african-teal/20 rounded-full animate-bounce-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-white/5 rounded-full animate-bounce-slow" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900">
              Our Mission
            </h2>
            
            <div className="bg-gradient-to-r from-african-purple to-african-teal p-8 rounded-2xl text-white">
              <p className="text-xl md:text-2xl font-semibold mb-4">
                "We are an African innovation company solving real-world problems through scalable, tech-driven solutions."
              </p>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Africa doesn't lack ideas. It lacks access, investment, and scalable systems. We're changing that. 
              Our mission is to build the infrastructure and solutions that will power Africa's next generation 
              of growth, ensuring that local innovators have the tools they need to solve local problems.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Our Sectors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We focus on the most critical areas where technology can create immediate, measurable impact across Africa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 ${sector.color} bg-opacity-10 rounded-xl flex items-center justify-center mb-6`}>
                  <sector.icon className={`w-8 h-8 ${sector.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{sector.title}</h3>
                <p className="text-gray-600 leading-relaxed">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Solutions Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Flagship Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most impactful innovations that are already changing lives across Africa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {flagshipSolutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className={`w-12 h-12 ${solution.color} rounded-lg flex items-center justify-center mb-6`}>
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{solution.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-african-teal">{solution.impact}</p>
                  <p className="text-lg font-bold text-african-purple">{solution.stats}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="section-padding bg-gradient-to-r from-african-purple to-african-teal text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Why We Exist
            </h2>
            
            <div className="bg-white/10 backdrop-blur-custom p-8 rounded-2xl">
              <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                "Africa doesn't lack ideas. It lacks access, investment, and scalable systems. We're changing that."
              </p>
            </div>
            
            <p className="text-lg text-gray-100 leading-relaxed">
              We believe in Africa's potential to solve its own challenges. Our role is to provide the technology, 
              infrastructure, and support that local innovators need to create lasting change. We're not just 
              building solutions — we're building the foundation for Africa's digital future.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Ready to Build the Future?
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Whether you're a government agency, global investor, or social impact organization, 
              we're building the systems that change lives. Let's build them together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-accent text-lg px-8 py-4">
                Work With Us
              </Link>
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Invest in Innovation
              </Link>
              <Link href="/about" className="btn-secondary text-lg px-8 py-4">
                Join Our Movement
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 