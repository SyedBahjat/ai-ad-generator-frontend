'use client'

import { Plus, LogOut, Settings, User, MoreHorizontal } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
  onOpenSettings: () => void
}

export default function Sidebar({
  conversations,
  activeConversation,
  onSelectConversation,
  onNewChat,
  onOpenSettings
}: SidebarProps) {
  // Mock user data - in a real app this would come from auth context
  const user = {
    name: "Demo User",
    email: "demo@example.com",
    avatar: "/placeholder-user.jpg" 
  }

  return (
    <div className="w-64 bg-gray-50 dark:bg-gray-900/50 border-r border-gray-200 dark:border-gray-800 flex flex-col h-full">
      <div className="p-4">
        <button
          onClick={onNewChat}
          className="w-full flex items-center justify-center gap-2 px-3 py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-xl font-medium hover:shadow-lg hover:scale-[1.02] transition-all duration-200 text-sm"
        >
          <Plus className="w-4 h-4" />
          New Chat
        </button>
      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2">
        <div className="px-3 py-2">
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Recent</p>
        </div>
        {conversations.map(conv => (
          <button
            key={conv.id}
            onClick={() => onSelectConversation(conv.id)}
            className={`w-full text-left px-3 py-3 rounded-lg transition-all duration-200 group relative ${
              activeConversation === conv.id
                ? 'bg-white dark:bg-gray-800 shadow-sm text-black dark:text-white'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50'
            }`}
          >
            <p className="font-medium text-sm truncate pr-4">{conv.title}</p>
            <p className="text-xs text-gray-400 mt-1">{conv.date}</p>
          </button>
        ))}
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full outline-none group">
            <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-sm">
              <Avatar className="h-9 w-9 border border-gray-200 dark:border-gray-700">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-left">
                <p className="text-sm font-medium leading-none text-gray-900 dark:text-gray-100">{user.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate max-w-[100px]">{user.email}</p>
              </div>
              <MoreHorizontal className="h-4 w-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 mb-2">
            <DropdownMenuItem onClick={onOpenSettings} className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600 dark:text-red-400 cursor-pointer focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-950/50">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
