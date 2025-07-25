import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-gray-600">Last Updated: December 2024</p>
            </div>

            <div className="prose prose-gray max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy is Our Priority</h2>
                <p className="text-gray-700 leading-relaxed">
                  At Aura, we believe your conversations are sacred. That's why we've built our app with privacy-first principles from the ground up. Your personal chat data never leaves your device, and we have no access to your conversations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How Aura Protects Your Data</h2>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">🔒 Complete Local Processing</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• All analysis happens on your device</li>
                    <li>• No uploads to our servers</li>
                    <li>• No cloud storage of your conversations</li>
                    <li>• No data transmission over the internet</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Data We Don't Collect</h2>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Chat Content:</strong> We never see or store your actual messages, photos, or media.</li>
                  <li><strong>Personal Information:</strong> We don't collect names, phone numbers, or contact details from your chats.</li>
                  <li><strong>Location Data:</strong> We don't track your location or use location services.</li>
                  <li><strong>Usage Patterns:</strong> We don't monitor which conversations you analyze or when.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Information We May Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To provide and improve our service, we may collect limited technical information that doesn't identify you personally:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>App Performance:</strong> Crash reports and performance metrics to fix bugs and improve the app.</li>
                  <li><strong>Device Information:</strong> Basic device type and OS version to ensure compatibility.</li>
                  <li><strong>Usage Analytics:</strong> Anonymous data about which features are used most to guide development.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  All technical data is anonymized and cannot be linked back to you or your conversations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Apple App Store Integration</h2>
                <p className="text-gray-700 leading-relaxed">
                  Aura integrates with the Apple App Store for purchases and subscriptions. Apple may collect purchase information according to their own privacy policy. We recommend reviewing Apple's privacy policy for details on how they handle your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  Since your chat data never leaves your device, the primary security responsibility lies with your device's built-in security features. We recommend keeping your device updated and protected with a passcode or biometric authentication.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Aura is designed for general audiences. We do not knowingly collect personal information from children under 13. If you are under the age of digital consent in your country, please obtain parental permission before using the app.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of the app after any changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us through the App Store or our official support channels.
                </p>
              </section>
            </div>

            <div className="text-center pt-8 border-t border-gray-200">
              <Link 
                href="/" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
} 