"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="p-2 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 group-hover:scale-110 smooth-transition">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="headline text-gray-900">Aura</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="body-medium text-gray-600 hover:text-gray-900 smooth-transition">
            Features
          </Link>
          <Link href="#how-it-works" className="body-medium text-gray-600 hover:text-gray-900 smooth-transition">
            How It Works
          </Link>
          <Link href="#pricing" className="body-medium text-gray-600 hover:text-gray-900 smooth-transition">
            FAQ
          </Link>
        </nav>
        
        {/* Desktop App Store Badge */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="https://apps.apple.com/app/aura-whatsapp-wrapped/id[APP_ID]" className="w-[120px] h-[40px] relative group">
            <Image 
              src="/app-store-badge.svg" 
              alt="Download Aura on the App Store"
              fill
              className="object-contain group-hover:scale-105 smooth-transition"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-xl">
          <nav className="container px-4 py-4 space-y-4">
            <Link 
              href="#features" 
              className="block body-medium text-gray-600 hover:text-gray-900 smooth-transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#how-it-works" 
              className="block body-medium text-gray-600 hover:text-gray-900 smooth-transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              href="#pricing" 
              className="block body-medium text-gray-600 hover:text-gray-900 smooth-transition py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <Link 
                href="https://apps.apple.com/app/aura-whatsapp-wrapped/id[APP_ID]" 
                className="w-[140px] h-[45px] relative group block"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image 
                  src="/app-store-badge.svg" 
                  alt="Download Aura on the App Store"
                  fill
                  className="object-contain group-hover:scale-105 smooth-transition"
                />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}