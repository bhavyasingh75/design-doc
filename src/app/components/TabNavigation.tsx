'use client'

import Link from 'next/link'

interface TabNavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  const tabs = [
    { name: 'Examples', href: 'examples' },
    { name: 'Code', href: 'code' },
    { name: 'Usage', href: 'usage' },
    { name: 'Changelog', href: 'changelog' },
  ]

  return (
    <div className="border-b border-gray-200 mb-6">
      <nav className="-mb-px flex space-x-8">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.href
          return (
            <button
              key={tab.name}
              onClick={() => onTabChange(tab.href)}
              className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                ${isActive
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {tab.name}
            </button>
          )
        })}
      </nav>
    </div>
  )
}

export default TabNavigation 