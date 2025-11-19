'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface SettingsModalProps {
  isOpen: boolean
  onClose: () => void
  formData: any
  updateFormData: (data: any) => void
}

export default function SettingsModal({ isOpen, onClose, formData, updateFormData }: SettingsModalProps) {
  const platforms = ['TikTok', 'YouTube', 'Instagram', 'Facebook', 'LinkedIn']

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-md w-full mx-4 max-h-96 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-bold">Video Settings</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="text-xs text-gray-600 dark:text-gray-400">
            These settings will be used for all future ad generations.
          </div>

          {/* Style */}
          <div>
            <label className="block text-sm font-medium mb-3">Video Style *</label>
            <div className="flex gap-2">
              {['Story', 'Promo'].map(style => (
                <button
                  key={style}
                  onClick={() => updateFormData({ style })}
                  className={`flex-1 p-2 rounded-lg border-2 transition font-medium text-sm ${
                    formData.style === style
                      ? 'border-black dark:border-white bg-black text-white dark:bg-white dark:text-black'
                      : 'border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600'
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Duration: <span className="text-primary">{formData.duration}s</span>
            </label>
            <input
              type="range"
              min="5"
              max="60"
              step="5"
              value={formData.duration}
              onChange={(e) => updateFormData({ duration: parseInt(e.target.value) })}
              className="w-full"
            />
          </div>

          {/* Resolution */}
          <div>
            <label className="block text-sm font-medium mb-3">Resolution *</label>
            <div className="flex gap-2">
              {['Landscape', 'Portrait'].map(res => (
                <button
                  key={res}
                  onClick={() => updateFormData({ resolution: res })}
                  className={`flex-1 p-2 rounded-lg border-2 transition font-medium text-sm ${
                    formData.resolution === res
                      ? 'border-black dark:border-white bg-black text-white dark:bg-white dark:text-black'
                      : 'border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600'
                  }`}
                >
                  {res}
                </button>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <label className="block text-sm font-medium mb-2">Target Platform *</label>
            <div className="grid grid-cols-2 gap-2">
              {platforms.map(platform => (
                <button
                  key={platform}
                  onClick={() => updateFormData({ platform })}
                  className={`p-2 rounded-lg border-2 transition font-medium text-xs ${
                    formData.platform === platform
                      ? 'border-black dark:border-white bg-black text-white dark:bg-white dark:text-black'
                      : 'border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600'
                  }`}
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>


          {/* Close button */}
          <button
            onClick={onClose}
            className="w-full mt-6 px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg font-medium hover:shadow-lg transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
