import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-african-purple to-african-teal rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl">W&B</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Real Solutions for Africa. Powered by Intelligence. We use AI and human-centered design to solve Africa's most urgent challenges.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-african-teal transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-african-teal transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-african-teal transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-african-teal transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-300 hover:text-african-teal transition-colors duration-300">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-african-teal transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions#healthcare" className="text-gray-300 hover:text-african-teal transition-colors duration-300">
                  Healthcare Access
                </Link>
              </li>
              <li>
                <Link href="/solutions#education" className="text-gray-300 hover:text-african-teal transition-colors duration-300">
                  Education Access
                </Link>
              </li>
              <li>
                <Link href="/solutions#agriculture" className="text-gray-300 hover:text-african-teal transition-colors duration-300">
                  Agricultural Intelligence
                </Link>
              </li>
              <li>
                <Link href="/solutions#emergency" className="text-gray-300 hover:text-african-teal transition-colors duration-300">
                  Emergency Response
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-african-teal" />
                <span className="text-gray-300 text-sm">wondwossenhailu7@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-african-teal" />
                <span className="text-gray-300 text-sm">+251 913 266 990</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-african-teal" />
                <span className="text-gray-300 text-sm">Addis Ababa, Ethiopia</span>
              </div>
            </div>
            <Link href="/contact" className="btn-accent inline-block">
              Partner With Us
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} W&B. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for Africa</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 