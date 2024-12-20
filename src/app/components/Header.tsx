'use client'

import Link from 'next/link'

const Header = () => {
  const handleSyncWithFigma = () => {
    // Replace this URL with your actual Figma file URL
    window.open('https://figma.com/your-design-file', '_blank')
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Design Docs
          </Link>
          <button
            onClick={handleSyncWithFigma}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Sync with Figma
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header 