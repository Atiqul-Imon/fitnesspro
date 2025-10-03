// Contact Configuration
// Update these values to match your business information

export const contactConfig = {
  // WhatsApp Business Number (include country code, no + sign)
  whatsappNumber: '1234567890', // Replace with your actual WhatsApp business number
  
  // Business Hours
  businessHours: {
    weekdays: '5AM-10PM',
    weekends: '6AM-8PM',
    timezone: 'EST'
  },
  
  // Contact Information
  phone: '(555) 123-FIT',
  email: 'info@fitlifepro.com',
  address: '123 Fitness Street, Health City, HC 12345',
  
  // WhatsApp Settings
  whatsapp: {
    // Delay before widget appears (in milliseconds)
    showDelay: 3000,
    
    // Quick message templates
    quickMessages: [
      "Hi! I'm interested in joining FitLife Pro",
      "I'd like to schedule a free trial",
      "Can you tell me about your pricing plans?",
      "I have questions about your personal training",
      "What are your operating hours?"
    ],
    
    // Welcome message
    welcomeMessage: "👋 Hi there! Welcome to FitLife Pro! How can we help you start your fitness journey today?",
    
    // Auto-reply status
    autoReply: "Typically replies in minutes"
  }
}

// Helper function to format WhatsApp URL
export const getWhatsAppUrl = (message: string, phoneNumber?: string) => {
  const number = phoneNumber || contactConfig.whatsappNumber
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${number}?text=${encodedMessage}`
}
