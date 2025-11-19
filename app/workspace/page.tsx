'use client'

import { useState } from 'react'
import ChatNavbar from '@/components/workspace/chat-navbar'
import Sidebar from '@/components/workspace/sidebar'
import ChatPanel from '@/components/workspace/chat-panel'
import SettingsModal from '@/components/workspace/settings-modal'

export default function WorkspacePage() {
  const [conversations, setConversations] = useState<Array<{ id: number; title: string; date: string }>>([])
  const [activeConversation, setActiveConversation] = useState<number | null>(null)
  const [messages, setMessages] = useState<Array<{ id: number; role: 'user' | 'ai'; content: string }>>([])
  const [model, setModel] = useState('GPT-4')
  
  // Settings State
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [settingsData, setSettingsData] = useState({
    style: 'Promo',
    duration: 30,
    resolution: 'Portrait',
    platform: 'TikTok'
  })

  const handleNewChat = () => {
    const newId = Math.max(...conversations.map(c => c.id), 0) + 1
    const newConversation = { id: newId, title: 'New Campaign', date: 'Now' }
    setConversations([newConversation, ...conversations])
    setActiveConversation(newId)
    setMessages([
      { id: 1, role: 'ai', content: 'Hello! I\'m ready to help you create amazing ads. What would you like to work on today?' }
    ])
  }

  const handleSelectConversation = (id: number) => {
    setActiveConversation(id)
    // In a real app, you'd load messages for this conversation
  }

  const handleSendMessage = (content: string) => {
    const userMessage = {
      id: messages.length + 1,
      role: 'user' as const,
      content
    }
    setMessages([...messages, userMessage])

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        id: messages.length + 2,
        role: 'ai' as const,
        content: 'Great idea! I\'m processing your request. Based on your preferences, I\'ll create a compelling ad script for you.'
      }
      setMessages(prev => [...prev, aiMessage])
    }, 1000)
  }

  const updateSettings = (newData: any) => {
    setSettingsData(prev => ({ ...prev, ...newData }))
  }

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-black">
      <ChatNavbar modelSelection={model} onModelChange={setModel} />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          conversations={conversations}
          activeConversation={activeConversation ?? 0}
          onSelectConversation={handleSelectConversation}
          onNewChat={handleNewChat}
          onOpenSettings={() => setIsSettingsOpen(true)}
        />
        <ChatPanel 
          messages={messages}
          onSendMessage={handleSendMessage}
          showEmptyState={activeConversation === null}
        />
      </div>

      <SettingsModal 
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        formData={settingsData}
        updateFormData={updateSettings}
      />
    </div>
  )
}
