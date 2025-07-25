import Link from "next/link"
import Image from "next/image"

export function CTASection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.1),transparent_60%)]" />
      
      {/* Floating gradient orbs */}
      <div className="absolute top-16 left-8 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-16 right-8 w-20 h-20 bg-gradient-to-br from-white/8 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-10 text-center">
          <div className="space-y-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Don't just scroll your chats.<br />Feel them — with aura.
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              🔗 Want to know what your messages really say? Try aura — your relationship, visualized.
            </p>
          </div>
          
          <div className="flex flex-col gap-6 items-center">
            <Link 
              href="https://apps.apple.com/app/aura-whatsapp-wrapped/id[APP_ID]" 
              className="w-[200px] h-[60px] relative group block"
            >
              <div className="absolute inset-0 bg-white/15 rounded-2xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <Image 
                src="/app-store-badge.svg" 
                alt="Download Aura on the App Store"
                fill
                className="object-contain group-hover:scale-105 transition-all duration-300 relative z-10"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}