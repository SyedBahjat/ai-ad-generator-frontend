'use client'

import { Upload } from 'lucide-react'

interface Step1Props {
  formData: any
  updateFormData: (data: any) => void
}

export default function Step1({ formData, updateFormData }: Step1Props) {
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        updateFormData({ logo: event.target?.result as string })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <h2 className="text-2xl font-bold mb-2">Tell Us About Your Brand</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Start by sharing your brand identity and mission
        </p>
      </div>

      {/* Brand Name */}
      <div>
        <label className="block text-sm font-medium mb-2">Brand Name *</label>
        <input
          type="text"
          value={formData.brandName}
          onChange={(e) => updateFormData({ brandName: e.target.value })}
          placeholder="Your Brand Name"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
        />
      </div>

      {/* Logo Upload */}
      <div>
        <label className="block text-sm font-medium mb-2">Logo</label>
        <label className="flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 cursor-pointer hover:border-black dark:hover:border-white transition">
          <Upload className="w-8 h-8 mb-2 text-gray-400" />
          <span className="text-sm font-medium">{formData.logo ? 'Logo uploaded ✓' : 'Click to upload your logo'}</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            className="hidden"
          />
        </label>
      </div>

      {/* Slogan */}
      <div>
        <label className="block text-sm font-medium mb-2">Brand Slogan *</label>
        <input
          type="text"
          value={formData.slogan}
          onChange={(e) => updateFormData({ slogan: e.target.value })}
          placeholder="Your brand's tagline or mission"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
        />
      </div>
    </div>
  )
}
