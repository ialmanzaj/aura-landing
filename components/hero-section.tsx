import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AppStoreBadge } from "@/components/app-store-badge"

export function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden deeper-hero-gradient">
      {/* Deeper gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-purple-50/50 to-pink-50/50 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_60%)]" />
      
      {/* Floating hearts for relationship atmosphere - positioned to avoid text overlap */}
      <Heart className="absolute top-16 left-4 h-6 w-6 text-pink-400 opacity-20 floating-heart hidden md:block" style={{ animationDelay: '0s' }} />
      <Heart className="absolute top-32 right-8 h-5 w-5 text-purple-400 opacity-20 floating-heart hidden lg:block" style={{ animationDelay: '1s' }} />
      <Heart className="absolute bottom-16 left-8 h-7 w-7 text-blue-400 opacity-20 floating-heart hidden md:block" style={{ animationDelay: '2s' }} />
      
      {/* Interactive message bubbles - positioned to avoid text overlap */}
      <Badge variant="outline" className="message-bubble absolute top-20 left-4 rotate-[-5deg] hidden lg:block">
        <span className="message-emoji">❤️</span> Love you!
      </Badge>
      <Badge variant="outline" className="message-bubble absolute bottom-20 right-4 rotate-[5deg] hidden lg:block">
        <span className="message-emoji">😂</span> That was hilarious!
      </Badge>
      <Badge variant="outline" className="message-bubble absolute top-80 right-20 rotate-[3deg] hidden xl:block">
        <span className="message-emoji">🤗</span> Miss you already
      </Badge>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[1fr_400px] lg:gap-16 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-8 relative">
            <div className="space-y-6 z-20 relative">
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl relative z-20 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Discover the Story Inside Your Chats — with aura
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-[500px] leading-relaxed relative z-20">
                See what your messages have been saying all along.
              </p>
              
              <div className="space-y-3 text-gray-700 max-w-[500px] relative z-20">
                <p className="text-sm sm:text-base font-medium text-gray-800">Ever wondered…</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base">
                  <p>• Who texts more?</p>
                  <p>• Who replies faster?</p>
                  <p>• Who double-texted first?</p>
                  <p>• When everything changed?</p>
                </div>
              </div>
              
              <p className="text-base sm:text-lg text-gray-600 max-w-[500px] leading-relaxed relative z-20">
                aura turns your WhatsApp chats into beautiful, emotional stories — like a private, AI-powered Wrapped for your relationships.
              </p>
            </div>
            
            <div className="flex flex-row flex-wrap gap-4 relative z-20">
              <AppStoreBadge size="medium" />
              <Button size="lg" variant="outline" asChild className="gradient-button-secondary">
                <Link href="#features">
                  Begin Discovering
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0 mx-auto lg:mx-0 max-w-[280px] sm:max-w-[350px] lg:max-w-none">
            <div className="relative rounded-3xl overflow-hidden gradient-card floating-animation">
              <Image 
                src="/aura_hero.png" 
                alt="Aura app interface showing WhatsApp conversation analytics and emotional insights"
                width={600}
                height={400}
                className="object-cover w-full h-auto smooth-transition hover:scale-105"
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 350px, 600px"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Floating gradient orbs */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  )
}