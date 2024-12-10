import type { Message } from "ai";
import { Markdown } from "./markdown";

export function SystemPromptPanel({
  systemMessage,
}: {
  systemMessage?: Message;
}) {
  if (!systemMessage) return null;

  return (
    <div className="hidden lg:block w-64 xl:w-80 shrink-0 h-full border-l border-border">
      <div className="p-4 sticky top-0">
        <div className="rounded-lg border bg-card p-4">
          <h3 className="font-semibold mb-2">System Prompt</h3>
          <div className="text-sm text-muted-foreground">
            <Markdown>{systemMessage.content as string}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}
