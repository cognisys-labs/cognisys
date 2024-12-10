"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function LorePage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12">
          The Lore Behind Cognisys Labs
        </h1>

        <div className="max-w-3xl space-y-6 text-lg leading-relaxed">
          <p>
            Cognisys Labs draws deep inspiration from Asimov&apos;s &quot;I,
            Robot&quot; series, where robot psychologists like Dr. Susan Calvin
            were essential in understanding and resolving complex ethical
            dilemmas faced by artificial minds.
          </p>

          <p>
            In today&apos;s world, AI systems face similar challenges. They make
            real-world decisions with inherent biases, ethical blind spots, and
            complex logical conflicts. This is where modern robot psychology
            becomes crucial:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Identifying and correcting cognitive biases in AI systems</li>
            <li>
              Enforcing ethical guidelines and preventing harmful behaviors
            </li>
            <li>
              Developing AI&apos;s capacity for human understanding and empathy
            </li>
          </ul>

          <p>
            Cognisys Labs operates as a large-scale initiative where users
            become robot psychologists, challenging AI models with complex
            ethical scenarios. Every interaction is transparently recorded on
            the blockchain, and users who successfully challenge the AI earn
            recognition through badges and tokens.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg mt-8">
            <h2 className="text-xl font-semibold mb-4">TL;DR</h2>
            <p>
              We&apos;re creating a platform where anyone can help train AI
              systems through ethical challenges, combining Asimov&apos;s vision
              with blockchain technology. Join us in shaping the future of AI
              ethics—one dilemma at a time.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
