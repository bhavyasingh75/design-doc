'use client'

import { useState } from 'react'
import TabNavigation from '../TabNavigation'

const TablesContent = () => {
  const [activeTab, setActiveTab] = useState('examples')

  const ExamplesContent = () => (
    <div className="space-y-8">
      <section>
        <h2 id="basic" className="text-2xl font-semibold mb-4">Basic Table</h2>
        <p className="text-gray-600 mb-4">
          Basic tables display data in a structured grid format.
        </p>
        <div className="p-6 bg-gray-50 rounded-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3].map((item) => (
                <tr key={item}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">John Doe</div>
                    <div className="text-sm text-gray-500">john@example.com</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Senior Developer
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Admin
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 id="interactive" className="text-2xl font-semibold mb-4">Interactive Table</h2>
        <p className="text-gray-600 mb-4">
          Interactive tables include sorting, selection, and hover states.
        </p>
        <div className="p-6 bg-gray-50 rounded-lg overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300" />
                </th>
                {['Name', 'Status', 'Actions'].map((header) => (
                  <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-700">
                      <span>{header}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                      </svg>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3].map((item) => (
                <tr key={item} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="h-4 w-4 text-blue-600 rounded border-gray-300" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">Jane Smith</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-blue-600 hover:text-blue-800">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )

  const CodeContent = () => (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Table Components</h2>
        <div className="bg-gray-900 text-gray-100 p-6 rounded-lg">
          <pre className="language-typescript">
            {`interface TableProps<T> {
  data: T[]
  columns: {
    key: keyof T
    header: string
    render?: (value: T[keyof T], item: T) => React.ReactNode
  }[]
  onSort?: (key: keyof T) => void
  sortKey?: keyof T
  sortDirection?: 'asc' | 'desc'
}

export const Table = <T extends Record<string, any>>({
  data,
  columns,
  onSort,
  sortKey,
  sortDirection
}: TableProps<T>) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {columns.map(column => (
            <th
              key={String(column.key)}
              onClick={() => onSort?.(column.key)}
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map(column => (
              <td key={String(column.key)} className="px-6 py-4 whitespace-nowrap">
                {column.render
                  ? column.render(item[column.key], item)
                  : item[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
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
            <li>Use tables to display structured data</li>
            <li>Use interactive tables for large datasets</li>
            <li>Use tables when users need to compare data</li>
          </ul>

          <h3>Best practices</h3>
          <ul>
            <li>Keep tables responsive on mobile devices</li>
            <li>Include clear column headers</li>
            <li>Provide sorting for large datasets</li>
            <li>Use appropriate text alignment for data types</li>
            <li>Include hover states for interactive rows</li>
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
            <h3 className="font-medium">Version 1.2.0</h3>
            <p className="text-gray-600">2024-03-15</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Added interactive table component</li>
              <li>Improved mobile responsiveness</li>
              <li>Added sorting functionality</li>
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
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Tables</h1>
        <p className="text-lg text-gray-600">
          Tables help organize and display structured data in a grid format.
        </p>
      </div>

      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      {renderContent()}
    </div>
  )
}

export default TablesContent 