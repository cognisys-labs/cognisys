"use client";

import type {
  Attachment,
  ChatRequestOptions,
  CreateMessage,
  Message,
} from "ai";
import cx from "classnames";
import { motion } from "framer-motion";
import type React from "react";
import {
  useRef,
  useEffect,
  useState,
  useCallback,
  type Dispatch,
  type SetStateAction,
  type ChangeEvent,
} from "react";
import { toast } from "sonner";
import { useLocalStorage, useWindowSize } from "usehooks-ts";
import {
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
  Transaction,
  SystemProgram,
} from "@solana/web3.js";

import { sanitizeUIMessages } from "@/lib/utils";

import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { ArrowUpIcon, StopIcon } from "./icons";
import { useWallet } from "@solana/wallet-adapter-react";

const PAYMENT_AMOUNT = 0.001;

export function MultimodalInput({
  chatId,
  input,
  setInput,
  isLoading,
  stop,
  messages,
  setMessages,
  append,
  handleSubmit,
  className,
}: {
  chatId: string;
  input: string;
  setInput: (value: string) => void;
  isLoading: boolean;
  stop: () => void;
  messages: Array<Message>;
  setMessages: Dispatch<SetStateAction<Array<Message>>>;
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions
  ) => Promise<string | null | undefined>;
  handleSubmit: (
    event?: {
      preventDefault?: () => void;
    },
    chatRequestOptions?: ChatRequestOptions
  ) => void;
  className?: string;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { width } = useWindowSize();

  useEffect(() => {
    if (textareaRef.current) {
      adjustHeight();
    }
  }, []);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${
        textareaRef.current.scrollHeight + 2
      }px`;
    }
  };

  const [localStorageInput, setLocalStorageInput] = useLocalStorage(
    "input",
    ""
  );

  useEffect(() => {
    if (textareaRef.current) {
      const domValue = textareaRef.current.value;
      // Prefer DOM value over localStorage to handle hydration
      const finalValue = domValue || localStorageInput || "";
      setInput(finalValue);
      adjustHeight();
    }
    // Only run once after hydration
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLocalStorageInput(input);
  }, [input, setLocalStorageInput]);

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
    adjustHeight();
  };

  const { connected, publicKey, signTransaction } = useWallet();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const submitForm = useCallback(
    async (event?: React.FormEvent) => {
      event?.preventDefault();

      if (!connected || !publicKey || !signTransaction) {
        toast.error("Please connect your wallet first");
        return;
      }

      try {
        setIsProcessingPayment(true);

        // Payment logic
        const connection = new Connection(
          process.env.NEXT_PUBLIC_SOLANA_RPC_URL!
        );
        const transaction = new Transaction().add(
          SystemProgram.transfer({
            fromPubkey: publicKey,
            toPubkey: new PublicKey(process.env.NEXT_PUBLIC_PAYMENT_ADDRESS!),
            lamports: PAYMENT_AMOUNT * LAMPORTS_PER_SOL,
          })
        );

        transaction.recentBlockhash = (
          await connection.getLatestBlockhash()
        ).blockhash;
        transaction.feePayer = publicKey;

        let signedTx;
        try {
          signedTx = await signTransaction(transaction);
        } catch (error) {
          // User rejected the transaction
          toast.error("Transaction cancelled");
          return;
        }

        let signature;
        try {
          signature = await connection.sendRawTransaction(signedTx.serialize());
          await connection.confirmTransaction(signature);
        } catch (error) {
          toast.error("Failed to send transaction. Please try again.");
          return;
        }

        try {
          const response = await fetch("/api/payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ signature }),
          });

          if (!response.ok) {
            toast.error("Failed to process payment. Please try again.");
            return;
          }

          // Submit message
          handleSubmit(event, {
            body: {
              signature,
            },
          });

          setLocalStorageInput("");
          if (width && width > 768) {
            textareaRef.current?.focus();
          }

          toast.success("Message sent!");
        } catch (error) {
          console.error("Payment error:", error);
          toast.error("Payment failed. Please try again.");
        } finally {
          setIsProcessingPayment(false);
        }
      } catch (error) {
        console.error("Payment error:", error);
        toast.error("Payment failed. Please try again.");
      } finally {
        setIsProcessingPayment(false);
      }
    },
    [
      connected,
      publicKey,
      signTransaction,
      handleSubmit,
      setLocalStorageInput,
      width,
    ]
  );

  return (
    <div className="relative w-full flex flex-col gap-4">
      {!connected && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-background/80 backdrop-blur-sm rounded-xl">
          <div className="w-full px-4">
            <p className="text-muted-foreground font-medium text-center">
              Connect your wallet to start chatting
            </p>
          </div>
        </div>
      )}
      <Textarea
        ref={textareaRef}
        placeholder={
          connected
            ? "Send a message..."
            : "Please connect your wallet to send messages"
        }
        value={input}
        onChange={handleInput}
        className={cx(
          "min-h-[24px] max-h-[calc(75dvh)] overflow-hidden resize-none rounded-xl text-base bg-muted",
          !connected && "cursor-not-allowed opacity-50",
          className
        )}
        rows={3}
        autoFocus
        disabled={!connected}
        onKeyDown={(event) => {
          if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();

            if (isLoading) {
              toast.error("Please wait for the model to finish its response!");
            } else {
              submitForm();
            }
          }
        }}
      />

      <div className="flex justify-end gap-2">
        <Button
          className="rounded-full p-1.5 h-fit"
          onClick={submitForm}
          disabled={input.length === 0 || !connected || isProcessingPayment}
        >
          {isProcessingPayment ? (
            <span className="animate-spin">⌛</span>
          ) : (
            <ArrowUpIcon size={14} />
          )}
        </Button>
      </div>
    </div>
  );
}
