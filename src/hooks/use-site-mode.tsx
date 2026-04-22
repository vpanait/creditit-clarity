'use client'

import { createContext, useContext, useState } from "react";

type SiteMode = 'lender' | 'borrower';

interface SiteModeContextValue {
  mode: SiteMode;
  setMode: (mode: SiteMode) => void;
}

const SiteModeContext = createContext<SiteModeContextValue | null>(null);

export function SiteModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<SiteMode>('borrower');
  return (
    <SiteModeContext.Provider value={{ mode, setMode }}>
      {children}
    </SiteModeContext.Provider>
  );
}

export function useSiteMode() {
  const ctx = useContext(SiteModeContext);
  if (!ctx) throw new Error('useSiteMode must be used within SiteModeProvider');
  return ctx;
}
