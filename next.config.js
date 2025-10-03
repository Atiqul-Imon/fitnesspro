/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
  },
  // Optimize for Vercel deployment
  output: 'standalone',
  // Enable compression
  compress: true,
  // Enable experimental features
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Set output file tracing root to fix workspace detection
  outputFileTracingRoot: __dirname,
}

module.exports = nextConfig
