'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, FileSymlink } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSyncWithFigma = () => {
    // Replace this URL with your actual Figma file URL
    window.open('https://www.figma.com/file/your-file-id', '_blank')
  }

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2 md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <Link href="/components" className="text-foreground hover:text-primary">
                  Components
                </Link>
                <Link href="/guidelines" className="text-foreground hover:text-primary">
                  Guidelines
                </Link>
                <Link href="/resources" className="text-foreground hover:text-primary">
                  Resources
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="text-2xl font-bold">
            Design Docs
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/components" className="text-foreground hover:text-primary">
            Components
          </Link>
          <Link href="/guidelines" className="text-foreground hover:text-primary">
            Guidelines
          </Link>
          <Link href="/resources" className="text-foreground hover:text-primary">
            Resources
          </Link>
        </nav>
        <Button onClick={handleSyncWithFigma} variant="outline">
          <FileSymlink className="mr-2 h-4 w-4" />
          Sync with Figma
        </Button>
      </div>
    </header>
  )
}

