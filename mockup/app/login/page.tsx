// mockup/app/login/page.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// Separator component is no longer strictly needed for this part, but keep if used elsewhere
// import { Separator } from "@/components/ui/separator" 
import { SocialButton } from "@/components/auth/social-button"
import { Mail, Eye, Facebook, Apple, Info } from "lucide-react"
import { useState } from "react"

// Simple Google Icon (as Lucide doesn't have direct brand icons)
const GoogleIcon = () => (
  <svg viewBox="0 0 48 48" width="20px" height="20px">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
    <path fill="none" d="M0 0h48v48H0z"></path>
  </svg>
);

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex items-stretch bg-neutral-100">
      {/* Left Panel: Form */}
      <div className="w-full md:w-1/2 lg:w-2/5 bg-white flex flex-col justify-center items-center p-8 md:p-12">
        <div className="w-full max-w-md">
          <Link href="/" className="inline-block mb-8">
            <Image
              src="/images/agrify-logo.png" // Replace with your Agrify logo
              alt="Agrify Logo"
              width={140}
              height={40}
              className="object-contain"
            />
          </Link>

          <p className="text-sm text-neutral-500 mb-1">Welcome back</p>
          <h1 className="text-3xl font-bold text-neutral-800 mb-8">
            Log In to Agrify
          </h1>

          <form className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-neutral-600">
                E-mail
              </Label>
              <div className="relative mt-1">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="example@email.com"
                  className="pl-3 pr-10 py-2.5 border-neutral-300 focus:border-emerald-500 focus:ring-emerald-500"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
              </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-sm font-medium text-neutral-600">
                        Password
                    </Label>
                    <Link 
                        href="/forgot-password" 
                        className="text-sm font-medium text-emerald-600 hover:text-emerald-500"
                    >
                        Forgot password?
                    </Link>
                </div>
              <div className="relative mt-1">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  placeholder="••••••••"
                  className="pl-3 pr-10 py-2.5 border-neutral-300 focus:border-emerald-500 focus:ring-emerald-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                >
                  <Eye className="h-5 w-5" />
                   <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 text-base"
            >
              Log In
            </Button>
          </form>

          <div className="my-6 flex items-center gap-x-3"> {/* Use gap for spacing */}
            <div className="h-px flex-1 bg-neutral-300" /> {/* Line 1 */}
            <span className="text-xs text-neutral-500 whitespace-nowrap flex-shrink-0"> {/* Ensure text doesn't shrink */}
              or log in with
            </span>
            <div className="h-px flex-1 bg-neutral-300" /> {/* Line 2 */}
          </div>

          <div className="grid grid-cols-3 gap-3">
             <SocialButton 
              icon={<Facebook className="h-5 w-5 text-blue-600" />} 
              providerName="Facebook" 
            />
            <SocialButton 
              icon={<GoogleIcon />} 
              providerName="Google" 
            />
            <SocialButton 
              icon={<Apple className="h-5 w-5 text-black" />} 
              providerName="Apple" 
            />
          </div>

          <p className="mt-10 text-center text-sm text-neutral-600">
            Don't have an account?{' '}
            <Link href="/signup" className="font-medium text-emerald-600 hover:text-emerald-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Panel: Decorative Image */}
      <div className="hidden md:block md:w-1/2 lg:w-3/5 relative">
        <Image
          src="/images/auth-bg.jpg" // IMPORTANT: Add this image to public/images/
                                   // Or use a gradient: className="bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 w-full h-full"
          alt="Decorative background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  )
}