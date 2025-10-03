'use client'

import { Dumbbell, Users, Clock, Shield, Trophy, Heart } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Dumbbell,
      title: 'State-of-the-Art Equipment',
      description: 'Latest fitness equipment from top brands including Technogym, Life Fitness, and Hammer Strength.',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Users,
      title: 'Expert Personal Trainers',
      description: 'Certified professionals with years of experience to guide you on your fitness journey.',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Open 24/7 for members with keycard access. Never miss a workout again.',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: Shield,
      title: 'Safe & Clean Environment',
      description: 'Regular sanitization, social distancing protocols, and premium hygiene standards.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Trophy,
      title: 'Proven Results',
      description: 'Over 95% of our members achieve their fitness goals within 90 days.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Heart,
      title: 'Holistic Wellness',
      description: 'Complete wellness approach including nutrition counseling and mental health support.',
      color: 'from-pink-500 to-pink-600'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="gradient-text">FitLife Pro</span>?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            We're not just a gym - we're your partner in achieving a healthier, stronger, and more confident version of yourself.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 card-hover"
            >
              {/* Icon */}
              <div className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-r ${feature.color} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs sm:text-sm font-semibold">{i}</span>
                  </div>
                ))}
              </div>
              <div className="text-center sm:text-left flex-1">
                <div className="font-semibold text-gray-900 text-sm sm:text-base">Join 500+ Happy Members</div>
                <div className="text-xs sm:text-sm text-gray-600">Start your transformation today</div>
              </div>
              <button className="btn-primary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
