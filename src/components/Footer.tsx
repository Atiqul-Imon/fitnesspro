'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    services: [
      { name: 'Personal Training', href: '#services' },
      { name: 'Group Classes', href: '#services' },
      { name: 'Nutrition Coaching', href: '#services' },
      { name: 'Wellness Programs', href: '#services' },
      { name: 'Specialized Programs', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Trainers', href: '#trainers' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
      { name: 'Blog', href: '#blog' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Membership', href: '#membership' },
      { name: 'Privacy Policy', href: '#privacy' }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ]

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-2 rounded-lg">
                <span className="text-white font-bold text-xl">FP</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">FitLife Pro</h3>
                <p className="text-sm text-gray-400">Premium Fitness</p>
              </div>
            </Link>

            <p className="text-gray-400 leading-relaxed">
              Transform your body and mind with our premium fitness center. Expert trainers, state-of-the-art equipment, and a supportive community await you.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">(555) 123-FIT</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">info@fitlifepro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">123 Fitness Street, Health City</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">Mon-Fri: 5AM-10PM | Sat-Sun: 6AM-8PM</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="bg-gray-800 hover:bg-primary-600 p-3 rounded-lg transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-gray-400">Get fitness tips, class schedules, and exclusive offers delivered to your inbox.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pixel Forge Promotion */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-8">
          <div className="bg-gradient-to-r from-primary-900 to-secondary-900 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              🚀 Need a Custom Landing Page Like This?
            </h3>
            <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
              Get your own professional landing page designed and developed by our expert team. 
              Perfect for fitness centers, gyms, personal trainers, and wellness businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="https://pixelforgebd.com/landing-pages" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                View Landing Page Templates
              </Link>
              <Link 
                href="https://pixelforgebd.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-primary-900 transition-colors"
              >
                Contact Pixel Forge
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 FitLife Pro. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <div className="flex space-x-6">
                <Link href="#terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="#privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#cookies" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
              <div className="text-gray-500 text-xs">
                Built by{' '}
                <Link 
                  href="https://www.pixelforgebd.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
                >
                  Pixel Forge
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

