'use client'

import { CheckCircle, ArrowRight } from 'lucide-react'

interface ConfirmationScreenProps {
  onStart: () => void
}

export default function ConfirmationScreen({ onStart }: ConfirmationScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-gray-900 flex items-center justify-center px-4">
      <div className="text-center max-w-md animate-fadeIn">
        <div className="w-20 h-20 bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>

        <h1 className="text-4xl font-bold mb-4">Setup Complete!</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
          Your ad campaign is ready. Let's start creating amazing content with AI.
        </p>

        <button
          onClick={onStart}
          className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium hover:shadow-xl transition duration-300 transform hover-scale"
        >
          Start Creating Ads
          <ArrowRight className="w-5 h-5" />
        </button>

        <p className="text-sm text-gray-500 dark:text-gray-500 mt-8">
          You can edit these settings anytime in your workspace
        </p>
      </div>
    </div>
  )
}
