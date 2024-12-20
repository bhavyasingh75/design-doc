'use client'

import { useState } from 'react'
import TabNavigation from '../TabNavigation'

const ColorsContent = () => {
  const [activeTab, setActiveTab] = useState('examples')

  const ExamplesContent = () => (
    <div className="space-y-8">
      <section>
        <h2 id="primary" className="text-2xl font-semibold mb-4">Primary Colors</h2>
        <p className="text-gray-600 mb-4">
          Primary colors are the main colors used throughout the interface.
        </p>
        <div className="grid grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="h-20 bg-blue-600 rounded-md"></div>
            <p className="text-sm font-medium">Primary Blue</p>
            <p className="text-xs text-gray-500">#2563EB</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-blue-700 rounded-md"></div>
            <p className="text-sm font-medium">Primary Dark</p>
            <p className="text-xs text-gray-500">#1D4ED8</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-blue-500 rounded-md"></div>
            <p className="text-sm font-medium">Primary Light</p>
            <p className="text-xs text-gray-500">#3B82F6</p>
          </div>
        </div>
      </section>

      <section>
        <h2 id="grays" className="text-2xl font-semibold mb-4">Grays</h2>
        <p className="text-gray-600 mb-4">
          Gray scales are used for text, backgrounds, and borders.
        </p>
        <div className="grid grid-cols-6 gap-4">
          {[900, 800, 700, 600, 500, 400, 300, 200, 100, 50].map((weight) => (
            <div key={weight} className="space-y-2">
              <div className={`h-20 bg-gray-${weight} rounded-md`}></div>
              <p className="text-sm font-medium">Gray {weight}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )

  const CodeContent = () => (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Color Variables</h2>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg">
          <pre className="language-css">
            {`:root {
  --color-primary: #2563eb;
  --color-primary-dark: #1d4ed8;
  --color-primary-light: #3b82f6;
  
  --color-gray-900: #111827;
  --color-gray-800: #1f2937;
  --color-gray-700: #374151;
  --color-gray-600: #4b5563;
  --color-gray-500: #6b7280;
  --color-gray-400: #9ca3af;
  --color-gray-300: #d1d5db;
  --color-gray-200: #e5e7eb;
  --color-gray-100: #f3f4f6;
  --color-gray-50: #f9fafb;
}`}
          </pre>
        </div>
      </section>
    </div>
  )

  const UsageContent = () => (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Usage Guidelines</h2>
        <div className="prose max-w-none">
          <h3>When to use</h3>
          <ul>
            <li>Use primary colors for key actions and emphasis</li>
            <li>Use grays for text, backgrounds, and subtle elements</li>
            <li>Maintain consistent color usage across the interface</li>
          </ul>

          <h3>Best practices</h3>
          <ul>
            <li>Ensure sufficient contrast ratios for accessibility</li>
            <li>Use darker shades for text and lighter shades for backgrounds</li>
            <li>Apply colors consistently for similar UI elements</li>
            <li>Consider color blindness when choosing color combinations</li>
          </ul>
        </div>
      </section>
    </div>
  )

  const ChangelogContent = () => (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Changelog</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Version 2.0.0</h3>
            <p className="text-gray-600">2024-03-15</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Updated primary color palette</li>
              <li>Added new gray scale</li>
              <li>Improved contrast ratios</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'examples':
        return <ExamplesContent />
      case 'code':
        return <CodeContent />
      case 'usage':
        return <UsageContent />
      case 'changelog':
        return <ChangelogContent />
      default:
        return <ExamplesContent />
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Colors</h1>
        <p className="text-lg text-gray-600">
          Our color system helps create consistent, accessible, and recognizable interfaces.
        </p>
      </div>

      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      {renderContent()}
    </div>
  )
}

export default ColorsContent 