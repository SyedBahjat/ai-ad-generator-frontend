'use client'

import { useState, useRef, useEffect } from 'react'
import { Plus, Upload, FileText, Mic, Settings } from 'lucide-react'

interface ChatInputPopoverProps {
  onSettingsClick: () => void
}

export default function ChatInputPopover({ onSettingsClick }: ChatInputPopoverProps) {
  const [showPopover, setShowPopover] = useState(false)
  const popoverRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setShowPopover(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSettingsClick = () => {
    onSettingsClick()
    setShowPopover(false)
  }

  return (
    <div className="relative" ref={popoverRef}>
      <button
        onClick={() => setShowPopover(!showPopover)}
        className="p-3 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition"
      >
        <Plus className="w-5 h-5" />
      </button>

      {showPopover && (
        <div className="absolute bottom-16 left-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-xl p-2 w-48 z-50 animate-fadeIn">
          <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition text-sm">
            <Upload className="w-4 h-4" />
            Upload Image
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition text-sm">
            <FileText className="w-4 h-4" />
            Attach PDF
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition text-sm">
            <Mic className="w-4 h-4" />
            Record Audio
          </button>
          <div className="my-1 border-t border-gray-200 dark:border-gray-800"></div>
          <button 
            onClick={handleSettingsClick}
            className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition text-sm"
          >
            <Settings className="w-4 h-4" />
            Settings
          </button>
        </div>
      )}
    </div>
  )
}
