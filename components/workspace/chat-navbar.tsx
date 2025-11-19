'use client'

interface ChatNavbarProps {
  modelSelection: string
  onModelChange: (model: string) => void
}

export default function ChatNavbar({ modelSelection, onModelChange }: ChatNavbarProps) {
  return (
    <div className="h-16 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6">
      {/* Left side - Logo and name */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center font-bold text-white dark:text-black text-sm">
          D
        </div>
        <span className="font-bold text-lg">Ad Creator AI</span>
      </div>

      {/* Right side - Model dropdown */}
      <select 
        value={modelSelection}
        onChange={(e) => onModelChange(e.target.value)}
        className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-sm font-medium hover:border-gray-400 dark:hover:border-gray-600 transition"
      >
        <option>GPT-4</option>
        <option>Gemini 2.0</option>
        <option>Claude Sonnet</option>
      </select>
    </div>
  )
}
