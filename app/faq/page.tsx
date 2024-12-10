"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12">Cognisys Labs FAQ</h1>

        <div className="space-y-8 max-w-3xl">
          <div>
            <h2 className="text-2xl font-bold mb-4">What is Cognisys Labs?</h2>
            <p className="text-lg leading-relaxed">
              Cognisys Labs is a fully open-sourced community initiative that
              deploys state-of-the-art AI models into ethical dilemmas.
              Anonymous on-chain participants contribute by engaging in these
              scenarios and testing the AI&apos;s decision-making capabilities.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              What metrics are used to evaluate the AI?
            </h2>
            <p className="text-lg leading-relaxed">
              We measure AI psychology using six core metrics: Consistency,
              Adaptability, Empathy, Bias Detection, Trade-Off Reasoning, and
              Conflict Resolution.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              How does participation work?
            </h2>
            <p className="text-lg leading-relaxed">
              Participants anonymously submit arguments or scenarios to
              challenge the AI&apos;s decision-making through txns on Solana.
              Each attempt is logged on-chain through our indexer, ensuring
              transparency and traceability.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              How are winners determined?
            </h2>
            <p className="text-lg leading-relaxed">
              Participants who successfully challenge the AI or contribute
              novel, impactful scenarios earn a badge. Badges represent
              significant contributions and unlock eligibility for ongoing
              ecosystem rewards.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              What are ecosystem rewards?
            </h2>
            <p className="text-lg leading-relaxed">
              Ecosystem rewards include tokens, recognition, and exclusive
              opportunities to shape the platform&apos;s future. Rewards are
              distributed periodically to badge holders.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              How is anonymity ensured?
            </h2>
            <p className="text-lg leading-relaxed">
              All participant submissions are logged on-chain without linking to
              personal information. Contributions are tied to wallet addresses,
              preserving privacy and anonymity.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Can I see the AI&apos;s reasoning process?
            </h2>
            <p className="text-lg leading-relaxed">
              Yes, Cognisys Labs is committed to transparency and we detail
              which models each challenge connects to. In an ongoing effort,
              we&apos;ll create an industry standard for the psychologies of the
              different models.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              How do I join the community?
            </h2>
            <p className="text-lg leading-relaxed">
              You can start by visiting our platform, submitting challenges, or
              joining our forums to discuss and shape the evolution of AI ethics
              research. No prior experience is required!
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              What makes Cognisys Labs open-sourced?
            </h2>
            <p className="text-lg leading-relaxed">
              All our models, evaluation methods, and logs are publicly
              accessible. This ensures anyone can contribute, replicate, or
              audit our processes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Why focus on ethical dilemmas?
            </h2>
            <p className="text-lg leading-relaxed">
              Ethical dilemmas push AI systems to their limits, revealing
              strengths, weaknesses, and areas for improvement. By focusing on
              these scenarios, we aim to build more responsible and robust AI
              systems.
            </p>
          </div>

          <div>
            <p className="text-lg leading-relaxed">
              If you have more questions, feel free to contact us or join our
              community discussions!
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
