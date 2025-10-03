'use client'

import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-700 to-secondary-700 text-white relative overflow-hidden w-full">
      {/* Background overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg">
                Ready to Transform
                <span className="block text-accent-200 drop-shadow-lg">Your Life?</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed drop-shadow-md">
                Join thousands of members who&apos;ve achieved their fitness goals. Start your journey today with our free trial and expert guidance.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent-300 rounded-full shadow-lg"></div>
                <span className="text-white font-medium drop-shadow-md">7-day free trial - no commitment</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent-300 rounded-full shadow-lg"></div>
                <span className="text-white font-medium drop-shadow-md">Personal fitness assessment included</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent-300 rounded-full shadow-lg"></div>
                <span className="text-white font-medium drop-shadow-md">Access to all facilities and classes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent-300 rounded-full shadow-lg"></div>
                <span className="text-white font-medium drop-shadow-md">Expert trainer consultation</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="bg-white text-primary-700 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center group shadow-lg text-sm sm:text-base">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-white hover:text-primary-700 transition-colors shadow-lg backdrop-blur-sm bg-white/10 text-sm sm:text-base">
                Call Now: (555) 123-FIT
              </button>
            </div>
          </div>

          {/* Right Content - Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/30 p-3 rounded-lg shadow-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white drop-shadow-md">Call Us</div>
                    <div className="text-white/90 font-medium">(555) 123-FIT</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-white/30 p-3 rounded-lg shadow-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white drop-shadow-md">Email Us</div>
                    <div className="text-white/90 font-medium">info@fitlifepro.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-white/30 p-3 rounded-lg shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white drop-shadow-md">Visit Us</div>
                    <div className="text-white/90 font-medium">123 Fitness Street<br />Health City, HC 12345</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">Operating Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-white font-medium drop-shadow-md">Monday - Friday</span>
                  <span className="text-white/90 font-medium">5:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white font-medium drop-shadow-md">Saturday</span>
                  <span className="text-white/90 font-medium">6:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white font-medium drop-shadow-md">Sunday</span>
                  <span className="text-white/90 font-medium">6:00 AM - 8:00 PM</span>
                </div>
                <div className="pt-3 border-t border-white/30">
                  <div className="flex justify-between font-bold">
                    <span className="text-white drop-shadow-md">Member 24/7 Access</span>
                    <span className="text-accent-200 drop-shadow-md">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-xl">
            <p className="text-lg text-white drop-shadow-md">
              <span className="font-bold text-white">Limited Time Offer:</span> Get your first month 50% off when you join today!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

