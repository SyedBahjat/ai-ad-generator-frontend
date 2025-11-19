'use client'

interface Step3Props {
  formData: any
  updateFormData: (data: any) => void
}

export default function Step3({ formData, updateFormData }: Step3Props) {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <h2 className="text-2xl font-bold mb-2">Product or Service Details</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Tell us what you're advertising
        </p>
      </div>

      {/* Product Name */}
      <div>
        <label className="block text-sm font-medium mb-2">Product/Service Name *</label>
        <input
          type="text"
          value={formData.productName}
          onChange={(e) => updateFormData({ productName: e.target.value })}
          placeholder="What are you selling?"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
        />
      </div>

      {/* Product Description */}
      <div>
        <label className="block text-sm font-medium mb-2">Description *</label>
        <textarea
          value={formData.productDescription}
          onChange={(e) => updateFormData({ productDescription: e.target.value })}
          placeholder="Briefly describe what your product/service does"
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition resize-none"
        />
      </div>

      {/* Key Selling Points */}
      <div>
        <label className="block text-sm font-medium mb-2">Key Selling Points *</label>
        <textarea
          value={formData.keySellingPoints}
          onChange={(e) => updateFormData({ keySellingPoints: e.target.value })}
          placeholder="What makes your product special? (e.g., Fast, Affordable, Eco-friendly)"
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition resize-none"
        />
      </div>
    </div>
  )
}
