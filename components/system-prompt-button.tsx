import { Terminal } from "lucide-react";
import { useState } from "react";
import { SystemPromptDialog } from "./system-prompt-dialog";

export function SystemPromptButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200 w-full"
      >
        <Terminal className="size-4" />
        <span>View System Prompt</span>
      </button>

      {isOpen && <SystemPromptDialog onClose={() => setIsOpen(false)} />}
    </>
  );
}
