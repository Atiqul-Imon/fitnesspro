'use client'

import { Dumbbell } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-6 rounded-full mx-auto w-20 h-20 flex items-center justify-center shadow-lg">
            <Dumbbell className="h-10 w-10 text-white animate-pulse" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full animate-ping opacity-20"></div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            FitLife Pro
          </h2>
          <p className="text-gray-600">
            Preparing your fitness journey...
          </p>
        </div>

        {/* Loading Animation */}
        <div className="mt-8 flex justify-center space-x-2">
          <div className="w-3 h-3 bg-primary-600 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-primary-600 rounded-full animate-bounce animation-delay-100"></div>
          <div className="w-3 h-3 bg-primary-600 rounded-full animate-bounce animation-delay-200"></div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-24 h-24 bg-secondary-200 rounded-full opacity-10 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-accent-200 rounded-full opacity-10 animate-pulse animation-delay-2000"></div>
      </div>
    </div>
  )
}
