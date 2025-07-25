import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Terms and Conditions
              </h1>
              <p className="text-gray-600">Last Updated: December 2024</p>
            </div>

            <div className="prose prose-gray max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to Aura, a mobile application operated and owned by our development team. By accessing or using our mobile application ("App"), you agree to comply with and be bound by these Terms and Conditions ("Terms"). If you do not agree with these Terms, please refrain from using our App.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Eligibility</h2>
                <p className="text-gray-700 leading-relaxed">
                  Aura is intended for general use. If you are under the age of digital consent in your country, you must have permission from a parent or legal guardian to use the App.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Description of Service</h2>
                <p className="text-gray-700 leading-relaxed">
                  Aura is designed to provide users with personalized insights and statistics based on their WhatsApp chat history. The App analyzes your chat data to generate beautiful emotional stories and reports on metrics such as frequently used words, emojis, conversation patterns, and relationship insights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How Aura Works</h2>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Data Import:</strong> You can export your WhatsApp chat history and import it into Aura for analysis.</li>
                  <li><strong>Local Analysis:</strong> All data analysis is performed locally on your device.</li>
                  <li><strong>Data Privacy:</strong> Your chat data remains on your device and is not transmitted to our servers.</li>
                  <li><strong>AI-Powered Insights:</strong> Our AI feature enhances analysis by providing deeper insights into messaging behavior, trends, and emotional patterns. The AI processing is conducted locally on your device.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Subscriptions and Premium Features</h2>
                <ul className="space-y-3 text-gray-700">
                  <li>The App includes both free and premium features.</li>
                  <li>Premium subscriptions unlock advanced insights and unlimited analysis.</li>
                  <li>All purchases are processed through Apple App Store and are subject to their billing policies.</li>
                  <li>Subscriptions automatically renew unless cancelled before the renewal date.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. User Conduct</h2>
                <p className="text-gray-700 leading-relaxed mb-3">By using Aura, you agree to:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Use the App for lawful purposes only.</li>
                  <li>• Not engage in any activity that could harm, disrupt, or interfere with the App's functionality.</li>
                  <li>• Not attempt to gain unauthorized access to any part of the App or its related systems.</li>
                  <li>• Not misuse or attempt to manipulate AI-generated insights in a way that could cause harm or misrepresentation.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  All content, features, and functionality of the App, including but not limited to text, graphics, logos, software, and AI algorithms, are the exclusive property of Aura and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  Aura is provided on an "as-is" and "as-available" basis. We make no warranties, expressed or implied, regarding the App's operation or the information, content, or materials included. This application is intended for entertainment and personal insight purposes, and the analyses provided are for informational purposes only. To the fullest extent permitted by law, we disclaim all warranties, express or implied. We will not be liable for any damages of any kind arising from the use of this App.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Your privacy is important to us. All data processing happens locally on your device, and we do not store or transmit your personal chat data. Please review our Privacy Policy to understand how we handle your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Refund Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We want you to have a meaningful and enjoyable experience with Aura. All purchases are made through the Apple App Store and are subject to Apple's refund policies.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Important Notes:</strong> All purchases are considered final and non-refundable through our platform, as refunds are handled directly by Apple through their App Store policies. You can request refunds directly through Apple within their specified timeframes.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For support with your Aura experience or questions about features, please contact us at our support channels.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting the updated Terms in the App. Your continued use of the App after any such changes constitutes your acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to terminate or suspend your access to the App, without prior notice or liability, for any reason, including but not limited to a breach of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be governed and construed in accordance with applicable laws, without regard to conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions or concerns about these Terms, please contact us through the App Store or our official support channels.
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