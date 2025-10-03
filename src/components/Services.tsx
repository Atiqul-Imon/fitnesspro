'use client'

import { Dumbbell, Users, Zap, Utensils, Heart, Target } from 'lucide-react'
import Image from 'next/image'

export default function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: 'Personal Training',
      description: 'One-on-one sessions with certified trainers to achieve your specific goals.',
      features: ['Custom workout plans', 'Progress tracking', 'Form correction', 'Motivation & support'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'High-energy group workouts that keep you motivated and engaged.',
      features: ['Yoga & Pilates', 'HIIT Training', 'Spinning Classes', 'CrossFit Sessions'],
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: Zap,
      title: 'HIIT Training',
      description: 'High-intensity interval training for maximum results in minimum time.',
      features: ['Fat burning', 'Cardio improvement', 'Strength building', 'Time efficient'],
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: Utensils,
      title: 'Nutrition Coaching',
      description: 'Expert guidance on healthy eating habits and meal planning.',
      features: ['Meal planning', 'Macro tracking', 'Supplement advice', 'Lifestyle coaching'],
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Heart,
      title: 'Wellness Programs',
      description: 'Holistic approach to health including mental wellness and recovery.',
      features: ['Stress management', 'Recovery protocols', 'Sleep optimization', 'Mindfulness training'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Target,
      title: 'Specialized Programs',
      description: 'Targeted programs for specific goals and populations.',
      features: ['Weight loss', 'Muscle building', 'Senior fitness', 'Athletic performance'],
      image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Premium Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From personal training to group classes, we offer comprehensive fitness solutions tailored to your needs and goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full btn-primary group-hover:bg-primary-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Fitness Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Book a free consultation with our experts to create a personalized fitness plan just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Book Free Consultation
              </button>
              <button className="btn-secondary">
                View All Programs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

