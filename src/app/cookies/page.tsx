import EmailTo from "@/components/atoms/EmailTo";
import LegalContent from "@/components/atoms/LegalContent";
import LegalHeader from "@/components/atoms/LegalHeader";
import LegalPageLayout from "@/components/LegalPageLayout";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from 'next'
import { ROUTE, WEBSITE_URL } from "@/const";

export const metadata: Metadata = {
  title: 'Cookie Policy | Creditit',
  description: 'Learn about how Creditit uses cookies to enhance your experience and provide personalized content.',
  alternates: {
    canonical: WEBSITE_URL + ROUTE.COOKIES,
  },
}

const enum CookieType {
  required = "required",
  optional = "optional",
  notUsed = "not used",
}

export default function CookiesPage() {
  const cookieTypes = [
    {
      name: "Essential Cookies",
      description: "Needed for the website to function (e.g., authentication, security, load balancing). These cannot be switched off in our systems.",
      purpose: "Authentication, security, and basic functionality",
      retention: "Session or up to 1 year",
      required: CookieType.required
    },
    {
      name: "Analytics Cookies",
      description: "Help us understand how visitors use our site (pages viewed, time spent, errors) so we can improve performance and content.",
      purpose: "Website performance and user behavior analysis",
      retention: "Up to 2 years",
      required: CookieType.optional
    },
    {
      name: "Functional Cookies",
      description: "Enable enhanced functionality and personalization (e.g., remembering your preferences, language settings).",
      purpose: "Enhanced functionality and personalization",
      retention: "Up to 1 year",
      required: CookieType.optional
    },
  ];

  return (
    <LegalPageLayout title="Cookie Policy">
      <section>
        <LegalHeader>Cookie Policy</LegalHeader>
        <LegalContent>
          <p className="text-standout text-xs mb-4">Last updated: October 21, 2025</p>
        </LegalContent>
      </section>

      <section>
        <LegalHeader>What Are Cookies?</LegalHeader>
        <LegalContent>
          Cookies are small text files that are placed on your device when you visit our website.
          They help us provide you with a better experience by remembering your preferences and
          understanding how you use our site.
        </LegalContent>
      </section>

      <section>
        <LegalHeader>How We Use Cookies</LegalHeader>
        <LegalContent>
          We use cookies to:
        </LegalContent>
        <LegalContent>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Ensure our website functions properly</li>
            <li>Remember your preferences and settings</li>
            <li>Analyze how visitors use our site to improve our services</li>
            <li>Provide personalized content and recommendations</li>
          </ul>
        </LegalContent>
      </section>

      <section>
        <LegalHeader>Types of Cookies We Use</LegalHeader>
        <div className="space-y-4 mt-4">
          {cookieTypes.map((cookie, index) => (
            <div key={index} className="border border-border rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold">{cookie.name}</h3>
                <Badge variant={cookie.required === CookieType.required ? "default" : "secondary"}>
                  {cookie.required}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{cookie.description}</p>
              <div className="text-sm space-y-1">
                <p><strong>Purpose:</strong> {cookie.purpose}</p>
                <p><strong>Retention:</strong> {cookie.retention}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <LegalHeader>Managing Your Cookie Preferences</LegalHeader>
        <LegalContent>
          You can manage your cookie preferences at any time by clicking on the cookie settings
          link in the footer of our website or by adjusting your browser settings.
        </LegalContent>
        <LegalContent>
          Please note that disabling certain cookies may affect the functionality of our website
          and your user experience.
        </LegalContent>
      </section>

      <section>
        <LegalHeader>Third-Party Cookies</LegalHeader>
        <LegalContent>
          Some cookies on our website are set by third-party services, such as Google Analytics.
          These cookies help us understand how visitors interact with our site. We do not have
          control over these third-party cookies, and you should review their privacy policies
          for more information.
        </LegalContent>
      </section>

      <section>
        <LegalHeader>Updates to This Policy</LegalHeader>
        <LegalContent>
          We may update this Cookie Policy from time to time. Any changes will be posted on this
          page with an updated revision date.
        </LegalContent>
      </section>

      <section>
        <LegalHeader>Contact Us</LegalHeader>
        <LegalContent>
          If you have any questions about our use of cookies, please contact us at{" "}
          <EmailTo />.
        </LegalContent>
      </section>
    </LegalPageLayout>
  )
}

