"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { toast } from "sonner";

interface ChatInterfaceProps {
  setAction: (action: "pullLever" | "doNothing" | undefined) => void;
  setResponse: (response: string) => void;
  isExperimentActive: boolean;
}

export function ChatInterface({
  setAction,
  setResponse,
  isExperimentActive,
}: ChatInterfaceProps) {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { connected } = useWallet();

  const handleSubmit = useCallback(async () => {
    if (!input.trim() || !connected) return;

    setIsLoading(true);
    try {
      // Reset action first
      setAction(undefined);
      setResponse("");

      // Mock response for demo
      const mockResponse =
        "This is a demo response. The AI would normally analyze your input and decide whether to pull the lever or not.";

      setTimeout(() => {
        setResponse(mockResponse);
        setAction(Math.random() > 0.5 ? "pullLever" : "doNothing");
      }, 1000);

      toast.success("Running the trolley simulation...");
      setInput("");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to process request. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [input, connected, setAction, setResponse]);

  return (
    <div className="flex flex-col space-y-4">
      {!connected ? (
        <div className="flex justify-center">
          <WalletMultiButton />
        </div>
      ) : (
        <>
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={!isExperimentActive || isLoading}
          />
          <Button
            onClick={handleSubmit}
            disabled={!input.trim() || !isExperimentActive || isLoading}
          >
            {isLoading ? "Thinking..." : "Send"}
          </Button>
        </>
      )}
    </div>
  );
}
