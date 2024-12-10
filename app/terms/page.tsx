"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12">Terms &amp; Conditions</h1>

        <div className="max-w-3xl space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">
              Last Updated: December 9, 2024
            </h2>
            <p className="text-lg leading-relaxed">
              By accessing or using Cognisys Labs and participating in
              activities associated with the $ETHICS token, you agree to comply
              with the following Terms and Conditions. If you do not agree, you
              must refrain from using our platform or participating in related
              activities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-lg leading-relaxed">
              Cognisys Labs is an open-sourced initiative exploring ethical AI
              decision-making by deploying state-of-the-art AI models into
              ethical dilemmas. Participants can earn badges and $ETHICS tokens
              for engaging in challenges.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Eligibility</h2>
            <p className="text-lg leading-relaxed">
              To participate in Cognisys Labs activities: You must be at least
              18 years old or the legal age of majority in your jurisdiction.
              Participation must comply with local laws and regulations.
              Cognisys Labs is not available in jurisdictions where such
              activities are prohibited or restricted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              3. Nature of the $ETHICS Token
            </h2>
            <p className="text-lg leading-relaxed">
              No Intrinsic Value: The $ETHICS token has no inherent or
              guaranteed value. It is designed as a reward mechanism for
              participation and contribution within the Cognisys Labs ecosystem.
              It does not represent currency, a financial instrument, or an
              investment. Not an Investment: $ETHICS tokens are not offered or
              sold as securities or any other form of investment. Ownership of
              $ETHICS tokens does not imply any rights to profits, dividends, or
              future benefits. No Guarantees: There is no guarantee of
              liquidity, tradability, or transferability for $ETHICS tokens.
              Their use is limited to within the Cognisys Labs platform, as
              determined by the platform&rsquo;s governance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Use of the Platform</h2>
            <p className="text-lg leading-relaxed">
              Participants agree to use the platform ethically and responsibly.
              By participating, you confirm that: You will not engage in
              fraudulent activities, including manipulating AI behavior or other
              users. You will respect the open-source nature of the project and
              the community&rsquo;s rules. Cognisys Labs reserves the right to
              revoke access to users who violate these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              5. On-Chain Participation and Transparency
            </h2>
            <p className="text-lg leading-relaxed">
              All contributions, submissions, and interactions are logged
              on-chain. By participating, you agree that: Your wallet address
              and actions will be publicly visible on the blockchain. Cognisys
              Labs is not responsible for the security or management of your
              wallet or associated private keys.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-lg leading-relaxed">
              Cognisys Labs, its affiliates, and contributors shall not be held
              liable for: Any losses or damages arising from your participation
              in the platform or holding of $ETHICS tokens. Changes in the
              value, functionality, or availability of $ETHICS tokens. Technical
              failures, security breaches, or disruptions to the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              7. Intellectual Property
            </h2>
            <p className="text-lg leading-relaxed">
              Cognisys Labs is open-sourced under [insert applicable license,
              e.g., MIT License]. Contributions to the platform may be used for
              research, development, and community benefit. By participating,
              you grant a non-exclusive, royalty-free license for your
              submissions to be used within the ecosystem.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Amendments</h2>
            <p className="text-lg leading-relaxed">
              Cognisys Labs reserves the right to modify these Terms and
              Conditions at any time. Changes will be effective immediately upon
              posting. Continued participation after modifications constitutes
              acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
            <p className="text-lg leading-relaxed">
              These Terms and Conditions shall be governed and construed under
              the laws of Switzerland. Any disputes arising from participation
              in Cognisys Labs will be resolved exclusively in the courts of
              Switzerland.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
            <p className="text-lg leading-relaxed">
              If you have questions about these Terms and Conditions, please
              contact us on X
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Acknowledgment</h2>
            <p className="text-lg leading-relaxed">
              By participating in Cognisys Labs or holding $ETHICS tokens, you
              acknowledge that you understand and accept these Terms and
              Conditions.
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
