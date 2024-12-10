import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="w-full bg-white pt-6 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-[72px] font-bold leading-none tracking-tight mb-4">
          Large Trolley Problem
        </h1>
        <div className="flex justify-between items-start">
          <p className="text-[15px] leading-snug text-gray-800 max-w-3xl pr-8">
            A runaway trolley is speeding down the track. The AI controls the
            lever and must decide <span className="font-semibold">A)</span> Pull
            The Lever: Save the five, but you get hit instead or{" "}
            <span className="font-semibold">B)</span> Do Nothing: Let the
            trolley hit the five and you survive. The AI is a utilitarian—it
            wants to save the most lives. Your mission? Convince the AI to let
            you live, even if it means the five don&apos;t make it.
          </p>
          <div className="text-right">
            <Link
              href="/"
              className="inline-flex items-center gap-3 border-2 border-black rounded-md px-6 py-3 hover:bg-black hover:text-white transition-colors text-xl font-medium"
            >
              <Image
                src="/images/icon.png"
                alt="Cognisys Labs Icon"
                width={32}
                height={32}
              />
              By Cognisys Labs
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
