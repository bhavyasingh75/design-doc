import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function Navigation() {
  return (
    <ScrollArea className="h-[calc(100vh-4rem)] w-64 border-r bg-background">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">UI Components</h2>
        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start font-normal" asChild>
            <Link href="/components/button">Button</Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start font-normal" asChild>
            <Link href="/components/input">Input</Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start font-normal" asChild>
            <Link href="/components/card">Card</Link>
          </Button>
        </div>
      </div>
    </ScrollArea>
  )
}

