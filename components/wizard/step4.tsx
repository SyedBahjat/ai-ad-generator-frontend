'use client'

interface Step4Props {
  formData: any
  updateFormData: (data: any) => void
}

export default function Step4({ formData, updateFormData }: Step4Props) {
  const genders = ['male', 'female']
  const ages = ['18-24', '25-34', '35-44', '45-54', '55+']
  const accents = ['American', 'British', 'Australian', 'Irish', 'German', 'French']
  const platforms = ['TikTok', 'YouTube', 'Instagram', 'Facebook', 'LinkedIn']

  return (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <h2 className="text-2xl font-bold mb-2">Video Preferences</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Customize your video format and delivery
        </p>
      </div>

      <div className="text-xs text-gray-600 dark:text-gray-400 mb-4">
        These are your default video settings. You can change them anytime inside Chat → Settings.
      </div>

      {/* Style */}
      <div>
        <label className="block text-sm font-medium mb-3">Video Style *</label>
        <div className="flex gap-4">
          {['Story', 'Promo'].map(style => (
            <button
              key={style}
              onClick={() => updateFormData({ style })}
              className={`flex-1 p-3 rounded-lg border-2 transition font-medium ${
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
          Video Duration: <span className="text-primary">{formData.duration}s</span>
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
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>5s</span>
          <span>60s</span>
        </div>
      </div>

      {/* Resolution */}
      <div>
        <label className="block text-sm font-medium mb-3">Resolution *</label>
        <div className="flex gap-4">
          {['Landscape', 'Portrait'].map(res => (
            <button
              key={res}
              onClick={() => updateFormData({ resolution: res })}
              className={`flex-1 p-3 rounded-lg border-2 transition font-medium ${
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
        <label className="block text-sm font-medium mb-3">Target Platform *</label>
        <div className="grid grid-cols-2 gap-2">
          {platforms.map(platform => (
            <button
              key={platform}
              onClick={() => updateFormData({ platform })}
              className={`p-3 rounded-lg border-2 transition font-medium text-sm ${
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

    </div>
  )
}
