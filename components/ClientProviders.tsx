"use client";

import { SolanaWalletProvider } from "./SolanaWalletProvider";
import { ThemeProvider } from "./theme-provider";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SolanaWalletProvider>{children}</SolanaWalletProvider>
    </ThemeProvider>
  );
}
