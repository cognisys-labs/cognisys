"use client";

import type { Message } from "ai";
import cx from "classnames";
import { motion } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";

import { SparklesIcon } from "./icons";
import { Markdown } from "./markdown";

export const PreviewMessage = ({
  message,
  isLoading,
}: {
  message: Message;
  isLoading: boolean;
}) => {
  return (
    <motion.div
      className="w-full mx-auto max-w-3xl px-4 group/message"
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      data-role={message.role}
    >
      <div
        className={cx(
          "flex gap-4 rounded-xl",
          message.role === "user" || message.role === "system"
            ? "bg-primary text-primary-foreground px-3 w-fit ml-auto max-w-2xl py-2"
            : "w-full"
        )}
      >
        {message.role === "assistant" && (
          <div className="size-8 flex items-center rounded-full justify-center ring-1 shrink-0 ring-border">
            <SparklesIcon size={14} />
          </div>
        )}

        <div
          className={cx(
            "flex flex-col gap-2",
            message.role === "user" || message.role === "system"
              ? "w-full"
              : "w-full bg-muted/50 p-4 rounded-lg"
          )}
        >
          {message.content && (
            <div className="flex flex-col gap-4">
              <Markdown>{message.content as string}</Markdown>
              {message.role === "assistant" && message.toolInvocations && (
                <div className="text-xs text-muted-foreground mt-2">
                  Action taken: {message.toolInvocations[0].toolName}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const ThinkingMessage = () => {
  const role = "assistant";

  return (
    <motion.div
      className="w-full mx-auto max-w-3xl px-4 group/message "
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
      data-role={role}
    >
      <div
        className={cx(
          "flex gap-4 group-data-[role=user]/message:px-3 w-full group-data-[role=user]/message:w-fit group-data-[role=user]/message:ml-auto group-data-[role=user]/message:max-w-2xl group-data-[role=user]/message:py-2 rounded-xl",
          {
            "group-data-[role=user]/message:bg-muted": true,
          }
        )}
      >
        <div className="size-8 flex items-center rounded-full justify-center ring-1 shrink-0 ring-border">
          <SparklesIcon size={14} />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-col gap-4 text-muted-foreground">
            Thinking...
          </div>
        </div>
      </div>
    </motion.div>
  );
};
