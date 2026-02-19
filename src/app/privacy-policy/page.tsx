import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy & Terms - G-Propel",
  description:
    "Terms and Conditions, Privacy Policy, IP Policy & Disclaimer for G-Propel.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 bg-surface/30 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="GPropel" width={50} height={50} className="rounded-lg" />
          </Link>
          <Link
            href="/"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Terms and Conditions, Privacy Policy, IP Policy &amp; Disclaimer
        </h1>
        <p className="text-muted leading-relaxed mb-12">
          Welcome to G-Propel (&ldquo;Company,&rdquo; &ldquo;we,&rdquo;
          &ldquo;our,&rdquo; or &ldquo;us&rdquo; or GPropel or GPROPEL PTY LTD
          or Directors or Founders or Co-founders or all staff). We are
          committed to protecting your privacy and ensuring the security of your
          personal information. This Privacy Policy outlines how we collect, use,
          disclose, and protect your information when you visit our website,{" "}
          <a
            href="https://www.gpropel.com"
            className="text-primary hover:underline"
          >
            www.gpropel.com
          </a>{" "}
          (&ldquo;Site&rdquo;).
        </p>
        <p className="text-muted leading-relaxed mb-12">
          By using our Site, you agree to the collection and use of information
          in accordance with all the below. If you do not agree with the terms of
          this Privacy Policy, Terms &amp; Conditions, IP Policy, and Disclaimer
          please do not access the Site.
        </p>

        {/* Terms and Conditions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-primary">
            Terms and Conditions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">
                1. Acceptance of Terms
              </h3>
              <p className="text-muted leading-relaxed">
                By using the Site, you acknowledge that you have read,
                understood, and agree to be bound by these Terms and our Privacy
                Policy. These Terms apply to all visitors, users, and others who
                access or use the Site.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">2. Eligibility</h3>
              <p className="text-muted leading-relaxed">
                You must be at least 18 years old or the age of majority in your
                jurisdiction to use this Site. By using the Site, you represent
                and warrant that you have the legal capacity to enter into these
                Terms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                3. Use of the Site
              </h3>
              <p className="text-muted leading-relaxed mb-3">
                <strong className="text-foreground">3.1. License:</strong>{" "}
                G-Propel grants you a limited, non-exclusive, non-transferable,
                and revocable license to access and use the Site for your
                personal, non-commercial use, subject to these Terms.
              </p>
              <p className="text-muted leading-relaxed mb-3">
                <strong className="text-foreground">
                  3.2. Prohibited Conduct:
                </strong>{" "}
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                <li>
                  Use the Site for any unlawful purpose or in violation of any
                  applicable laws;
                </li>
                <li>
                  Attempt to gain unauthorized access to any portion of the
                  Site, other accounts, computer systems, or networks connected
                  to the Site, whether through hacking, password mining, or any
                  other means;
                </li>
                <li>
                  Use any automated means, including robots, spiders, or
                  scrapers, to access the Site for any purpose without our
                  express written permission;
                </li>
                <li>
                  Use the Site to transmit any viruses, worms, defects, Trojan
                  horses, or other items of a destructive nature;
                </li>
                <li>
                  Engage in any conduct that restricts or inhibits any other
                  user from using or enjoying the Site, or that may harm
                  G-Propel or users of the Site.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                4. Intellectual Property
              </h3>
              <p className="text-muted leading-relaxed">
                All content on the Site, including but not limited to text,
                images, graphics, logos, icons, software, audio, video, designs,
                and any other form of intellectual property (collectively,
                &ldquo;Content&rdquo;), is the exclusive property of G-Propel or
                its licensors and is protected by intellectual property laws. You
                may not use, reproduce, distribute, modify, create derivative
                works of, publicly display, publicly perform, republish,
                download, store, transmit, or otherwise exploit any Content on
                the Site without the prior written consent of G-Propel, except
                as expressly permitted by these Terms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">5. User Accounts</h3>
              <p className="text-muted leading-relaxed mb-3">
                <strong className="text-foreground">
                  5.1. Account Creation:
                </strong>{" "}
                To access certain features of the Site, you may be required to
                create an account. You agree to provide accurate, current, and
                complete information during the registration process and to
                update such information to keep it accurate, current, and
                complete.
              </p>
              <p className="text-muted leading-relaxed mb-3">
                <strong className="text-foreground">
                  5.2. Account Security:
                </strong>{" "}
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account. You agree to notify G-Propel immediately of any
                unauthorized use of your account or any other breach of
                security.
              </p>
              <p className="text-muted leading-relaxed">
                <strong className="text-foreground">
                  5.3. Account Termination:
                </strong>{" "}
                G-Propel reserves the right to suspend or terminate your account
                at any time, for any reason, without notice or liability to you.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                6. Disclaimers and Limitation of Liability
              </h3>
              <p className="text-muted leading-relaxed mb-3">
                <strong className="text-foreground">6.1. No Warranty:</strong>{" "}
                The Site and all Content are provided on an &ldquo;as is&rdquo;
                and &ldquo;as available&rdquo; basis without warranties of any
                kind, either express or implied, including but not limited to
                implied warranties of merchantability, fitness for a particular
                purpose, title, and non-infringement. G-Propel does not warrant
                that the Site will be uninterrupted, error-free, or free of
                viruses or other harmful components.
              </p>
              <p className="text-muted leading-relaxed">
                <strong className="text-foreground">
                  6.2. Limitation of Liability:
                </strong>{" "}
                To the fullest extent permitted by law, G-Propel shall not be
                liable for any direct, indirect, incidental, special,
                consequential, or punitive damages, including but not limited to
                loss of profits, data, use, goodwill, or other intangible
                losses, resulting from (a) your access to or use of, or
                inability to access or use, the Site; (b) any conduct or content
                of any third party on the Site; (c) any content obtained from
                the Site; and (d) unauthorized access, use, or alteration of
                your transmissions or content.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                7. Indemnification
              </h3>
              <p className="text-muted leading-relaxed">
                You agree to indemnify, defend, and hold harmless G-Propel, its
                affiliates, officers, directors, employees, agents, licensors,
                and service providers from and against any claims, liabilities,
                damages, judgments, awards, losses, costs, expenses, or fees
                (including reasonable attorneys&apos; fees) arising out of or
                relating to your violation of these Terms or your use of the
                Site.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                8. Third-Party Links
              </h3>
              <p className="text-muted leading-relaxed">
                The Site may contain links to third-party websites or services
                that are not owned or controlled by G-Propel. G-Propel has no
                control over and assumes no responsibility for the content,
                privacy policies, or practices of any third-party websites or
                services. You access such third-party websites or services at
                your own risk.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                9. Governing Law and Jurisdiction
              </h3>
              <p className="text-muted leading-relaxed">
                These Terms and any disputes arising out of or relating to these
                Terms or the Site shall be governed by and construed in
                accordance with the laws of Western Australia, without regard to
                its conflict of law principles. You agree to submit to the
                exclusive jurisdiction of the courts located in Western Australia
                for the resolution of any disputes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                10. Changes to These Terms
              </h3>
              <p className="text-muted leading-relaxed">
                G-Propel reserves the right to modify these Terms at any time.
                Any changes will be effective immediately upon posting the
                updated Terms on the Site. Your continued use of the Site
                following the posting of changes constitutes your acceptance of
                such changes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">11. Termination</h3>
              <p className="text-muted leading-relaxed">
                G-Propel may, in its sole discretion, terminate or suspend your
                access to all or part of the Site, for any reason, including
                without limitation, breach of these Terms. Upon termination,
                your right to use the Site will immediately cease.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">12. Miscellaneous</h3>
              <p className="text-muted leading-relaxed mb-3">
                <strong className="text-foreground">
                  12.1. Entire Agreement:
                </strong>{" "}
                These Terms, together with our Privacy Policy, constitute the
                entire agreement between you and G-Propel with respect to the
                Site and supersede all prior or contemporaneous understandings or
                agreements, written or oral, regarding such subject matter.
              </p>
              <p className="text-muted leading-relaxed mb-3">
                <strong className="text-foreground">
                  12.2. Waiver and Severability:
                </strong>{" "}
                No waiver by G-Propel of any term or condition set forth in
                these Terms shall be deemed a further or continuing waiver of
                such term or condition or a waiver of any other term or
                condition, and any failure of G-Propel to assert a right or
                provision under these Terms shall not constitute a waiver of
                such right or provision. If any provision of these Terms is held
                to be invalid, illegal, or unenforceable for any reason, the
                remaining provisions of these Terms will continue in full force
                and effect.
              </p>
              <p className="text-muted leading-relaxed">
                <strong className="text-foreground">12.3. Assignment:</strong>{" "}
                You may not assign or transfer these Terms, by operation of law
                or otherwise, without G-Propel&apos;s prior written consent. Any
                attempt by you to assign or transfer these Terms, without such
                consent, will be null and of no effect. G-Propel may freely
                assign or transfer these Terms without restriction.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-primary">
            Privacy Policy
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Information We Collect
              </h3>
              <p className="text-muted leading-relaxed mb-4">
                We may collect and process the following types of information:
              </p>

              <p className="text-muted leading-relaxed mb-2">
                <strong className="text-foreground">
                  1.1. Personal Information
                </strong>
              </p>
              <ul className="list-disc list-inside text-muted leading-relaxed space-y-1 ml-4 mb-4">
                <li>
                  <strong className="text-foreground">
                    Contact Information:
                  </strong>{" "}
                  Name, email address, phone number, mailing address.
                </li>
                <li>
                  <strong className="text-foreground">
                    Account Information:
                  </strong>{" "}
                  Username, password, and other details related to your account.
                </li>
              </ul>

              <p className="text-muted leading-relaxed mb-2">
                <strong className="text-foreground">1.2. Usage Data</strong>
              </p>
              <ul className="list-disc list-inside text-muted leading-relaxed space-y-1 ml-4 mb-4">
                <li>
                  <strong className="text-foreground">Log Data:</strong>{" "}
                  Information such as your IP address, browser type, browser
                  version, the pages of our Site you visit, the time and date of
                  your visit, the time spent on those pages, and other diagnostic
                  data.
                </li>
                <li>
                  <strong className="text-foreground">
                    Cookies and Tracking Technologies:
                  </strong>{" "}
                  We use cookies, beacons, tags, and scripts to collect and track
                  information and to improve and analyze our Site.
                </li>
              </ul>

              <p className="text-muted leading-relaxed mb-2">
                <strong className="text-foreground">
                  1.3. Communication Data
                </strong>
              </p>
              <ul className="list-disc list-inside text-muted leading-relaxed space-y-1 ml-4">
                <li>
                  <strong className="text-foreground">Customer Support:</strong>{" "}
                  Information you provide when contacting us for support,
                  including your name, email address, and the contents of your
                  communication.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Sharing Your Information
              </h3>
              <p className="text-muted leading-relaxed mb-3">
                We do not sell, trade, or otherwise transfer your personal
                information to outside parties, except as described below:
              </p>
              <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                <li>
                  <strong className="text-foreground">
                    Service Providers:
                  </strong>{" "}
                  We may share your information with third-party vendors,
                  consultants, and other service providers who perform services
                  on our behalf.
                </li>
                <li>
                  <strong className="text-foreground">
                    Legal Compliance:
                  </strong>{" "}
                  We may disclose your information to comply with applicable
                  laws, regulations, legal processes, or governmental requests.
                </li>
                <li>
                  <strong className="text-foreground">
                    Business Transfers:
                  </strong>{" "}
                  In the event of a merger, acquisition, or sale of all or a
                  portion of our assets, your information may be transferred to
                  the acquiring entity.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Data Security</h3>
              <p className="text-muted leading-relaxed">
                We implement appropriate technical and organizational measures to
                protect your information from unauthorized access, use, or
                disclosure. However, no method of transmission over the internet
                or electronic storage is 100% secure, and we cannot guarantee
                its absolute security.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Your Rights and Choices
              </h3>
              <p className="text-muted leading-relaxed mb-3">
                Depending on your jurisdiction, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4">
                <li>
                  <strong className="text-foreground">
                    Access and Correction:
                  </strong>{" "}
                  You may access and update your personal information by logging
                  into your account or contacting us directly.
                </li>
                <li>
                  <strong className="text-foreground">Deletion:</strong> You may
                  request the deletion of your personal information, subject to
                  certain exceptions.
                </li>
                <li>
                  <strong className="text-foreground">Opt-Out:</strong> You may
                  opt out of receiving promotional communications from us by
                  following the unsubscribe instructions in those emails or
                  contacting us directly.
                </li>
                <li>
                  <strong className="text-foreground">Cookies:</strong> You can
                  manage your cookie preferences through your browser settings.
                  However, disabling cookies may affect the functionality of our
                  Site.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Cookies</h3>
              <p className="text-muted leading-relaxed mb-3">
                If you leave a comment on our site you may opt-in to saving your
                name, email address and website in cookies. These are for your
                convenience so that you do not have to fill in your details again
                when you leave another comment. These cookies will last for one
                year.
              </p>
              <p className="text-muted leading-relaxed mb-3">
                If you visit our login page, we will set a temporary cookie to
                determine if your browser accepts cookies. This cookie contains
                no personal data and is discarded when you close your browser.
              </p>
              <p className="text-muted leading-relaxed">
                When you log in, we will also set up several cookies to save your
                login information and your screen display choices. Login cookies
                last for two days, and screen options cookies last for a year. If
                you select &ldquo;Remember Me&rdquo;, your login will persist for
                two weeks. If you log out of your account, the login cookies will
                be removed.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Embedded Content from Other Websites
              </h3>
              <p className="text-muted leading-relaxed mb-3">
                Articles on this site may include embedded content (e.g. videos,
                images, articles, etc.). Embedded content from other websites
                behaves in the exact same way as if the visitor has visited the
                other website.
              </p>
              <p className="text-muted leading-relaxed">
                These websites may collect data about you, use cookies, embed
                additional third-party tracking, and monitor your interaction
                with that embedded content, including tracking your interaction
                with the embedded content if you have an account and are logged
                in to that website.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                How Long We Retain Your Data
              </h3>
              <p className="text-muted leading-relaxed mb-3">
                If you leave a comment, the comment and its metadata are retained
                indefinitely. This is so we can recognize and approve any
                follow-up comments automatically instead of holding them in a
                moderation queue.
              </p>
              <p className="text-muted leading-relaxed">
                For users that register on our website (if any), we also store
                the personal information they provide in their user profile. All
                users can see, edit, or delete their personal information at any
                time (except they cannot change their username). Website
                administrators can also see and edit that information.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                What Rights You Have Over Your Data
              </h3>
              <p className="text-muted leading-relaxed">
                If you have an account on this site, or have left comments, you
                can request to receive an exported file of the personal data we
                hold about you, including any data you have provided to us. You
                can also request that we erase any personal data we hold about
                you. This does not include any data we are obliged to keep for
                administrative, legal, or security purposes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Children&apos;s Privacy
              </h3>
              <p className="text-muted leading-relaxed">
                Our Site is not intended for use by children under the age of 13.
                We do not knowingly collect personal information from children
                under 13. If we become aware that we have collected personal
                information from a child under 13, we will take steps to delete
                such information.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                Changes to This Privacy Policy
              </h3>
              <p className="text-muted leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes
                will be effective immediately upon posting the updated policy on
                our Site. We encourage you to review this Privacy Policy
                periodically to stay informed about our information practices.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-primary">Disclaimer</h2>
          <p className="text-muted leading-relaxed mb-4">
            The presentation attached or shown in this website may contain
            forward-looking statements that reflect our current views with
            respect to future events and financial performance. These
            forward-looking statements are based on our beliefs, assumptions, and
            information currently available to us. The actual results could
            differ materially due to risks and uncertainties, including but not
            limited to market conditions, competitive pressures, regulatory
            changes, and our ability to execute our business plan.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            The information presented here is for informational purposes only and
            does not constitute an offer to sell, or a solicitation of an offer
            to buy, any securities. Any financial projections and business
            forecasts presented here are based on assumptions we believe are
            reasonable but are subject to change and should not be relied upon as
            guarantees of future performance.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            We do not undertake any obligation to update or revise any
            forward-looking statements to reflect new information, future events,
            or otherwise, except as required by law. Potential investors should
            conduct their own due diligence and consult with their own financial
            and legal advisors before making any investment decisions.
          </p>
          <p className="text-muted leading-relaxed">
            By reading or reviewing this presentation, you agree to be bound by
            the foregoing limitations.
          </p>
        </section>

        {/* IP Policy */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-primary">
            G-Propel Intellectual Property (IP) Policy
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            This Intellectual Property (IP) Policy (&ldquo;Policy&rdquo;)
            governs the use of all content, trademarks, patents, designs, and
            other intellectual property on the G-Propel website (the
            &ldquo;Site&rdquo;). By accessing or using the Site, you agree to
            comply with this Policy. If you do not agree with the terms of this
            Policy, please do not use the Site.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">
                1. Ownership of Intellectual Property
              </h3>
              <p className="text-muted leading-relaxed">
                All content on the Site, including but not limited to text,
                images, graphics, logos, icons, software, audio, video, designs,
                patents, trademarks, trade secrets, and any other form of
                intellectual property (collectively, &ldquo;IP&rdquo;), is the
                exclusive property of G-Propel or its licensors. This IP is
                protected by intellectual property laws, including but not
                limited to copyright, trademark, patent, and trade secret laws.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                2. Restrictions on Use
              </h3>
              <p className="text-muted leading-relaxed mb-3">
                You may not reproduce, distribute, modify, create derivative
                works of, publicly display, publicly perform, republish,
                download, store, transmit, or otherwise exploit any IP on the
                Site without the prior written consent of G-Propel or the
                appropriate rights holder, except as follows:
              </p>
              <ul className="list-disc list-inside text-muted leading-relaxed space-y-2 ml-4 mb-3">
                <li>
                  <strong className="text-foreground">Personal Use:</strong> You
                  may download and print a limited number of copies of the IP
                  for your personal, non-commercial use only, provided that you
                  do not alter or remove any copyright, trademark, or other
                  proprietary notices.
                </li>
                <li>
                  <strong className="text-foreground">Fair Use:</strong> You may
                  use IP on the Site for purposes authorized by law, such as
                  fair use under copyright law. This includes uses for
                  criticism, comment, news reporting, teaching, scholarship, or
                  research.
                </li>
              </ul>
              <p className="text-muted leading-relaxed">
                Any use of the IP not expressly authorized by this Policy is a
                violation of the rights of G-Propel and may result in legal
                action.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">3. Trademarks</h3>
              <p className="text-muted leading-relaxed">
                All trademarks, service marks, logos, and trade names
                (collectively, &ldquo;Trademarks&rdquo;) displayed on the Site
                are the exclusive property of G-Propel or their respective
                owners. You may not use any Trademarks without the prior written
                consent of G-Propel or the appropriate rights holder.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">4. Patents</h3>
              <p className="text-muted leading-relaxed">
                G-Propel may hold one or more patents related to the technology
                and processes described on the Site. No license or right is
                granted by implication, estoppel, or otherwise under any patent,
                patent application, or other IP rights owned or controlled by
                G-Propel or its licensors. Unauthorized use of any patented
                technology is strictly prohibited.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">
                5. User Submissions
              </h3>
              <p className="text-muted leading-relaxed">
                If you submit any content to the Site, including but not limited
                to comments, suggestions, ideas, or other information
                (&ldquo;User Submissions&rdquo;), you agree that such User
                Submissions are non-confidential and shall become the sole
                property of G-Propel. By making a User Submission, you grant
                G-Propel a worldwide, perpetual, irrevocable, royalty-free,
                sublicensable, and transferable right to use, reproduce,
                distribute, modify, create derivative works of, publicly
                display, and otherwise exploit such User Submissions for any
                purpose.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16 p-8 rounded-2xl border border-border/50 bg-surface/30">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted leading-relaxed">
            If you have any questions about this Privacy Policy or our privacy
            practices, please contact us at:{" "}
            <a
              href="mailto:info@gpropel.com"
              className="text-primary hover:underline"
            >
              info@gpropel.com
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-surface/30 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Green Propel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
