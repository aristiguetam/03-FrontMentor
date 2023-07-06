'use client'

import { useBackground } from "@/hooks"

export const Providers = ({ children }: { children: React.ReactNode }) => {
  
  useBackground();
  
  return (
    <div>
      {children}
    </div>
  )
}
