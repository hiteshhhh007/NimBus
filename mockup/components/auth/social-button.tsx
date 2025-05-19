// mockup/components/auth/social-button.tsx
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SocialButtonProps {
  icon: ReactNode
  providerName: string
  onClick?: () => void
  className?: string
}

export function SocialButton({ icon, providerName, onClick, className }: SocialButtonProps) {
  return (
    <Button
      variant="outline"
      className={cn(
        "w-full flex items-center justify-center gap-2 py-2.5 border-neutral-300 hover:bg-neutral-50 text-neutral-700 font-medium",
        className
      )}
      onClick={onClick}
    >
      {icon}
      {/* <span className="sr-only">{providerName}</span> */}
    </Button>
  )
}