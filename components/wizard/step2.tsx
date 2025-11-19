'use client'

interface Step2Props {
  formData: any
  updateFormData: (data: any) => void
}

export default function Step2({ formData, updateFormData }: Step2Props) {
  const goals = ['Awareness', 'Sales', 'Emotional', 'Funny', 'Luxury', 'Educational']
  const tones = ['Energetic', 'Professional', 'Casual', 'Inspiring', 'Playful', 'Serious']

  return (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <h2 className="text-2xl font-bold mb-2">Define Your Ad Strategy</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Choose your advertising goal and brand tone
        </p>
      </div>

      {/* Ad Goal */}
      <div>
        <label className="block text-sm font-medium mb-3">Ad Goal *</label>
        <div className="grid grid-cols-2 gap-3">
          {goals.map(goal => (
            <button
              key={goal}
              onClick={() => updateFormData({ adGoal: goal })}
              className={`p-3 rounded-lg border-2 transition font-medium ${
                formData.adGoal === goal
                  ? 'border-black dark:border-white bg-black text-white dark:bg-white dark:text-black'
                  : 'border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600'
              }`}
            >
              {goal}
            </button>
          ))}
        </div>
      </div>

      {/* Tone */}
      <div>
        <label className="block text-sm font-medium mb-3">Brand Tone *</label>
        <div className="grid grid-cols-2 gap-3">
          {tones.map(tone => (
            <button
              key={tone}
              onClick={() => updateFormData({ tone })}
              className={`p-3 rounded-lg border-2 transition font-medium ${
                formData.tone === tone
                  ? 'border-black dark:border-white bg-black text-white dark:bg-white dark:text-black'
                  : 'border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600'
              }`}
            >
              {tone}
            </button>
          ))}
        </div>
      </div>

      {/* Style Instruction */}
      <div>
        <label className="block text-sm font-medium mb-2">Style & Mood (Optional)</label>
        <textarea
          value={formData.styleInstruction}
          onChange={(e) => updateFormData({ styleInstruction: e.target.value })}
          placeholder="Describe the vibe, emotions, or specific style you want (e.g., minimalist, vibrant, cinematic)"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition resize-none"
        />
      </div>
    </div>
  )
}
