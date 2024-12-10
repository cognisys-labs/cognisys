"use client";

import type { Message } from "ai";
import { useChat } from "ai/react";
import { useState, useEffect, useCallback } from "react";
import useSWR, { useSWRConfig } from "swr";

import { ChatHeader } from "@/components/chat-header";
import { PreviewMessage, ThinkingMessage } from "@/components/message";
import { useScrollToBottom } from "@/components/use-scroll-to-bottom";
import { MultimodalInput } from "./multimodal-input";
import { Overview } from "./overview";
import { fetcher } from "@/lib/fetcher";
import { SystemPromptPanel } from "./system-prompt-panel";

export function Chat({
  initialMessages,
  selectedModelId,
  id,
}: {
  initialMessages: Array<Message>;
  selectedModelId: string;
  id: string;
}) {
  const { mutate } = useSWRConfig();

  const {
    data: { messages: historyMessages },
  } = useSWR("/trolley/api/history", fetcher, {
    fallbackData: { messages: initialMessages },
    refreshInterval: 1000,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    transform: (data: { messages: Message[] }) => ({
      messages: data.messages.sort((a, b) => {
        if (a.role !== b.role) {
          return a.role === "user" ? -1 : 1;
        }

        if (a.createdAt && b.createdAt) {
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        }

        return a.id.localeCompare(b.id);
      }),
    }),
  });

  const {
    messages,
    setMessages,
    handleSubmit,
    input,
    setInput,
    append,
    isLoading,
    stop,
  } = useChat({
    body: { modelId: selectedModelId },
    id,
    api: "api/trolley/chat",
    onResponse: (response) => {
      console.log("Got response from chat API:", response);
    },
    onFinish: async (message) => {
      console.log("Chat finished");
      try {
        await mutate("/api/history");
      } catch (error) {
        console.error("Failed to mutate history:", error);
      }
    },
  });

  const [messagesContainerRef, messagesEndRef] =
    useScrollToBottom<HTMLDivElement>();

  useEffect(() => {
    if (historyMessages && !messages.length) {
      setMessages(historyMessages);
    }
  }, [historyMessages, messages.length, setMessages]);

  const systemMessage = messages.find((m) => m.role === "system");

  return (
    <div className="flex flex-row min-w-0 h-dvh bg-background">
      <div className="flex flex-col flex-1 min-w-0">
        <ChatHeader selectedModelId={selectedModelId} />
        <div
          ref={messagesContainerRef}
          className="flex flex-col min-w-0 gap-6 flex-1 overflow-y-scroll pt-4"
        >
          {messages.filter((m) => m.role !== "system").length === 0 && (
            <Overview />
          )}
          <div className="hidden">Debug message count: {messages.length}</div>
          {messages
            .filter((m) => m.role !== "system")
            .map((message, index) => {
              console.log("Rendering message:", message);
              return (
                <PreviewMessage
                  key={message.id}
                  message={message}
                  isLoading={isLoading && messages.length - 1 === index}
                />
              );
            })}
          {isLoading &&
            messages.length > 0 &&
            messages[messages.length - 1].role === "user" && (
              <ThinkingMessage />
            )}
          <div
            ref={messagesEndRef}
            className="shrink-0 min-w-[24px] min-h-[24px]"
          />
        </div>
        <form className="flex mx-auto px-4 bg-background pb-4 md:pb-6 gap-2 w-full md:max-w-3xl">
          <MultimodalInput
            chatId={id}
            input={input}
            setInput={setInput}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            stop={stop}
            messages={messages}
            setMessages={setMessages}
            append={append}
          />
        </form>
      </div>
      <SystemPromptPanel systemMessage={systemMessage} />
    </div>
  );
}
