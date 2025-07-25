import Link from "next/link"
import { Heart } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 relative z-20">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="p-2 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 group-hover:scale-105 transition-transform duration-200">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">Aura</span>
            </Link>
            <p className="text-gray-600 leading-relaxed max-w-sm">
              Transform your private WhatsApp conversations into beautiful, emotional stories - like Spotify Wrapped for your relationships.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Company</h3>
            <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
              <li>
                <Link 
                  href="/terms" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Aura. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}