"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedText } from "@/components/ui/animated-text"

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/features", label: "Features" },
    { href: "/marketplace", label: "Marketplace" },
    { href: "/community", label: "Community" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <motion.div
              className="relative h-10 w-32"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="/images/agrify-logo.png"
                alt="Agrify Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <AnimatedText
                key={link.href}
                as={Link}
                href={link.href}
                animationType="underline"
                className={`font-medium ${
                  isScrolled ? "text-[#2E462F]" : "text-white"
                } hover:text-[#5DBB63] transition-colors`}
              >
                {link.label}
              </AnimatedText>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className={`${
                  isScrolled ? "border-[#2E462F] text-[#2E462F]" : "border-white text-white"
                } hover:bg-[#5DBB63] hover:text-white hover:border-[#5DBB63]`}
              >
                Login
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-[#5DBB63] hover:bg-[#4CA952] text-white">Sign Up</Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-[#2E462F]" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-[#2E462F]" : "text-white"} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`font-medium ${
                        isScrolled ? "text-[#2E462F]" : "text-white"
                      } hover:text-[#5DBB63] transition-colors`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="flex flex-col space-y-2 pt-2">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.1 }}
                  >
                    <Button
                      variant="outline"
                      className={`w-full ${
                        isScrolled ? "border-[#2E462F] text-[#2E462F]" : "border-white text-white"
                      } hover:bg-[#5DBB63] hover:text-white hover:border-[#5DBB63]`}
                    >
                      Login
                    </Button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.1 + 0.1 }}
                  >
                    <Button className="w-full bg-[#5DBB63] hover:bg-[#4CA952] text-white">Sign Up</Button>
                  </motion.div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
