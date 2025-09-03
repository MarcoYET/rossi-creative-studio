//ThemeProvider component to manage themes using next-themes
'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

type Props = {
  children: React.ReactNode;
  /** CSP nonce from middleware */
  nonce?: string;
};

export default function ThemeProvider({ children, nonce }: Props) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      /** passes nonce to next-themes’ inline init script */
      nonce={nonce}
    >
      {children}
    </NextThemesProvider>
  );
}
