"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Youtube, Github } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedText } from "@/components/ui/animated-text"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#2E462F] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/footer-pattern.png')] opacity-5" />
      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Logo and Info */}
          <AnimatedSection animation="fade-right" delay={0.1}>
            <Link href="/" className="inline-block mb-4">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Image
                  src="/images/agrify-logo.png"
                  alt="Agrify Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </motion.div>
            </Link>
            <p className="text-white/80 mb-4">
              Revolutionizing farming with AI-powered insights and a global marketplace.
            </p>
            <p className="text-white/80 mb-4">Made with ❤️ by Team Vito Verse</p>
            <div className="flex space-x-3">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Link href="https://github.com/team-member-1" className="text-white/80 hover:text-white">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub Profile 1</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Link href="https://github.com/team-member-2" className="text-white/80 hover:text-white">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub Profile 2</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Link href="https://github.com/team-member-3" className="text-white/80 hover:text-white">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub Profile 3</span>
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Column 2 - Quick Links */}
          <AnimatedSection animation="fade-up" delay={0.2}>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#5DBB63]" />
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/features", label: "Features" },
                { href: "/marketplace", label: "Marketplace" },
                { href: "/community", label: "Community" },
                { href: "/careers", label: "Careers" },
              ].map((link, index) => (
                <li key={link.href}>
                  <AnimatedText
                    as={Link}
                    href={link.href}
                    animationType="underline"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </AnimatedText>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Column 3 - Resources */}
          <AnimatedSection animation="fade-up" delay={0.3}>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Resources
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#5DBB63]" />
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/blog", label: "Blog" },
                { href: "/faqs", label: "FAQs" },
                { href: "/support", label: "Support" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
              ].map((link, index) => (
                <li key={link.href}>
                  <AnimatedText
                    as={Link}
                    href={link.href}
                    animationType="underline"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </AnimatedText>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Column 4 - Connect */}
          <AnimatedSection animation="fade-left" delay={0.4}>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Connect
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#5DBB63]" />
            </h3>
            <div className="flex space-x-4 mb-4">
              {[
                { href: "https://youtube.com", icon: <Youtube className="h-5 w-5" />, label: "YouTube" },
                { href: "https://linkedin.com", icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
                { href: "https://twitter.com", icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                { href: "https://facebook.com", icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
              ].map((social, index) => (
                <motion.div key={social.href} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <Link href={social.href} className="text-white/80 hover:text-white transition-colors">
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
            <p className="text-white/80">
              Contact:{" "}
              <AnimatedText as="a" href="mailto:info@agrify.com" animationType="underline" className="hover:text-white">
                info@agrify.com
              </AnimatedText>
            </p>
          </AnimatedSection>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>© {currentYear} Agrify. All rights reserved.</p>
          <p className="mt-1">Submitted as a part of Google Solution Challenge 2024.</p>
        </div>
      </div>
    </footer>
  )
}
