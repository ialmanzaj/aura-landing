import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/antique-background.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Start identifying your antiques today
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of collectors, dealers, and enthusiasts who trust our app for identifying and learning about their treasured items.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Link href="https://apps.apple.com/us/app/antique-identifier-by-picture/id6736771469" className="w-[170px] h-[50px] relative">
              <Image 
                src="/app-store-badge.svg" 
                alt="Download on the App Store"
                fill
                className="object-contain"
              />
            </Link>
          </div>
          <p className="text-sm text-primary-foreground/80">Free download with optional premium features</p>
        </div>
      </div>
    </section>
  )
}