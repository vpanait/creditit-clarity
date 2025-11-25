import LegalHeader from "@/components/atoms/LegalHeader";
import LegalContent from "@/components/atoms/LegalContent";
import LegalPageLayout from "@/components/LegalPageLayout";
import Link from "next/link";
import EmailTo from "@/components/atoms/EmailTo";
import type { Metadata } from 'next'
import { ROUTE, WEBSITE_URL } from "@/const";

export const metadata: Metadata = {
  title: 'Privacy Policy | Creditit',
  description: 'Privacy Policy explaining how Creditit collects, uses, and protects your personal data.',
  alternates: {
    canonical: WEBSITE_URL + ROUTE.PRIVACY_POLICY,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <section>
        <LegalHeader>Introduction</LegalHeader>
        <LegalContent>
          Welcome to Creditit Technologies ("Creditit", "we", "our", or "us"). We are committed to protecting and respecting your privacy.
        </LegalContent>
        <LegalContent>
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our web-based platform (the "Platform"). It applies to all users and businesses using our services within the United Arab Emirates (UAE).
        </LegalContent>
        <LegalContent>
          By accessing or using our Platform, you agree to the terms of this Privacy Policy.
        </LegalContent>
      </section>

      <section>
        <LegalHeader>Information We Collect</LegalHeader>
        <LegalContent>
          We may collect and process the following categories of information:
        </LegalContent>
        <LegalContent>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, phone number.</li>
            <li><strong>Company Information:</strong> Company name, registration number, financial information as required for Know Your Business (KYB) checks.</li>
            <li><strong>Authentication Information:</strong> Data from UAE Pass authentication.</li>
            <li><strong>Usage Data:</strong> Information on how you interact with our Platform.</li>
          </ul>
        </LegalContent>
        <LegalContent>
          Sensitive data (e.g., biometric or health information) is not collected by Creditit. Any such data is handled by authorized third-party service providers.
        </LegalContent>
      </section>

      <section>
        <LegalHeader>How We Collect Information</LegalHeader>
        <LegalContent>
          We collect information:
        </LegalContent>
        <LegalContent>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Directly from you when you fill forms or submit data.</li>
            <li>Through third-party integrations for KYB and KYC.</li>
            <li>In the future, through cookies and tracking technologies (with consent).</li>
          </ul>
        </LegalContent>
      </section>

      <section>
        <LegalHeader>How We Use Your Information</LegalHeader>
        <LegalContent>
          We use your information to:
        </LegalContent>
        <LegalContent>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Facilitate account creation and onboarding.</li>
            <li>Provide our data services to businesses.</li>
            <li>Fulfill requests to third-party financial services providers.</li>
            <li>Ensure Platform security and compliance with legal obligations.</li>
          </ul>
        </LegalContent>
      </section>

      <section>
        <LegalHeader>Legal Basis for Processing</LegalHeader>
        <LegalContent>
          We process your personal information based on your consent. You may withdraw your consent at any time by contacting us.
        </LegalContent>
      </section>

      <section>
        <LegalHeader>Sharing Your Information</LegalHeader>
        <LegalContent>
          We may share your information with:
        </LegalContent>
        <LegalContent>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Financial services providers for the purpose of facilitating financing.</li>
            <li>Service providers bound by agreements aligned with UAE regulatory standards.</li>
          </ul>
        </LegalContent>
        <LegalContent>
          We do not transfer personal data internationally.
        </LegalContent>
      </section>

      <section>
        <LegalHeader>Data Storage and Hosting</LegalHeader>
        <LegalContent>
          Your data is securely stored on AWS servers located within the United Arab Emirates.
        </LegalContent>
      </section>

      <section>
        <LegalHeader>Data Security</LegalHeader>
        <LegalContent>
          We implement appropriate technical and organizational measures, including encryption and access controls, to protect your data from unauthorized access, disclosure, or destruction.
        </LegalContent>
      </section>

      <section>
        <LegalHeader>Data Retention</LegalHeader>
        <LegalContent>
          We retain your data as long as your account remains active. Upon closure of your account, we delete your personal and company information in accordance with applicable regulations.
        </LegalContent>
      </section>

      <section>
        <LegalHeader>Changes to This Privacy Policy</LegalHeader>
        <LegalContent>
          We reserve the right to modify this Privacy Policy at any time. Updated versions will be posted on our Platform. We encourage users to review this page periodically.
        </LegalContent>
      </section>

      <section>
        <LegalHeader>Contact Us</LegalHeader>
        <LegalContent>
          For any questions regarding this Privacy Policy or to exercise your rights, please contact us at: <EmailTo />
        </LegalContent>
      </section>

      <section>
        <LegalHeader>Governing Law</LegalHeader>
        <LegalContent>
          This Privacy Policy is governed by the laws of the Dubai International Financial Centre (DIFC), United Arab Emirates.
        </LegalContent>
      </section>
    </LegalPageLayout>
  )
}

