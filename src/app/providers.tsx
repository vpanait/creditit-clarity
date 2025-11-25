'use client'

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GTMProvider from "@/components/GTMProvider";
import { useState } from "react";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <GTMProvider>
          <Toaster />
          <Sonner />
          {children}
        </GTMProvider>
      </TooltipProvider>
    </QueryClientProvider>
  )
}

