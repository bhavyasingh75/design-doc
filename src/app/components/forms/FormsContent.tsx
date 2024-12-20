'use client'

import { useState } from 'react'
import TabNavigation from '../TabNavigation'

const FormsContent = () => {
  const [activeTab, setActiveTab] = useState('examples')

  const ExamplesContent = () => (
    <div className="space-y-8">
      <section>
        <h2 id="text-input" className="text-2xl font-semibold mb-4">Text Input</h2>
        <p className="text-gray-600 mb-4">
          Text inputs allow users to enter and edit text.
        </p>
        <div className="p-6 bg-gray-50 rounded-lg">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </section>
      {/* Add more form examples */}
    </div>
  )

  const CodeContent = () => (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Form Components</h2>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg">
          <pre className="language-typescript">
            {`// Form component code here`}
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
            <li>Use forms to collect user input</li>
            <li>Use appropriate input types for different data types</li>
            <li>Group related form fields together</li>
            <li>Provide clear labels and validation feedback</li>
          </ul>

          <h3>Best practices</h3>
          <ul>
            <li>Use clear and concise labels</li>
            <li>Indicate required fields</li>
            <li>Show validation errors inline</li>
            <li>Provide helpful placeholder text</li>
            <li>Use appropriate input constraints</li>
          </ul>

          <h3>Accessibility</h3>
          <ul>
            <li>Ensure proper label associations</li>
            <li>Use ARIA attributes when needed</li>
            <li>Provide error messages to screen readers</li>
            <li>Maintain keyboard navigation</li>
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
              <li>Added form validation</li>
              <li>Improved error states</li>
              <li>Added support for custom input types</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Version 1.0.0</h3>
            <p className="text-gray-600">2024-01-01</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Initial release</li>
              <li>Basic form components</li>
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
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Forms</h1>
        <p className="text-lg text-gray-600">
          Form components help users input, edit and submit information.
        </p>
      </div>

      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      {renderContent()}
    </div>
  )
}

export default FormsContent 