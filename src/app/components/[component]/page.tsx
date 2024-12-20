import ButtonsContent from '../buttons/ButtonsContent'
import FormsContent from '../forms/FormsContent'
import TypographyContent from '../typography/TypographyContent'
import LayoutContent from '../layout/LayoutContent'
import DataDisplayContent from '../data-display/DataDisplayContent'
import TablesContent from '../tables/TablesContent'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface PageProps {
  params: Promise<{
    component: string
  }>
}

// Map of valid components and their metadata
const componentMap = {
  buttons: {
    title: 'Buttons',
    description: 'Interactive elements for triggering actions',
    component: ButtonsContent
  },
  forms: {
    title: 'Forms',
    description: 'Components for collecting user input',
    component: FormsContent
  },
  typography: {
    title: 'Typography',
    description: 'Text styles and formatting components',
    component: TypographyContent
  },
  layout: {
    title: 'Layout',
    description: 'Components for structuring page content',
    component: LayoutContent
  },
  'data-display': {
    title: 'Data Display',
    description: 'Components for presenting information',
    component: DataDisplayContent
  },
  tables: {
    title: 'Tables',
    description: 'Components for displaying structured data',
    component: TablesContent
  }
} as const

type ValidComponent = keyof typeof componentMap

export default async function ComponentPage({ params }: PageProps) {
  const resolvedParams = await params
  const componentKey = resolvedParams.component as ValidComponent
  
  if (!componentMap[componentKey]) {
    notFound()
  }

  const Component = componentMap[componentKey].component
  return <Component />
}

export function generateStaticParams() {
  return Object.keys(componentMap).map(component => ({
    component
  }))
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const resolvedParams = await params
  const componentKey = resolvedParams.component as ValidComponent
  
  if (!componentMap[componentKey]) {
    notFound()
  }

  const { title, description } = componentMap[componentKey]
  
  return {
    title: `${title} | Design Documentation`,
    description
  }
}

