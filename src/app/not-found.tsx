'use client'

import Link from 'next/link'
import { Home, ArrowLeft, Dumbbell, Search } from 'lucide-react'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* 404 Illustration */}
        <div className="relative mb-8">
          <div className="text-8xl sm:text-9xl font-bold text-primary-200 select-none">
            404
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-primary-600 p-4 rounded-full">
              <Dumbbell className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Oops! This Page is
            <span className="gradient-text block">Out of Shape</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Looks like this page skipped leg day! Don&apos;t worry, even the best fitness routines need a break. 
            Let&apos;s get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link 
            href="/"
            className="btn-primary text-lg px-8 py-4 group inline-flex items-center justify-center"
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="btn-secondary text-lg px-8 py-4 group inline-flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Popular Pages
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <Link 
              href="/#services" 
              className="flex items-center p-4 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors group"
            >
              <div className="bg-primary-100 p-2 rounded-lg mr-3 group-hover:bg-primary-200 transition-colors">
                <Dumbbell className="h-5 w-5 text-primary-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Our Services</div>
                <div className="text-sm text-gray-600">Training programs</div>
              </div>
            </Link>
            
            <Link 
              href="/#pricing" 
              className="flex items-center p-4 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors group"
            >
              <div className="bg-primary-100 p-2 rounded-lg mr-3 group-hover:bg-primary-200 transition-colors">
                <Search className="h-5 w-5 text-primary-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Pricing Plans</div>
                <div className="text-sm text-gray-600">Membership options</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Motivational Message */}
        <div className="mt-12 p-6 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl text-white">
          <h4 className="text-xl font-bold mb-2">
            💪 Keep Moving Forward!
          </h4>
          <p className="text-primary-100">
            Every great fitness journey has its ups and downs. This is just a small detour on your path to success!
          </p>
        </div>

        {/* Background Elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-24 h-24 bg-secondary-200 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-20 left-20 w-28 h-28 bg-accent-200 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-40 right-20 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-pulse animation-delay-3000"></div>
        </div>
      </div>
    </div>
  )
}
