"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, ChevronRight, Play, Leaf, MapPin, Brain, ShoppingCart, MessageCircle, Lock, Globe } from "lucide-react"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { FeatureCard } from "@/components/feature-card"
import { BenefitItem } from "@/components/benefit-item"
import { Spotlight } from "@/components/ui/spotlight"
import { AnimatedSection } from "@/components/animated-section"
import { FloatingElement } from "@/components/ui/floating-element"
import { ParticleBackground } from "@/components/ui/particle-background"
import { motion } from "framer-motion"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <NavBar />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Lush agricultural field with technology overlay"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2E462F]/80 to-transparent" />
          <Spotlight className="hidden md:block" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                Agrify: Cultivating Tomorrow's Harvest, Today.
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 w-24 h-1 bg-[#5DBB63]"
                initial={{ width: 0 }}
                animate={{ width: "6rem" }}
                transition={{ duration: 1, delay: 1 }}
              />
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl mb-8 text-white/90"
            >
              Revolutionize your farming with AI-powered insights for disease detection, crop recommendations, direct
              market access, and a thriving global community.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-[#5DBB63] hover:bg-[#4CA952] text-white group">
                  Get Started with Agrify
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 group"
                >
                  <Play className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  Watch Product Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            <ChevronRight size={30} className="text-white rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* What is Agrify / SDGs Section */}
      <section className="py-20 bg-[#F5F5DC]/30 relative">
        <ParticleBackground
          particleCount={30}
          particleColors={["#5DBB63", "#2E462F", "#FFD700"]}
          speed={0.3}
          connectionDistance={150}
        />
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#2E462F] relative inline-block mx-auto">
              Growing a Sustainable Future, Together
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#5DBB63] to-[#FFD700]" />
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-right" delay={0.2}>
              <p className="text-lg leading-relaxed text-gray-700">
                Agrify is a platform introduced to revolutionize farming practices in India & elsewhere by leveraging
                the power of AI into the fingertips of the farmers. Our mission is to empower farmers with cutting-edge
                technology, enabling them to make data-driven decisions, increase crop yields, and connect directly with
                consumers through our marketplace.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 gap-8">
              <AnimatedSection animation="zoom-in" delay={0.4}>
                <FloatingElement amplitude={8} frequency={0.6}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 mb-4 rounded-full bg-[#FFD700]/20 flex items-center justify-center transform transition-transform duration-500 hover:scale-110 hover:bg-[#FFD700]/30">
                      <Image src="/images/sdg-zero-hunger.png" alt="Zero Hunger SDG" width={80} height={80} />
                    </div>
                    <AnimatedText as="h3" animationType="color" className="text-xl font-semibold mb-2 text-[#2E462F]">
                      Zero Hunger
                    </AnimatedText>
                    <p className="text-gray-600">Increasing crop yield to meet global demands through AI.</p>
                  </div>
                </FloatingElement>
              </AnimatedSection>

              <AnimatedSection animation="zoom-in" delay={0.6}>
                <FloatingElement amplitude={8} frequency={0.5}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 mb-4 rounded-full bg-[#008080]/20 flex items-center justify-center transform transition-transform duration-500 hover:scale-110 hover:bg-[#008080]/30">
                      <Image
                        src="/images/sdg-innovation.png"
                        alt="Industry, Innovation & Infrastructure SDG"
                        width={80}
                        height={80}
                      />
                    </div>
                    <AnimatedText as="h3" animationType="color" className="text-xl font-semibold mb-2 text-[#2E462F]">
                      Industry, Innovation & Infrastructure
                    </AnimatedText>
                    <p className="text-gray-600">
                      Integrating cutting-edge tech for sustainable agricultural development.
                    </p>
                  </div>
                </FloatingElement>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#2E462F]">
              Our Roots & Our Horizon 🚀🔮
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection animation="fade-right" delay={0.2}>
              <AnimatedGradientBorder speed="slow" containerClassName="h-full">
                <div className="bg-white rounded-xl p-8 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#5DBB63]/20 flex items-center justify-center mr-4 transform transition-transform duration-300 hover:scale-110 hover:bg-[#5DBB63]/30">
                      <Leaf className="h-6 w-6 text-[#5DBB63]" />
                    </div>
                    <AnimatedText as="h3" animationType="color" className="text-2xl font-semibold text-[#2E462F]">
                      Our Mission 🚀
                    </AnimatedText>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    To empower farmers with cutting-edge technology, enabling them to make data-driven decisions,
                    increase crop yields, and connect directly with consumers through our marketplace.
                  </p>
                </div>
              </AnimatedGradientBorder>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={0.4}>
              <AnimatedGradientBorder speed="slow" containerClassName="h-full">
                <div className="bg-white rounded-xl p-8 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#FFD700]/20 flex items-center justify-center mr-4 transform transition-transform duration-300 hover:scale-110 hover:bg-[#FFD700]/30">
                      <Globe className="h-6 w-6 text-[#FFD700]" />
                    </div>
                    <AnimatedText as="h3" animationType="color" className="text-2xl font-semibold text-[#2E462F]">
                      Our Vision 🔮
                    </AnimatedText>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    To create a global agricultural ecosystem where farmers thrive with AI-powered insights, consumers
                    access fresh, traceable produce, and communities collaborate for sustainable farming practices.
                  </p>
                </div>
              </AnimatedGradientBorder>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What We Do / Key Benefits Section */}
      <section className="py-20 bg-[#F0F0F0] relative">
        <ParticleBackground
          particleCount={20}
          particleColors={["#5DBB63", "#2E462F", "#A0522D"]}
          speed={0.2}
          connectionDistance={100}
        />
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#2E462F]">
              Intelligent Farming Solutions for Producers & Consumers 🌐✨
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="zoom-in" delay={0.2}>
            <Tabs defaultValue="producers" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="producers" className="text-lg py-3 relative group">
                  For Producers 🌾
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#5DBB63] scale-x-0 group-data-[state=active]:scale-x-100 transition-transform duration-300" />
                </TabsTrigger>
                <TabsTrigger value="consumers" className="text-lg py-3 relative group">
                  For Consumers 🌐
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#5DBB63] scale-x-0 group-data-[state=active]:scale-x-100 transition-transform duration-300" />
                </TabsTrigger>
              </TabsList>

              <AnimatedGradientBorder speed="medium">
                <TabsContent value="producers" className="bg-white rounded-xl p-6">
                  <ul className="space-y-4">
                    <BenefitItem
                      icon={<Brain className="h-5 w-5 text-[#5DBB63]" />}
                      title="AI-powered guidance"
                      description="Get intelligent recommendations based on your specific farming conditions"
                      delay={0.1}
                    />
                    <BenefitItem
                      icon={<MapPin className="h-5 w-5 text-[#5DBB63]" />}
                      title="Location-specific crop recommendations"
                      description="Receive tailored suggestions based on your local soil and climate conditions"
                      delay={0.2}
                    />
                    <BenefitItem
                      icon={<ShoppingCart className="h-5 w-5 text-[#5DBB63]" />}
                      title="Blockchain-enabled marketplace"
                      description="Sell your produce directly to consumers with secure, transparent transactions"
                      delay={0.3}
                    />
                    <BenefitItem
                      icon={<MessageCircle className="h-5 w-5 text-[#5DBB63]" />}
                      title="Personalized AI chatbot"
                      description="Get instant answers to your farming questions from our intelligent assistant"
                      delay={0.4}
                    />
                  </ul>
                </TabsContent>

                <TabsContent value="consumers" className="bg-white rounded-xl p-6">
                  <ul className="space-y-4">
                    <BenefitItem
                      icon={<Globe className="h-5 w-5 text-[#5DBB63]" />}
                      title="Social farming platform"
                      description="Connect with farmers and learn about sustainable agricultural practices"
                      delay={0.1}
                    />
                    <BenefitItem
                      icon={<ShoppingCart className="h-5 w-5 text-[#5DBB63]" />}
                      title="Direct purchase marketplace"
                      description="Buy fresh produce directly from farmers with full transparency"
                      delay={0.2}
                    />
                  </ul>
                </TabsContent>
              </AnimatedGradientBorder>
            </Tabs>
          </AnimatedSection>

          <div className="mt-16">
            <AnimatedSection animation="fade-up" delay={0.4}>
              <h3 className="text-2xl font-semibold text-center mb-8 text-[#2E462F]">Key Benefits 🌱</h3>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatedSection animation="fade-up" delay={0.5}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#5DBB63]/20 flex items-center justify-center mr-3 transform transition-transform duration-300 hover:scale-110 hover:bg-[#5DBB63]/30">
                      <Check className="h-4 w-4 text-[#5DBB63]" />
                    </div>
                    <AnimatedText as="h4" animationType="color" className="font-medium text-[#2E462F]">
                      Intuitive User Interfaces
                    </AnimatedText>
                  </div>
                  <p className="text-gray-600 text-sm">Easy-to-use platform designed for farmers of all tech levels</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0.6}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#5DBB63]/20 flex items-center justify-center mr-3 transform transition-transform duration-300 hover:scale-110 hover:bg-[#5DBB63]/30">
                      <Check className="h-4 w-4 text-[#5DBB63]" />
                    </div>
                    <AnimatedText as="h4" animationType="color" className="font-medium text-[#2E462F]">
                      Direct Connectivity
                    </AnimatedText>
                  </div>
                  <p className="text-gray-600 text-sm">Connect producers and consumers without intermediaries</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0.7}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#5DBB63]/20 flex items-center justify-center mr-3 transform transition-transform duration-300 hover:scale-110 hover:bg-[#5DBB63]/30">
                      <Check className="h-4 w-4 text-[#5DBB63]" />
                    </div>
                    <AnimatedText as="h4" animationType="color" className="font-medium text-[#2E462F]">
                      Empowering Knowledge
                    </AnimatedText>
                  </div>
                  <p className="text-gray-600 text-sm">Data-driven insights to improve farming practices</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0.8}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#5DBB63]/20 flex items-center justify-center mr-3 transform transition-transform duration-300 hover:scale-110 hover:bg-[#5DBB63]/30">
                      <Check className="h-4 w-4 text-[#5DBB63]" />
                    </div>
                    <AnimatedText as="h4" animationType="color" className="font-medium text-[#2E462F]">
                      Income Opportunities
                    </AnimatedText>
                  </div>
                  <p className="text-gray-600 text-sm">Increased revenue through direct sales and optimized yields</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Showcase Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#2E462F] relative inline-block mx-auto">
              Explore Agrify's Powerful Features
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#5DBB63] to-[#FFD700]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-up" delay={0.2}>
              <FeatureCard
                icon={<Leaf className="h-6 w-6 text-white" />}
                iconBg="#5DBB63"
                title="Early Disease Detection"
                description="Identify 30+ leaf diseases with 99.4% accuracy. Get detailed analysis & solutions."
                ctaText="Scan Your Crop"
                imageSrc="/images/farmer-with-tablet.png"
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.3}>
              <FeatureCard
                icon={<MapPin className="h-6 w-6 text-white" />}
                iconBg="#FFD700"
                title="Precision Crop Recommendation"
                description="Tailored crop suggestions based on weather, soil data (pH, N, H, K), and location. Fertilizer guidance included."
                ctaText="Get Recommendation"
                imageSrc="/images/crop-field.png"
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.4}>
              <FeatureCard
                icon={<Brain className="h-6 w-6 text-white" />}
                iconBg="#008080"
                title="Your AI Farming Assistant"
                description="Ask Gemini-powered AI anything about farming, fertilizers, or marketplace products."
                ctaText="Chat with Agrify AI"
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.5}>
              <FeatureCard
                icon={<ShoppingCart className="h-6 w-6 text-white" />}
                iconBg="#A0522D"
                title="Agri-Marketplace"
                description="Buy quality seeds, fertilizers, tools. Farmers can sell produce directly. Affordable & transparent."
                ctaText="Explore Market"
                imageSrc="/images/marketplace.png"
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.6}>
              <FeatureCard
                icon={<MessageCircle className="h-6 w-6 text-white" />}
                iconBg="#6A5ACD"
                title="Global Farmer Community"
                description="Connect, share, and learn with farmers, experts, and consumers worldwide."
                ctaText="Join the Conversation"
                imageSrc="/images/community.png"
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.7}>
              <FeatureCard
                icon={<Lock className="h-6 w-6 text-white" />}
                iconBg="#FFA500"
                title="Secure & Simple Access"
                description="Easy Firebase-powered registration and login for a seamless experience."
                ctaText="Create Account"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mobile App Showcase Section */}
      <section className="py-20 bg-[#F5F5DC]/30 relative">
        <ParticleBackground
          particleCount={15}
          particleColors={["#5DBB63", "#2E462F", "#FFD700"]}
          speed={0.2}
          connectionDistance={120}
        />
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#2E462F]">
              Agrify On-the-Go: Our Mobile App
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-right" delay={0.2}>
              <h3 className="text-2xl font-semibold mb-4 text-[#2E462F]">Farm Management in Your Pocket</h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Manage your farm, detect diseases, get recommendations, and connect to the market from anywhere. Our
                mobile app puts the power of Agrify in your hands, whether you're in the field or on the go.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="border-[#2E462F] text-[#2E462F] group">
                    <Image src="/images/app-store.png" alt="App Store" width={24} height={24} className="mr-2" />
                    <span className="relative">
                      Download on the App Store
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#2E462F]/20 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="border-[#2E462F] text-[#2E462F] group">
                    <Image src="/images/google-play.png" alt="Google Play" width={24} height={24} className="mr-2" />
                    <span className="relative">
                      Get it on Google Play
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#2E462F]/20 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={0.4}>
              <div className="flex justify-center gap-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="relative w-[150px] h-[300px] bg-black rounded-3xl overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/app-screenshot-1.png"
                    alt="Agrify Mobile App Screenshot - Disease Detection"
                    width={300}
                    height={600}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="relative w-[150px] h-[300px] bg-black rounded-3xl overflow-hidden shadow-xl mt-8"
                >
                  <Image
                    src="/images/app-screenshot-2.png"
                    alt="Agrify Mobile App Screenshot - Crop Recommendation"
                    width={300}
                    height={600}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 relative text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/images/crop-field.png" alt="Bountiful crop field" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2E462F]/90 to-[#2E462F]/70" />
          <Spotlight className="hidden md:block" fill="#5DBB63" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Farming Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Join thousands of farmers and consumers building a more productive and sustainable agricultural future
              with Agrify.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-[#5DBB63] hover:bg-[#4CA952] text-white group">
                Sign Up for Free Now
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
            <p className="mt-4 text-white/70">No credit card required. Start exploring today!</p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}
