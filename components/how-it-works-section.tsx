import Image from "next/image"
import { Download, Shield, PartyPopper } from "lucide-react"

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Gradient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.05),transparent_50%)]" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              That's it. Your emotional graph is ready.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-[600px] leading-relaxed mx-auto">
              Three simple steps to unlock the story hidden in your conversations.
            </p>
          </div>
        </div>
        
        <div className="mx-auto grid max-w-6xl gap-6 py-12 sm:gap-8 lg:grid-cols-3 lg:py-16">
          <div className="flex flex-col items-center space-y-4 gradient-card p-6 sm:p-8 text-center group hover:shadow-xl smooth-transition sm:space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 smooth-transition">
              <Download className="h-8 w-8 text-white" />
            </div>
            <h3 className="headline text-gray-900">1. Export a WhatsApp chat</h3>
            <p className="body-medium text-gray-600 leading-relaxed">
              Simply export your 1:1 WhatsApp conversation from your phone — it takes just a few taps.
            </p>
            <div className="rounded-2xl overflow-hidden gradient-card shadow-lg group-hover:shadow-xl smooth-transition max-w-[240px] sm:max-w-[280px]">
              <Image
                src="/taking-photo.png"
                alt="Exporting WhatsApp conversations"
                width={280}
                height={560}
                className="w-full h-auto"
                sizes="(max-width: 640px) 240px, 280px"
              />
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-4 gradient-card p-6 sm:p-8 text-center group hover:shadow-xl smooth-transition sm:space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center group-hover:scale-110 smooth-transition">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="headline text-gray-900">2. Import it into aura</h3>
            <p className="body-medium text-gray-600 leading-relaxed">
              Upload your chat file to aura. Everything happens locally on your device — your data never leaves your phone.
            </p>
            <div className="rounded-2xl overflow-hidden gradient-card shadow-lg group-hover:shadow-xl smooth-transition max-w-[240px] sm:max-w-[280px]">
              <Image
                src="/analyze.png"
                alt="Analyzing chat data"
                width={280}
                height={560}
                className="w-full h-auto"
                sizes="(max-width: 640px) 240px, 280px"
              />
            </div>
          </div>
          
          <div className="flex flex-col items-center space-y-4 gradient-card p-6 sm:p-8 text-center group hover:shadow-xl smooth-transition sm:space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center group-hover:scale-110 smooth-transition">
              <PartyPopper className="h-8 w-8 text-white" />
            </div>
            <h3 className="headline text-gray-900">3. Get Your Wrapped</h3>
            <p className="body-medium text-gray-600 leading-relaxed">
              Beautiful, emotional stories ready to share or keep private. Your relationship insights, visualized like never before.
            </p>
            <div className="rounded-2xl overflow-hidden gradient-card shadow-lg group-hover:shadow-xl smooth-transition max-w-[240px] sm:max-w-[280px]">
              <Image
                src="/result.png"
                alt="Your Wrapped results"
                width={280}
                height={560}
                className="w-full h-auto"
                sizes="(max-width: 640px) 240px, 280px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}