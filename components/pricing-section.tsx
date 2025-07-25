import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function PricingSection() {
  return (
    <section id="pricing" className="bg-accent/30 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
              Choose the plan that's right for your relationships
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From casual conversations to deep relationship analysis, we have options for everyone.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-primary/90">Free</CardTitle>
              <div className="text-3xl font-bold">$0</div>
              <CardDescription>Perfect for trying Aura</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>3 conversation analyses per month</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Basic emotional insights</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>5 story slides per analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Watermarked exports</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full border-primary/50 hover:bg-primary/10 hover:text-primary" variant="outline" asChild>
                <Link href="https://apps.apple.com/app/aura-whatsapp-wrapped/id[APP_ID]">
                  Download Free
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col border-primary bg-card/80 backdrop-blur-sm shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">Popular</div>
            <CardHeader>
              <CardTitle className="text-primary/90">Premium</CardTitle>
              <div className="text-3xl font-bold">$4.99<span className="text-sm font-normal">/month</span></div>
              <CardDescription>For relationship explorers</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Unlimited conversation analyses</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Advanced emotional insights</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Unlimited story slides</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Custom story themes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>HD exports without watermarks</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="https://apps.apple.com/app/aura-whatsapp-wrapped/id[APP_ID]">
                  Get Premium
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-primary/90">Annual</CardTitle>
              <div className="text-3xl font-bold">$39.99<span className="text-sm font-normal">/year</span></div>
              <CardDescription>Save 33% with annual billing</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>All Premium features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Priority analysis processing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Relationship timeline features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Multiple export formats</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Early access to new features</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full border-primary/50 hover:bg-primary/10 hover:text-primary" variant="outline" asChild>
                <Link href="https://apps.apple.com/app/aura-whatsapp-wrapped/id[APP_ID]">
                  Get Annual Plan
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}