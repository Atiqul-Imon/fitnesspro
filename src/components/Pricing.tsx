'use client'

import { Check, Star, Zap } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: 49,
      period: 'month',
      description: 'Perfect for beginners starting their fitness journey',
      features: [
        '24/7 Gym Access',
        'Basic Equipment Usage',
        'Locker Room Access',
        'Free Wi-Fi',
        'Basic Group Classes'
      ],
      color: 'from-gray-500 to-gray-600',
      popular: false
    },
    {
      name: 'Premium',
      price: 89,
      period: 'month',
      description: 'Most popular choice for serious fitness enthusiasts',
      features: [
        'Everything in Basic',
        'Premium Equipment Access',
        'Personal Training Session (2/month)',
        'Nutrition Consultation',
        'All Group Classes',
        'Sauna & Steam Room',
        'Guest Passes (2/month)'
      ],
      color: 'from-primary-500 to-primary-600',
      popular: true
    },
    {
      name: 'Elite',
      price: 149,
      period: 'month',
      description: 'Ultimate package for maximum results and convenience',
      features: [
        'Everything in Premium',
        'Unlimited Personal Training',
        'Nutrition Meal Plans',
        'Recovery & Massage Therapy',
        'Priority Class Booking',
        'Guest Passes (5/month)',
        '1-on-1 Goal Setting Sessions',
        'Progress Tracking App'
      ],
      color: 'from-secondary-500 to-secondary-600',
      popular: false
    }
  ]

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your <span className="gradient-text">Perfect Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible membership options designed to fit your lifestyle and fitness goals. Start with a free trial today.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl card-hover ${
                plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold gradient-text">${plan.price}</span>
                    <span className="text-gray-500 ml-1">/{plan.period}</span>
                  </div>
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {plan.popular ? 'Get Started Now' : 'Choose Plan'}
                </button>
              </div>

              {/* Features */}
              <div className="px-8 pb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not Sure Which Plan is Right for You?
            </h3>
            <p className="text-gray-600 mb-6">
              Take advantage of our 7-day free trial to explore all our facilities and services. No commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Free Trial
              </button>
              <button className="btn-secondary">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Special Offers */}
        <div className="mt-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="h-8 w-8" />
                <h4 className="text-2xl font-bold">Student Discount</h4>
              </div>
              <p className="text-accent-100 mb-4">
                Get 20% off any membership plan with a valid student ID.
              </p>
              <button className="bg-white text-accent-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                Learn More
              </button>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Star className="h-8 w-8" />
                <h4 className="text-2xl font-bold">Corporate Memberships</h4>
              </div>
              <p className="text-green-100 mb-4">
                Special rates for companies with 10+ employees. Contact us for details.
              </p>
              <button className="bg-white text-green-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
