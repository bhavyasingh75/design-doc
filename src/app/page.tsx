import Link from 'next/link'

export default function Home() {
  const sections = [
    {
      title: 'Components',
      description: 'Reusable interface elements for building consistent experiences.',
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
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Design Documentation</h1>
      <p className="text-xl text-gray-600 mb-12">
        Comprehensive guidelines and components for building consistent user interfaces.
      </p>

      <div className="space-y-16">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <p className="text-gray-600 mb-6">{section.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block p-4 border rounded-lg hover:border-blue-500 hover:shadow-sm transition-all"
                >
                  <h3 className="font-medium mb-1">{item.name}</h3>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

