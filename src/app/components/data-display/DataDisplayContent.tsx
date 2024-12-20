'use client'

import { useState } from 'react'
import TabNavigation from '../TabNavigation'

const DataDisplayContent = () => {
  const [activeTab, setActiveTab] = useState('examples')

  const ExamplesContent = () => (
    <div className="space-y-8">
      <section>
        <h2 id="cards" className="text-2xl font-semibold mb-4">Cards</h2>
        <p className="text-gray-600 mb-4">
          Cards group related information and actions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium mb-2">Card Title</h3>
            <p className="text-gray-600 mb-4">
              This is a basic card with some sample content to demonstrate the layout.
            </p>
            <button className="text-blue-600 hover:text-blue-800">Learn More →</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="h-40 bg-gray-100 rounded-md mb-4"></div>
            <h3 className="text-lg font-medium mb-2">Media Card</h3>
            <p className="text-gray-600">Card with media content.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-medium mb-2">Interactive Card</h3>
            <p className="text-gray-600 mb-4">Card with interactive elements.</p>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Action
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 id="lists" className="text-2xl font-semibold mb-4">Lists</h2>
        <p className="text-gray-600 mb-4">
          Lists display collections of related items.
        </p>
        <div className="bg-white rounded-lg border border-gray-200 divide-y">
          {[1, 2, 3].map((item) => (
            <div key={item} className="p-4 flex items-center justify-between">
              <div>
                <h4 className="font-medium">List Item {item}</h4>
                <p className="text-sm text-gray-600">Supporting text for this item</p>
              </div>
              <button className="text-gray-400 hover:text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )

  const CodeContent = () => (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Data Display Components</h2>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg">
          <pre className="language-typescript">
            {`interface CardProps {
  title: string
  description?: string
  media?: React.ReactNode
  actions?: React.ReactNode
  className?: string
}

export const Card = ({ 
  title, 
  description, 
  media, 
  actions,
  className 
}: CardProps) => {
  return (
    <div className={\`bg-white p-6 rounded-lg shadow-sm border border-gray-200 \${className}\`}>
      {media && <div className="mb-4">{media}</div>}
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {actions && <div className="flex space-x-2">{actions}</div>}
    </div>
  )
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
            <li>Use cards to group related content and actions</li>
            <li>Use lists for collections of similar items</li>
            <li>Use badges and tags for status and metadata</li>
          </ul>

          <h3>Best practices</h3>
          <ul>
            <li>Keep card content concise and focused</li>
            <li>Use consistent spacing and alignment</li>
            <li>Provide clear interaction affordances</li>
            <li>Ensure responsive behavior on different screens</li>
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
            <h3 className="font-medium">Version 1.1.0</h3>
            <p className="text-gray-600">2024-03-15</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Added new card variants</li>
              <li>Improved list component accessibility</li>
              <li>Added support for custom card actions</li>
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
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Data Display</h1>
        <p className="text-lg text-gray-600">
          Components for displaying and organizing content in meaningful ways.
        </p>
      </div>

      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      {renderContent()}
    </div>
  )
}

export default DataDisplayContent 