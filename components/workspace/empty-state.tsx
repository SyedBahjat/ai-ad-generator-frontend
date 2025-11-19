'use client'

export default function EmptyState() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8">
      <img 
        src="/images/chat-bubbles.png" 
        alt="Start a new conversation" 
        className="w-80 h-auto mb-8 rounded-xl shadow-lg"
      />
      <h2 className="text-3xl font-bold mb-2 text-center">Where should we begin?</h2>
      <p className="text-gray-600 dark:text-gray-400 text-center">Start by opening a new chat.</p>
    </div>
  )
}
