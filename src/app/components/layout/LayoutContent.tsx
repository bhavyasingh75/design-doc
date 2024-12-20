'use client'

import { useState } from 'react'
import TabNavigation from '../TabNavigation'

const LayoutContent = () => {
  const [activeTab, setActiveTab] = useState('examples')

  const ExamplesContent = () => (
    <div className="space-y-8">
      <section>
        <h2 id="grid" className="text-2xl font-semibold mb-4">Grid System</h2>
        <p className="text-gray-600 mb-4">
          Our grid system uses CSS Grid for flexible layouts.
        </p>
        <div className="p-6 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-12 gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-12 bg-blue-100 rounded flex items-center justify-center text-sm">
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 id="containers" className="text-2xl font-semibold mb-4">Containers</h2>
        <p className="text-gray-600 mb-4">
          Containers maintain consistent content width across screen sizes.
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="max-w-7xl mx-auto bg-white p-4 rounded border border-blue-200">
              max-w-7xl
            </div>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="max-w-5xl mx-auto bg-white p-4 rounded border border-blue-200">
              max-w-5xl
            </div>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="max-w-3xl mx-auto bg-white p-4 rounded border border-blue-200">
              max-w-3xl
            </div>
          </div>
        </div>
      </section>
    </div>
  )

  const CodeContent = () => (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Layout Components</h2>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg">
          <pre className="language-typescript">
            {`// Container component
interface ContainerProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  children: React.ReactNode
}

export const Container = ({ 
  maxWidth = 'lg', 
  children 
}: ContainerProps) => {
  const maxWidthClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-5xl',
    xl: 'max-w-6xl',
    '2xl': 'max-w-7xl'
  }

  return (
    <div className={\`\${maxWidthClasses[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8\`}>
      {children}
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
            <li>Use grid system for complex layouts</li>
            <li>Use containers to maintain consistent content width</li>
            <li>Use spacing utilities for consistent gaps</li>
          </ul>

          <h3>Best practices</h3>
          <ul>
            <li>Keep layouts responsive and mobile-first</li>
            <li>Use appropriate container sizes for content type</li>
            <li>Maintain consistent spacing throughout</li>
            <li>Consider content hierarchy in layout decisions</li>
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
              <li>Added new container sizes</li>
              <li>Improved responsive behavior</li>
              <li>Added grid system utilities</li>
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
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Layout</h1>
        <p className="text-lg text-gray-600">
          Layout components and utilities help create consistent, responsive interfaces.
        </p>
      </div>

      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      {renderContent()}
    </div>
  )
}

export default LayoutContent 