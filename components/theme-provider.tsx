"use client"
import { useEffect } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  useEffect(() => {
    // This forces the 'dark' class off the document element on mount
    document.documentElement.classList.remove("dark");
    // This removes any stored theme from LocalStorage to prevent re-activation
    localStorage.removeItem("theme");
  }, []);

  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem={false} 
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
