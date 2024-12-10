"use client";

import Link from "next/link";

export function SiteHeader({ textColor = "text-black" }) {
  return (
    <header className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center items-center pt-16">
          <div className="flex space-x-8">
            <Link
              href="/"
              className={`text-base font-extrabold ${textColor} hover:opacity-70`}
            >
              Home
            </Link>

            <Link
              href="/faq"
              className={`text-base font-extrabold ${textColor} hover:opacity-70`}
            >
              FAQ
            </Link>
            <Link
              href="/lore"
              className={`text-base font-extrabold ${textColor} hover:opacity-70`}
            >
              Lore
            </Link>
            <Link
              href="/terms"
              className={`text-base font-extrabold ${textColor} hover:opacity-70`}
            >
              Terms
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
