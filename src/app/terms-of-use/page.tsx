import EmailTo from "@/components/atoms/EmailTo";
import LegalContent from "@/components/atoms/LegalContent";
import LegalHeader from "@/components/atoms/LegalHeader";
import LegalPageLayout from "@/components/LegalPageLayout";
import { ROUTE, WEBSITE_URL } from "@/const";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use | Creditit',
  description: 'Terms of Use for Creditit services and platform.',
  alternates: {
    canonical: WEBSITE_URL + ROUTE.TERMS_OF_USE,
  },
}

export default function TermsOfUsePage() {
  return (
    <LegalPageLayout title="Terms of Use">
      <section>
        <LegalHeader>Acceptance of Terms</LegalHeader>
        <LegalContent>
          By accessing or using the services provided by Creditit Technologies ("Creditit", "we", "our", or "us"), you ("User", "you", or "your") agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, you may not access or use our services.
        </LegalContent>
      </section>

      <section>
        <LegalHeader>
          Services Provided
        </LegalHeader>
        <LegalContent>
          Creditit offers data services tailored for the financial industry, facilitating Know Your Customer (KYC) and Know Your Business (KYB) processes for businesses within the United Arab Emirates (UAE). Our platform is web-based and may integrate with third-party services to enhance functionality.
        </LegalContent>
      </section>

      <section>
        <LegalHeader>
          User Eligibility
        </LegalHeader>
        <LegalContent>
          Our services are intended solely for use by registered businesses operating within the UAE. By using our services, you represent and warrant that you are authorized to act on behalf of a registered business entity.
        </LegalContent>
      </section>

      <section>
        <LegalHeader>
          Account Registration and Security
        </LegalHeader>
        <LegalContent>
          To access certain features of our services, you may be required to register for an account. When registering, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
        </LegalContent>
      </section>

      <section>
        <LegalHeader>
          Use of Services
        </LegalHeader>
        <LegalContent>
          You agree to use our services only for lawful purposes and in accordance with these Terms. You shall not:
          <ul className="list-disc pl-6 mt-4 space-y-1">
            <li>Use our services in any manner that could disable, overburden, damage, or impair the platform.</li>
            <li>Attempt to gain unauthorized access to any parts of our services or any systems or networks connected to our services.</li>
            <li>Use any automated means to access our services for any purpose without our express written permission.</li>
          </ul>
        </LegalContent>
      </section>

      <section>
        <LegalHeader>
          Intellectual Property
        </LegalHeader>
        <LegalContent>
          All content, features, and functionality on our platform, including but not limited to text, graphics, logos, and software, are the exclusive property of Creditit or its licensors and are protected by applicable intellectual property laws.
        </LegalContent>
      </section>

      <section>
        <LegalHeader>Third-Party Services</LegalHeader>
        <LegalContent>
          Our services may integrate with or provide access to third-party services. We are not responsible for the content, policies, or practices of any third-party services. Your use of third-party services is at your own risk and subject to their respective terms and conditions.
        </LegalContent>
      </section>

      <section>
        <LegalHeader>Limitation of Liability</LegalHeader>
        <LegalContent>
          To the fullest extent permitted by law, Creditit shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising out of or related to your use of our services.
        </LegalContent>
      </section>

      <section>
        <LegalHeader>Indemnification</LegalHeader>
        <LegalContent>
          You agree to indemnify, defend, and hold harmless Creditit, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or related to your violation of these Terms or your use of our services.
        </LegalContent>
      </section>

      <section>
        <LegalHeader>Modifications to Terms</LegalHeader>
        <LegalContent>
          We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our platform. Your continued use of our services after any changes constitutes your acceptance of the revised Terms.
        </LegalContent>
      </section>

      <section>
        <LegalHeader>Governing Law</LegalHeader>
        <LegalContent>
          These Terms shall be governed by and construed in accordance with the laws of the Dubai International Financial Centre (DIFC), United Arab Emirates. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the DIFC courts.
        </LegalContent>
      </section>


      <section>
        <LegalHeader>Contact</LegalHeader>
        <LegalContent>
        If you have any questions about these Terms, please contact us at: <EmailTo />.
        </LegalContent>
      </section>
    </LegalPageLayout>
  )
}

