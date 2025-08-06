import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Users, Target, Globe, Award, Heart, Brain, Zap } from 'lucide-react'

export default function About() {
  const teamMembers = [
    {
      name: 'Selomon Tesfaye',
      role: 'CEO & Co-Founder',
      bio: 'Former healthcare executive with 15+ years experience in African healthcare systems. PhD in Public Health from University of Nairobi.',
      expertise: 'Healthcare Systems, Public Policy, AI Ethics'
    },
    {
      name: 'Almaz Tesema',
      role: 'CTO & Co-Founder',
      bio: 'Tech entrepreneur and former Google engineer. Built scalable systems serving millions of users across Africa.',
      expertise: 'AI/ML, System Architecture, Product Development'
    },
    {
      name: 'Girma Tadesse',
      role: 'Head of Operations',
      bio: 'Former McKinsey consultant specializing in African market entry and operational scaling.',
      expertise: 'Operations, Strategy, Market Development'
    }
  ]

  const partners = [
    {
      name: 'African Development Bank',
      type: 'Strategic Partner',
      description: 'Supporting our healthcare and education initiatives across the continent.'
    },
    {
      name: 'Google for Startups',
      type: 'Technology Partner',
      description: 'Providing cloud infrastructure and AI/ML expertise for our solutions.'
    },
    {
      name: 'Ethiopian Ministry of Health',
      type: 'Government Partner',
      description: 'Implementing ICU-CONNECT across major hospitals in Ethiopia.'
    },
    {
      name: 'African Union',
      type: 'Policy Partner',
      description: 'Advising on continental digital transformation strategies.'
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Human-Centered',
      description: 'Every solution we build starts with understanding the real needs of African communities.'
    },
    {
      icon: Brain,
      title: 'Innovation-Driven',
      description: 'We leverage cutting-edge technology to solve age-old problems in new ways.'
    },
    {
      icon: Globe,
      title: 'Pan-African',
      description: 'We think continentally but act locally, building solutions that scale across borders.'
    },
    {
      icon: Target,
      title: 'Impact-Focused',
      description: 'We measure success by the lives we improve and the communities we transform.'
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
              About W&B
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              We're building Africa's next generation of technology solutions, one innovation at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Born from frustration with imported solutions that don't fit African contexts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">The Beginning</h3>
                <p className="text-gray-600 leading-relaxed">
                  In 2020, our founders witnessed firsthand how imported technology solutions were failing 
                  African communities. Whether it was healthcare systems that couldn't handle local conditions, 
                  or educational platforms that didn't account for connectivity challenges, the gap was clear.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We realized that Africa doesn't need more foreign solutions — it needs local innovators 
                  with the right tools and support to build solutions that actually work for African contexts.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-african-purple to-african-teal p-8 rounded-2xl text-white">
                <h4 className="text-xl font-bold mb-4">Our Vision</h4>
                <p className="text-lg leading-relaxed">
                  "To become Africa's leading technology innovation company, building solutions that not only 
                  solve today's problems but create the foundation for tomorrow's opportunities."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every solution we build.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-african-purple bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <value.icon className="w-8 h-8 text-african-purple" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate innovators driving Africa's technological transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                                            <div className="w-20 h-20 bg-gradient-to-br from-african-purple to-african-teal rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">{member.name}</h3>
                                            <p className="text-african-teal font-semibold text-center mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                                            <div className="bg-african-purple bg-opacity-10 rounded-lg p-4">
                              <p className="text-sm font-semibold text-african-purple">Expertise: {member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with leading organizations to maximize our impact across Africa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                  <span className="bg-african-teal text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {partner.type}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-gradient-to-r from-african-purple to-african-teal text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Numbers that tell the story of lives changed and communities transformed.
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
              <div className="text-4xl md:text-5xl font-bold mb-2">90%</div>
              <p className="text-gray-100">Efficiency Improvement</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 