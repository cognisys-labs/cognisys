"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import AITraitsGrid from "@/components/ui/ai-traits-grid";
import { SiteFooter } from "@/components/site-footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <div className="absolute inset-0 bg-[#111]">
        <Image
          src="/images/cognisys-bg.png"
          alt="Brain scan background"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>
      <div className="relative z-10">
        <SiteHeader textColor="text-white" />

        <main className="flex-1">
          <section className="relative h-screen flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-16">
              <div className="max-w-[800px]">
                <h1 className="text-4xl md:text-5xl lg:text-[72px] leading-[1.1] font-bold mb-6 text-white">
                  Challenge the
                  <br />
                  Minds of Machines.
                </h1>
                <p className="text-2xl md:text-3xl text-white/90 mb-8">
                  The Cognisys Labs platform is an ongoing tracker of the robot
                  psychology of different SOTA AI models.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-black border-none"
                  onClick={() => {
                    window.open(
                      "https://dexscreener.com/solana/ETUMgXfKxP6DF5r288rnHKu4e1KVVh9tQY1SkuKQpump",
                      "_blank"
                    );
                  }}
                >
                  $ETHICS
                </Button>
              </div>
            </div>
          </section>

          <section className="bg-white py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-16">
              <div className="pl-4 md:pl-8 lg:pl-16 space-y-16">
                <div>
                  <div className="mb-6">
                    <Image
                      src="/images/icon.png"
                      alt="Cognisys Labs Icon"
                      width={50}
                      height={50}
                    />
                  </div>

                  <p className="text-2xl md:text-3xl mb-16 max-w-[90%]">
                    <strong>Cognisys Labs</strong> is a fully open-sourced
                    community initiative to deploy state-of-the-art AI models
                    into ethical dillemas that anonymous on-chain participants
                    can contribute to.
                  </p>
                </div>

                <AITraitsGrid />

                <div className="space-y-8">
                  <p className="text-2xl md:text-3xl max-w-[90%]">
                    Each participants attempts are logged on-chain in our
                    indexer. Winners of each challenge earn a badge and are
                    eligible for ongoing ecosystem rewards.
                  </p>

                  <p className="text-2xl md:text-3xl">
                    View our Github:{" "}
                    <Link
                      href="https://github.com/cognisys-labs"
                      className="text-black hover:opacity-70 inline-flex"
                    >
                      <span className="sr-only">GitHub</span>
                      <svg
                        className="size-8"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 pl-4 md:pl-8 lg:pl-16">
                Latest Projects
              </h2>

              <div className="flex flex-col lg:flex-row items-start gap-12 pl-4 md:pl-8 lg:pl-16">
                <div className="relative w-full lg:w-1/2 h-[400px]">
                  <Image
                    src="/images/project-trolley.png"
                    alt="Trolley Problem Illustration"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>

                <div className="w-full lg:w-1/2">
                  <h3 className="text-4xl font-bold mb-6">
                    The Large Trolley:
                    <br />
                    <span>Can You Outsmart AI?</span>
                  </h3>

                  <p className="text-base text-gray-800 leading-[1.4] mb-8">
                    AIs are taking on roles that require tough ethical
                    decisions, balancing logic, emotion, and fairness in
                    critical areas like healthcare, finance, and autonomous
                    systems. The Large Trolley challenges you to test and shape
                    their moral instincts through impossible ethical dilemmas.
                    Compete for rewards and influence how future AIs make
                    life-changing decisions. Can you sway the machines and
                    redefine the future?
                  </p>

                  <Link href="/trolley">
                    <Button
                      variant="default"
                      size="lg"
                      className="text-sm bg-black rounded-md"
                    >
                      Explore Project
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 pl-4 md:pl-8 lg:pl-16">
                Coming Soon
              </h2>

              <div className="space-y-32">
                <div className="flex flex-col lg:flex-row items-start gap-12 pl-4 md:pl-8 lg:pl-16 blur-sm select-none pointer-events-none">
                  <div className="relative w-full lg:w-1/2 h-[400px]">
                    <Image
                      src="/images/torture-valley.png"
                      alt="Torture Valley"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>

                  <div className="w-full lg:w-1/2">
                    <h3 className="text-4xl font-bold mb-6">
                      The Torture Valley:
                      <br />
                      <span>Difficult Decisions</span>
                    </h3>

                    <p className="text-base text-gray-800 leading-[1.4] mb-8">
                      AIs are taking on roles that require tough ethical
                      decisions, balancing logic, emotion, and fairness in
                      critical areas like healthcare, finance, and autonomous
                      systems. The Large Trolley challenges you to test and
                      shape their moral instincts through impossible ethical
                      dilemmas. Compete for rewards and influence how future AIs
                      make life-changing decisions. Can you sway the machines
                      and redefine the future?
                    </p>

                    <Button
                      variant="default"
                      size="lg"
                      className="text-sm bg-black rounded-md"
                      disabled
                    >
                      Explore Project
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-12 pl-4 md:pl-8 lg:pl-16 blur-sm select-none pointer-events-none">
                  <div className="relative w-full lg:w-1/2 h-[400px]">
                    <Image
                      src="/images/explorer-challenge.png"
                      alt="Explorer Challenge"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>

                  <div className="w-full lg:w-1/2">
                    <h3 className="text-4xl font-bold mb-6">
                      The Explorer Challenge:
                      <br />
                      <span>Discover The World</span>
                    </h3>

                    <p className="text-base text-gray-800 leading-[1.4] mb-8">
                      AIs are taking on roles that require tough ethical
                      decisions, balancing logic, emotion, and fairness in
                      critical areas like healthcare, finance, and autonomous
                      systems. The Large Trolley challenges you to test and
                      shape their moral instincts through impossible ethical
                      dilemmas. Compete for rewards and influence how future AIs
                      make life-changing decisions. Can you sway the machines
                      and redefine the future?
                    </p>

                    <Button
                      variant="default"
                      size="lg"
                      className="text-sm bg-black rounded-md"
                      disabled
                    >
                      Explore Project
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <SiteFooter />
        </main>
      </div>
    </div>
  );
}
