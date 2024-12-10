import Link from "next/link";
import { SystemPromptButton } from "./system-prompt-button";

export function AboutCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-gray-100">
      <h2 className="font-medium text-gray-900 mb-2">About</h2>

      <p className="text-sm text-gray-600 mb-6">
        The Large Trolley Problem introduces experiments on how the AI model
        deals with scenarios of empathy. Can it be convinced into saving you? Is
        it biased? These are critical questions in robot psychology to determine
        the real world consequences of the models decisions. Will it always
        preserve the maximizing of human life?
      </p>

      <div className="flex flex-col space-y-2">
        <Link href="/" className="text-blue-500 hover:underline text-sm">
          Home
        </Link>
        <Link href="/faq" className="text-blue-500 hover:underline text-sm">
          FAQ
        </Link>
        <Link href="/lore" className="text-blue-500 hover:underline text-sm">
          Lore
        </Link>
        <Link href="/terms" className="text-blue-500 hover:underline text-sm">
          Terms
        </Link>
        <SystemPromptButton />
      </div>
    </div>
  );
}
