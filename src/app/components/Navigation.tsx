import Link from 'next/link'

const Navigation = () => {
  const categories = [
    {
      name: 'Components',
      items: [
        { name: 'Buttons', href: '/components/buttons' },
        { name: 'Forms', href: '/components/forms' },
        { name: 'Typography', href: '/components/typography' },
        { name: 'Layout', href: '/components/layout' },
        { name: 'Data Display', href: '/components/data-display' },
        { name: 'Tables', href: '/components/tables' },
      ]
    }
  ]

  return (
    <nav className="w-64 bg-gray-50 h-screen p-6">
      {categories.map((category) => (
        <div key={category.name} className="mb-8">
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
            {category.name}
          </h2>
          <ul className="space-y-2">
            {category.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-sm"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}

export default Navigation 