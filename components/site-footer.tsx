"use client";

import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4">
        {/* Top nav */}
        <nav className="flex justify-center space-x-8 mb-8">
          <Link href="/" className="text-base font-extrabold hover:opacity-70">
            Home
          </Link>
          <Link
            href="/faq"
            className="text-base font-extrabold hover:opacity-70"
          >
            FAQ
          </Link>
          <Link
            href="/lore"
            className="text-base font-extrabold hover:opacity-70"
          >
            Lore
          </Link>
          <Link
            href="/terms"
            className="text-base font-extrabold hover:opacity-70"
          >
            Terms
          </Link>
        </nav>

        <div className="text-center space-y-4">
          <p className="text-sm font-bold">
            © Cognisys Labs Ethics and Safety Foundation
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <Link href="/terms" className="hover:opacity-70">
              Terms & Conditions
            </Link>
            <Link href="/cookies" className="hover:opacity-70">
              Cookies Preferences
            </Link>
            <Link href="/privacy" className="hover:opacity-70">
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="text-center py-8">
          <h4 className="text-xl font-extrabold mb-4">Join Our Community</h4>
          <div className="flex justify-center space-x-4">
            <Link href="#" className="text-black hover:opacity-70">
              <span className="sr-only">Discord</span>
              <svg className="size-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </Link>
            <Link href="#" className="text-black hover:opacity-70">
              <span className="sr-only">X (Twitter)</span>
              <svg className="size-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link href="#" className="text-black hover:opacity-70">
              <span className="sr-only">Telegram</span>
              <svg className="size-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.05-.308-.346-.11l-6.4 4.02-2.76-.918c-.6-.183-.612-.6.125-.89l10.782-4.156c.5-.183.943.112.784.89z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}