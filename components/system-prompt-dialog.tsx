import { X } from "lucide-react";
import { systemPrompt } from "../lib/ai/prompts";

export function SystemPromptDialog({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="size-5" />
        </button>

        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">System Prompt</h2>

          <div className="bg-gray-50 rounded-xl p-6 max-h-[70vh] overflow-y-auto">
            <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800 leading-relaxed">
              {systemPrompt}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
