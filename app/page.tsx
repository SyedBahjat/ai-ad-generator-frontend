'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, Zap, Palette, Film } from 'lucide-react'

export default function LandingPage() {
  const features = [
    {
      icon: Sparkles,
      title: 'AI Script Generator',
      description: 'Generate engaging ad scripts tailored to your brand in seconds'
    },
    {
      icon: Zap,
      title: 'Auto-Video Builder',
      description: 'Transform scripts into stunning videos with AI-powered visuals'
    },
    {
      icon: Palette,
      title: 'Targeting Optimization',
      description: 'Automatically optimize your ads for maximum platform performance'
    },
    {
      icon: Film,
      title: 'Creative Studio',
      description: 'Access a suite of creative tools powered by AI'
    }
  ]

  const steps = [
    { number: '1', title: 'Brand Info', description: 'Tell us about your business' },
    { number: '2', title: 'Ad Strategy', description: 'Define goals and tone' },
    { number: '3', title: 'Product Details', description: 'Share what you\'re selling' },
    { number: '4', title: 'Preferences', description: 'Choose format and platform' }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <span className="font-bold text-xl">Do It</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/signup" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-400 transition">
            Sign In
          </Link>
          <Link href="/signup" className="px-6 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full hover:shadow-lg transition duration-300">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center animate-fadeIn">
        <div className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-full mb-6 border border-gray-200 dark:border-gray-800">
          <span className="text-sm font-medium bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            ✨ Powered by AI
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
          Create Stunning Video Ads <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">With AI</span> — Instantly
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 text-balance">
          Generate engaging ad scripts, visuals, and videos using AI. Perfect for TikTok, YouTube, Instagram, and more.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/signup" className="px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium hover:shadow-xl transition duration-300 transform hover-scale">
            Get Started
          </Link>
          <button className="px-8 py-3 border-2 border-black dark:border-white rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition duration-300">
            Try Demo
          </button>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
          <img 
            src="/images/ai-engine.png" 
            alt="AI Ad Creation Engine" 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index} 
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 hover:shadow-lg transition duration-300 transform hover-scale animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 my-24">
        <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[40%] h-1 bg-gradient-to-r from-purple-500 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Create Amazing Ads?</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 text-balance">
          Join thousands of creators and businesses using Do It to generate stunning ads in minutes.
        </p>
        <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium hover:shadow-xl transition duration-300 transform hover-scale">
          Get Started Now
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-12 mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-black dark:hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white transition">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-black dark:hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-black dark:hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Social</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-black dark:hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-black dark:hover:text-white transition">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>&copy; 2025 Do It. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
