'use client'

import React from 'react'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Manager',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'FitLife Pro transformed my life! I lost 30 pounds and gained so much confidence. The trainers are amazing and the community is incredibly supportive.',
      rating: 5,
      achievement: 'Lost 30 lbs in 6 months'
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'The 24/7 access is perfect for my schedule. I can work out anytime, and the equipment is always clean and well-maintained. Best gym investment I\'ve made.',
      rating: 5,
      achievement: 'Gained 15 lbs muscle'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Teacher',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'The group classes are fantastic! The instructors are motivating and the variety keeps me engaged. I actually look forward to working out now.',
      rating: 5,
      achievement: 'Completed 50 classes'
    },
    {
      name: 'David Thompson',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'The personal training sessions have been game-changing. My trainer created a custom program that fits my goals perfectly. Highly recommend!',
      rating: 5,
      achievement: 'Improved strength by 40%'
    },
    {
      name: 'Lisa Park',
      role: 'Nurse',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'After having kids, I thought getting back in shape would be impossible. FitLife Pro made it achievable with their supportive environment and expert guidance.',
      rating: 5,
      achievement: 'Post-baby transformation'
    },
    {
      name: 'James Wilson',
      role: 'Retired',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      content: 'At 65, I was skeptical about joining a gym. But the trainers here understand how to work with seniors. I feel stronger and more energetic than ever.',
      rating: 5,
      achievement: 'Age 65, stronger than ever'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="gradient-text">Members Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real members have to say about their transformation journey with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-100">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent-500 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Achievement Badge */}
              <div className="bg-primary-50 rounded-lg p-3 mb-6">
                <p className="text-primary-700 font-semibold text-sm">
                  🏆 {testimonial.achievement}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-accent-500 fill-current" />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">500+</div>
              <div className="text-gray-600">Happy Members</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">95%</div>
              <div className="text-gray-600">Goal Achievement</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-primary-100 mb-6">
              Start your transformation journey today with a free trial and personalized fitness assessment.
            </p>
            <button className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
