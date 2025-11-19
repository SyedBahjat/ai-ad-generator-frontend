'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

interface SettingsModalProps {
  isOpen: boolean
  onClose: () => void
  formData: any
  updateFormData: (data: any) => void
}

export default function SettingsModal({ isOpen, onClose, formData, updateFormData }: SettingsModalProps) {
  const platforms = ['TikTok', 'YouTube', 'Instagram', 'Facebook', 'LinkedIn']

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Video Settings</DialogTitle>
          <DialogDescription>
            Customize your preferences for future ad generations.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-8 py-6">
          {/* Style */}
          <div className="space-y-4">
            <Label className="text-base">Video Style</Label>
            <div className="grid grid-cols-2 gap-4">
              {['Story', 'Promo'].map(style => (
                <button
                  key={style}
                  onClick={() => updateFormData({ style })}
                  className={cn(
                    "px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm font-semibold",
                    formData.style === style
                      ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black shadow-lg transform scale-[1.02]"
                      : "border-gray-100 bg-gray-50 text-gray-600 hover:bg-gray-100 hover:border-gray-200 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800"
                  )}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-base">Duration</Label>
              <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-sm font-bold font-mono">
                {formData.duration}s
              </span>
            </div>
            <div className="pt-2 px-1">
              <Slider
                value={[formData.duration]}
                min={5}
                max={60}
                step={5}
                onValueChange={([value]) => updateFormData({ duration: value })}
                className="cursor-pointer"
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400 font-medium px-1">
              <span>5s</span>
              <span>60s</span>
            </div>
          </div>

          {/* Resolution */}
          <div className="space-y-4">
            <Label className="text-base">Resolution</Label>
            <div className="grid grid-cols-2 gap-4">
              {['Landscape', 'Portrait'].map(res => (
                <button
                  key={res}
                  onClick={() => updateFormData({ resolution: res })}
                  className={cn(
                    "px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm font-semibold",
                    formData.resolution === res
                      ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black shadow-lg transform scale-[1.02]"
                      : "border-gray-100 bg-gray-50 text-gray-600 hover:bg-gray-100 hover:border-gray-200 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800"
                  )}
                >
                  {res}
                </button>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <Label className="text-base">Target Platform</Label>
            <div className="flex flex-wrap gap-2">
              {platforms.map(platform => (
                <button
                  key={platform}
                  onClick={() => updateFormData({ platform })}
                  className={cn(
                    "px-4 py-2 rounded-full border transition-all duration-200 text-sm font-medium",
                    formData.platform === platform
                      ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black shadow-md"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:border-gray-700"
                  )}
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-2">
           <button
            onClick={onClose}
            className="px-6 py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-full font-bold hover:opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm"
          >
            Save Changes
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
