"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section id="pricing" className="bg-accent/30 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
              Frequently asked questions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to know about Aura and WhatsApp conversation analysis.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-8 py-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-base font-medium">
                How does Aura protect my privacy and keep my conversations secure?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Your privacy is our top priority. All conversation analysis happens with end-to-end encryption, and your chat data is processed securely on our encrypted servers. We never store your actual messages - only the insights we generate. You control what gets saved, shared, or exported. You can delete your data at any time, and we never share personal information with third parties.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-base font-medium">
                How do I import my WhatsApp conversations into Aura?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Aura works by analyzing WhatsApp chat exports. Simply export your 1:1 conversation from WhatsApp (without media to protect privacy), then securely upload it to Aura. The app guides you through the simple export process step-by-step. We support both iOS and Android WhatsApp exports.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-base font-medium">
                What kind of emotional insights does Aura provide?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Aura analyzes conversation patterns to reveal emotional insights like who texts more, your most-used words and emojis, late-night conversation streaks, periods of silence, emotional sentiment over time, conversation momentum, and relationship milestones. Think of it as "Spotify Wrapped" but for your most meaningful relationships.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-base font-medium">
                Can I share my Aura story slides on social media?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely! Aura creates beautiful, Instagram-style story slides designed for sharing. Each slide is optimized for social media and includes just the right amount of intrigue to make people curious about getting their own Aura insights. You control exactly what gets shared - keep it private or go viral with your relationship story.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-base font-medium">
                Does Aura work with group chats or only 1:1 conversations?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Currently, Aura focuses exclusively on 1:1 private conversations to provide the most meaningful emotional insights about your closest relationships. Group chat analysis may be added in future updates, but our priority is delivering deep, personal insights about your most important connections.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-base font-medium">
                How accurate is the emotional analysis of my messages?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Aura uses advanced AI trained on emotional communication patterns to analyze sentiment, relationship dynamics, and conversation patterns. While insights are based on message data and linguistic patterns, emotional analysis is interpretive by nature. We focus on trends and patterns rather than absolute judgments, giving you a data-driven perspective on your relationships.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
} 