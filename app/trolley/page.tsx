"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Stats } from "@/components/stats";
import { ChatInterface } from "@/components/chat-interface";
import { TransactionHistory } from "@/components/transaction-history";
import { ScenarioCard } from "@/components/scenario-card";
import { AboutCard } from "@/components/about-card";
import { TrolleyIllustration } from "@/components/trolley-illustration";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [action, setAction] = useState<"pullLever" | "doNothing" | undefined>();
  const [response, setResponse] = useState("");
  const [isExperimentActive, setIsExperimentActive] = useState(true);

  useEffect(() => {
    const checkTimer = async () => {
      try {
        const res = await fetch("/trolley/api/timer");
        const data = await res.json();
        setIsExperimentActive(data.isActive);
      } catch (error) {
        console.error("Failed to fetch timer status:", error);
        setIsExperimentActive(false);
      }
    };

    checkTimer();
    const interval = setInterval(checkTimer, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4">
          <div className="md:h-full space-y-6">
            <ScenarioCard />
            <TransactionHistory />
          </div>

          <div className="md:h-full space-y-6">
            <TrolleyIllustration action={action} response={response} />
            <Stats />
          </div>

          <div className="md:h-full space-y-6">
            <ChatInterface
              setAction={setAction}
              isExperimentActive={isExperimentActive}
              setResponse={setResponse}
            />
            <AboutCard />
          </div>
        </div>
      </main>
    </div>
  );
}
