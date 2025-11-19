'use client'

import { useState, useRef, useEffect } from 'react'
import { Send } from 'lucide-react'
import ChatInputPopover from './chat-input-popover'
import SettingsModal from './settings-modal'

interface Message {
  id: number
  role: 'user' | 'ai'
  content: string
}

interface ChatPanelProps {
  messages: Message[]
  onSendMessage: (content: string) => void
  showEmptyState: boolean
}

export default function ChatPanel({ messages, onSendMessage, showEmptyState }: ChatPanelProps) {
  const [input, setInput] = useState('')
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [formData, setFormData] = useState({
    style: 'Story',
    duration: 15,
    resolution: 'Portrait',
    platform: 'TikTok'
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input)
      setInput('')
    }
  }

  const updateFormData = (data: any) => {
    setFormData({ ...formData, ...data })
  }

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-black">
      
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto flex flex-col">
        {showEmptyState ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <img 
                src="/images/chat-bubbles.png" 
                alt="Start a conversation" 
                className="w-72 h-auto mb-6 rounded-xl shadow-lg"
              />
              <h2 className="text-3xl font-bold mb-2">Where should we begin?</h2>
              <p className="text-gray-600 dark:text-gray-400">Start by opening a new chat.</p>
            </div>
          </div>
        ) : (
          <div className="p-8">
            <div className="max-w-2xl mx-auto space-y-4">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
                >
                  <div
                    className={`max-w-xl px-5 py-3 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-black text-white dark:bg-white dark:text-black rounded-br-none'
                        : 'bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
        )}
      </div>

      <div className="p-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex gap-2 items-end">
            <ChatInputPopover onSettingsClick={() => setSettingsOpen(true)} />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Describe your ad idea..."
              disabled={showEmptyState}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition disabled:opacity-50"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || showEmptyState}
              className="p-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <SettingsModal 
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        formData={formData}
        updateFormData={updateFormData}
      />
    </div>
  )
}
