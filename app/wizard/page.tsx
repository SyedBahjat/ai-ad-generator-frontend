'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Step1 from '@/components/wizard/step1'
import Step2 from '@/components/wizard/step2'
import Step3 from '@/components/wizard/step3'
import Step4 from '@/components/wizard/step4'
import ConfirmationScreen from '@/components/wizard/confirmation'

export default function WizardPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isComplete, setIsComplete] = useState(false)
  const [formData, setFormData] = useState({
    brandName: '',
    logo: null as string | null,
    slogan: '',
    adGoal: 'Awareness',
    tone: 'Energetic',
    styleInstruction: '',
    productName: '',
    productDescription: '',
    keySellingPoints: '',
    style: 'Promo',
    duration: 30,
    resolution: 'Landscape',
    platform: 'TikTok',
    voiceEnabled: true,
    gender: 'male',
    age: '25-34',
    accent: 'American'
  })

  const updateFormData = (newData: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...newData }))
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    } else {
      setIsComplete(true)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleStart = () => {
    router.push('/workspace')
  }

  if (isComplete) {
    return <ConfirmationScreen onStart={handleStart} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-gray-900">
      {/* Progress Bar */}
      <div className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-2xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="font-bold text-lg">Setup Your Ad Campaign</h1>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Step {currentStep} of 4
            </span>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map(step => (
              <div
                key={step}
                className={`flex-1 h-1 rounded-full transition-all duration-300 ${
                  step <= currentStep
                    ? 'bg-gradient-to-r from-red-500 via-purple-500 to-blue-500'
                    : 'bg-gray-200 dark:bg-gray-800'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 shadow-lg animate-slideIn">
          {currentStep === 1 && (
            <Step1 formData={formData} updateFormData={updateFormData} />
          )}
          {currentStep === 2 && (
            <Step2 formData={formData} updateFormData={updateFormData} />
          )}
          {currentStep === 3 && (
            <Step3 formData={formData} updateFormData={updateFormData} />
          )}
          {currentStep === 4 && (
            <Step4 formData={formData} updateFormData={updateFormData} />
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-between mt-12">
            <button
              onClick={handlePrev}
              disabled={currentStep === 1}
              className="px-6 py-3 border-2 border-gray-200 dark:border-gray-800 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg font-medium hover:shadow-lg transition"
            >
              {currentStep === 4 ? 'Complete Setup' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
