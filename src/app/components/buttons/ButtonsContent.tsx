'use client'

import { useState } from 'react'
import TabNavigation from '../TabNavigation'

const ButtonsContent = () => {
  const [activeTab, setActiveTab] = useState('examples')

  const ExamplesContent = () => (
    <div className="space-y-8">
      <section>
        <h2 id="default" className="text-2xl font-semibold mb-4">Default Button</h2>
        <p className="text-gray-600 mb-4">
          Use default buttons for most actions that aren't the main call to action for a page or area. 
          Default buttons are less prominent than primary buttons.
        </p>
        <div className="p-6 bg-gray-50 rounded-lg">
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
            Default Button
          </button>
        </div>
      </section>

      <section>
        <h2 id="primary" className="text-2xl font-semibold mb-4">Primary Button</h2>
        <p className="text-gray-600 mb-4">
          Use primary buttons for main calls to action. Limit primary buttons to one per page or section.
        </p>
        <div className="p-6 bg-gray-50 rounded-lg">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Primary Button
          </button>
        </div>
      </section>

      <section>
        <h2 id="danger" className="text-2xl font-semibold mb-4">Danger Button</h2>
        <p className="text-gray-600 mb-4">
          Use danger buttons for destructive actions that can't be easily undone.
        </p>
        <div className="p-6 bg-gray-50 rounded-lg">
          <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
            Delete Item
          </button>
        </div>
      </section>
    </div>
  )

  const CodeContent = () => (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Button Components</h2>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg">
          <pre className="language-typescript">
            {`import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = ({ 
  variant = 'default',
  size = 'md',
  className,
  ...props 
}: ButtonProps) => {
  const baseStyles = "rounded-md font-medium transition-colors"
  
  const variants = {
    default: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    danger: "bg-red-600 text-white hover:bg-red-700"
  }
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  }

  return (
    <button
      className={\`\${baseStyles} \${variants[variant]} \${sizes[size]} \${className}\`}
      {...props}
    />
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
            <li>Use buttons to trigger immediate actions</li>
            <li>Use primary buttons for the main call to action</li>
            <li>Use default buttons for secondary actions</li>
            <li>Use danger buttons for destructive actions</li>
          </ul>

          <h3>Best practices</h3>
          <ul>
            <li>Use clear, action-oriented labels (e.g., "Save" instead of "OK")</li>
            <li>Limit one primary button per section or page</li>
            <li>Position primary buttons on the right for multi-button layouts</li>
            <li>Maintain consistent button sizes throughout your interface</li>
            <li>Ensure sufficient spacing between multiple buttons</li>
          </ul>

          <h3>Accessibility</h3>
          <ul>
            <li>Use the button element for clickable actions</li>
            <li>Ensure buttons have sufficient color contrast</li>
            <li>Provide hover and focus states for better feedback</li>
            <li>Include aria-labels for buttons with only icons</li>
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
              <li>Added new danger variant</li>
              <li>Updated primary button colors for better contrast</li>
              <li>Introduced size variants (sm, md, lg)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Version 1.0.0</h3>
            <p className="text-gray-600">2024-01-01</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Initial release</li>
              <li>Added default and primary variants</li>
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
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Button</h1>
        <p className="text-lg text-gray-600">
          A button triggers an event or action. They let users know what will happen next.
        </p>
      </div>

      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      {renderContent()}
    </div>
  )
}

export default ButtonsContent 