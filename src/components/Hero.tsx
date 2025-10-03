'use client'

import { ArrowRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[75vh] flex items-center bg-gradient-to-br from-gray-50 to-primary-50 overflow-hidden w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-xl animate-bounce-slow"></div>
        <div className="absolute top-40 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-secondary-600 rounded-full mix-blend-multiply filter blur-xl animate-bounce-slow animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-8 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-accent-600 rounded-full mix-blend-multiply filter blur-xl animate-bounce-slow animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10 py-4 sm:py-6 lg:py-6 xl:py-8 w-full">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-6 xl:gap-8 items-center w-full">
          {/* Left Content */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-5 animate-fade-in text-center lg:text-left w-full">

            {/* Main Headline */}
            <div className="space-y-3 w-full">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-4 sm:px-0 break-words">
                Transform Your
                <span className="gradient-text block">Body & Mind</span>
                Today
              </h1>
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 px-4 sm:px-0">
                Join thousands of members who&apos;ve achieved their fitness goals with our premium training programs, state-of-the-art equipment, and expert guidance.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">Happy Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">15+</div>
                <div className="text-xs sm:text-sm text-gray-600">Expert Trainers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Classes Weekly</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row gap-3 w-full px-4 sm:px-0 max-w-md mx-auto lg:mx-0">
              <button className="btn-primary text-sm xs:text-base px-4 xs:px-6 sm:px-8 py-3 sm:py-4 group w-full xs:w-auto flex-1">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary text-sm xs:text-base px-4 xs:px-6 sm:px-8 py-3 sm:py-4 group w-full xs:w-auto flex-1">
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Watch Video
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 sm:pt-6 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Trusted by fitness enthusiasts worldwide</p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6">
                <div className="text-sm sm:text-lg font-bold text-gray-700 bg-gray-100 px-3 py-2 sm:px-4 sm:py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow">FITNESS+</div>
                <div className="text-sm sm:text-lg font-bold text-gray-700 bg-gray-100 px-3 py-2 sm:px-4 sm:py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow">HEALTH MAG</div>
                <div className="text-sm sm:text-lg font-bold text-gray-700 bg-gray-100 px-3 py-2 sm:px-4 sm:py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow">GYM PRO</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-up mt-6 sm:mt-8 lg:mt-0 w-full">
            <div className="relative w-full">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Fitness training session"
                  width={600}
                  height={800}
                  className="w-full h-[300px] xs:h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

            </div>

            {/* Background Elements */}
            <div className="absolute top-1/2 -left-4 sm:-left-8 w-12 h-12 sm:w-16 sm:h-16 bg-primary-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-1/4 -right-4 sm:-right-8 w-8 h-8 sm:w-12 sm:h-12 bg-secondary-600 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-gray-400 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
