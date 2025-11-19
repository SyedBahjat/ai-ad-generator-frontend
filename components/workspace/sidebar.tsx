'use client'

import { Plus, LogOut, Settings } from 'lucide-react'

interface Conversation {
  id: number
  title: string
  date: string
}

interface SidebarProps {
  conversations: Conversation[]
  activeConversation: number
  onSelectConversation: (id: number) => void
  onNewChat: () => void
}

export default function Sidebar({
  conversations,
  activeConversation,
  onSelectConversation,
  onNewChat
}: SidebarProps) {
  return (
    <div className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col">
      <div className="p-4">
        <button
          onClick={onNewChat}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg font-medium hover:shadow-lg transition duration-300 text-sm"
        >
          <Plus className="w-4 h-4" />
          New Chat
        </button>
      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 px-2 uppercase">Recent</p>
        {conversations.map(conv => (
          <button
            key={conv.id}
            onClick={() => onSelectConversation(conv.id)}
            className={`w-full text-left px-4 py-3 rounded-lg transition duration-200 ${
              activeConversation === conv.id
                ? 'bg-black text-white dark:bg-white dark:text-black shadow-md'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            <p className="font-medium text-sm truncate">{conv.title}</p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{conv.date}</p>
          </button>
        ))}
      </div>

      <div className="p-4 space-y-2">
        <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition text-sm">
          <Settings className="w-4 h-4" />
          <span className="font-medium">Settings</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition text-sm">
          <LogOut className="w-4 h-4" />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </div>
  )
}
