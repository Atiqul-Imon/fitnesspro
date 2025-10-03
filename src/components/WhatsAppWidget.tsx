'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X, Send, Phone, Clock } from 'lucide-react'
import { contactConfig, getWhatsAppUrl } from '@/config/contact'

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  // Show widget after configured delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, contactConfig.whatsapp.showDelay)

    return () => clearTimeout(timer)
  }, [])

  const handleSendMessage = () => {
    if (message.trim()) {
      const whatsappUrl = getWhatsAppUrl(message.trim())
      window.open(whatsappUrl, '_blank')
      setMessage('')
      setIsOpen(false)
    }
  }

  const handleQuickMessage = (quickMessage: string) => {
    const whatsappUrl = getWhatsAppUrl(quickMessage)
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce-slow group"
            aria-label="Open WhatsApp chat"
          >
            <MessageCircle className="h-6 w-6" />
            {/* Pulse ring animation */}
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
          </button>
        )}

        {/* Chat Widget */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-slide-up">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">FitLife Pro</h3>
                  <p className="text-xs text-green-100">{contactConfig.whatsapp.autoReply}</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Content */}
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
            {/* Welcome Message */}
            <div className="bg-gray-50 rounded-lg p-3 text-sm">
              <p className="text-gray-700 text-xs">
                {contactConfig.whatsapp.welcomeMessage}
              </p>
            </div>

            {/* Quick Message Buttons */}
            <div className="space-y-2">
              <p className="text-xs text-gray-500 font-medium">Quick questions:</p>
              <div className="grid gap-2">
                {contactConfig.whatsapp.quickMessages.slice(0, 3).map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickMessage(msg)}
                    className="text-left text-xs bg-primary-50 hover:bg-primary-100 text-primary-700 p-2 rounded-lg transition-colors border border-primary-200"
                  >
                    {msg}
                  </button>
                ))}
              </div>
            </div>

              {/* Custom Message Input */}
              <div className="space-y-3 pt-2 border-t border-gray-100">
                <p className="text-xs text-gray-500 font-medium">Or send a custom message:</p>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className="bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 rounded-lg p-3 text-xs space-y-2">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="h-3 w-3" />
                  <span>{contactConfig.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="h-3 w-3" />
                  <span>Mon-Fri: {contactConfig.businessHours.weekdays} | Sat-Sun: {contactConfig.businessHours.weekends}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile-friendly positioning */}
      <style jsx>{`
        @media (max-width: 640px) {
          .fixed.bottom-6.right-6 {
            bottom: 1rem;
            right: 1rem;
          }
          .absolute.bottom-20.right-0 {
            bottom: 5rem;
            right: 0;
          }
        }
      `}</style>
    </>
  )
}
