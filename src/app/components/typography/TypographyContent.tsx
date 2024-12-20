'use client'

import { useState } from 'react'
import TabNavigation from '../TabNavigation'

const TypographyContent = () => {
  const [activeTab, setActiveTab] = useState('examples')

  const ExamplesContent = () => (
    <div className="space-y-8">
      <section>
        <h2 id="headings" className="text-2xl font-semibold mb-4">Headings</h2>
        <p className="text-gray-600 mb-4">
          Use headings to create a clear content hierarchy.
        </p>
        <div className="p-6 bg-gray-50 rounded-lg space-y-4">
          <h1 className="text-4xl font-bold">Heading 1</h1>
          <h2 className="text-3xl font-bold">Heading 2</h2>
          <h3 className="text-2xl font-bold">Heading 3</h3>
          <h4 className="text-xl font-bold">Heading 4</h4>
          <h5 className="text-lg font-bold">Heading 5</h5>
          <h6 className="text-base font-bold">Heading 6</h6>
        </div>
      </section>

      <section>
        <h2 id="body" className="text-2xl font-semibold mb-4">Body Text</h2>
        <p className="text-gray-600 mb-4">
          Body text styles for different content types.
        </p>
        <div className="p-6 bg-gray-50 rounded-lg space-y-4">
          <p className="text-base">
            Default body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-sm text-gray-600">
            Small text for secondary information.
          </p>
          <p className="text-xs text-gray-500">
            Extra small text for captions or metadata.
          </p>
        </div>
      </section>
    </div>
  )

  const CodeContent = () => (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Typography Components</h2>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg">
          <pre className="language-typescript">
            {`// Typography styles and components
const typography = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-bold",
  h3: "text-2xl font-bold",
  h4: "text-xl font-bold",
  h5: "text-lg font-bold",
  h6: "text-base font-bold",
  body: "text-base",
  small: "text-sm text-gray-600",
  caption: "text-xs text-gray-500"
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
            <li>Use headings to establish clear content hierarchy</li>
            <li>Use body text for main content</li>
            <li>Use small text for supporting information</li>
            <li>Use captions for metadata or additional context</li>
          </ul>

          <h3>Best practices</h3>
          <ul>
            <li>Maintain consistent heading hierarchy (h1 → h6)</li>
            <li>Use appropriate font sizes for readability</li>
            <li>Ensure sufficient contrast for text colors</li>
            <li>Consider line height and spacing for optimal readability</li>
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
              <li>Added responsive typography scales</li>
              <li>Updated font weights for better hierarchy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Version 1.0.0</h3>
            <p className="text-gray-600">2024-01-01</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Initial release</li>
              <li>Basic typography styles and components</li>
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
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Typography</h1>
        <p className="text-lg text-gray-600">
          Typography helps establish hierarchy and improve readability in your interface.
        </p>
      </div>

      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      {renderContent()}
    </div>
  )
}

export default TypographyContent 