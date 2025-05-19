// app/dashboard/page.tsx
"use client"

import Link from "next/link"
import Image from "next/image" // For placeholder images
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input" // For the search bar
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card" // For widgets
import { 
  Search, 
  User, 
  Bell, // Keeping Bell for potential future use
  CloudSun, // For weather in new UI
  AlertTriangle, 
  ScanSearch, 
  MessageSquareText, // Icon for Crop Recommendation
  Store, // Marketplace icon
  Users, // Community icon
  PlusCircle, 
  ChevronRight, 
  ExternalLink, 
  CalendarDays, 
  ThermometerSun, 
  Leaf, 
  Settings, // Used as the second user icon in new UI
  Bot, // AI icon
  Briefcase, 
  Newspaper,
  Droplets, // For humidity
  CloudRain, // For chance of rain
  SendHorizonal, // Send icon for AI input
  ThumbsUp, // For community likes
  MessageCircle as MessageIcon // For community replies
} from "lucide-react"
import { motion } from "framer-motion"

// YOUR EXISTING Placeholder data - UNCHANGED
const recentScansData = [
  { id: 1, crop: "Tomato", field: "Field A", scannedOn: "Scanned on May 15, 2025", status: "Early Blight Detected", statusType: "detected", icon: "/images/placeholder-tomato-sick.png" }, // Adjusted to match new UI
  { id: 2, crop: "Corn", field: "Field C", scannedOn: "Scanned on May 14, 2025", status: "Healthy", statusType: "healthy", icon: "/images/placeholder-corn-healthy.png" }, // Adjusted
];

const marketplaceHighlightsData = [ // Adjusted to match new UI
  { id: 1, name: "Organic Fertilizer - Premium", brand: "By Green Earth Co.", price: "$24.99", icon: "/images/placeholder-fertilizer-premium.png" },
  { id: 2, name: "Smart Irrigation System", brand: "By Aquatech", price: "$149.99", icon: "/images/placeholder-irrigation.png" },
];

const communityBuzzData = [ // Adjusted to match new UI
    { id: 1, author: "FarmerMike", time: "2h ago", title: "Tips for organic pest control in tomatoes", snippet: "I've been using a mixture of neem oil and soap that works wonders. Anyone else have natural solutions?", replies: 12, likes: 24, avatar: "/images/avatars/farmer-mike.png"},
    { id: 2, author: "SoilGuru", time: "1d ago", title: "Soil testing results - what do they mean?", snippet: "Just got my soil test back and I'm confused about the phosphorus levels. Can anyone help interpret?", replies: 8, likes: 16, avatar: "/images/avatars/soil-guru.png"},
];

const newsUpdatesData = [ // Adjusted to match new UI
    { id: 1, title: "Agrify Update: Version 2.5 now live!", icon: Leaf, snippet: "Enhanced analytics and new disease detection algorithms are now available.", category: "Update" },
    { id: 2, title: "Agricultural Report: Predicted rainfall", icon: CloudRain, snippet: "Meteorologists predict above-average rainfall for the next month in your region.", category: "Report"},
    { id: 3, title: "Tip: Optimizing water usage during dry spells", icon: Droplets, snippet: "Learn effective techniques for water conservation in your crops during hot weather.", category: "Tip"},
];

const aiPromptsData = [ // From your new UI
  "Best fertilizer for potatoes?",
  "How to improve soil pH?",
  "When to harvest tomatoes?",
];

const quickActionsData = [ // YOUR EXISTING DATA & LINKS - UNCHANGED
  { label: "Scan for Diseases", icon: ScanSearch,  href: "/disease-detection" },
  { label: "Get Crop Recommendation", icon: MessageSquareText, href: "/crop-recommendation" },
  { label: "Ask AI Assistant", icon: Bot, href: "/dashboard" }, // Added AI Assistant here from new UI
  { label: "Go to Marketplace", icon: Store, href: "/marketplace" },
  { label: "Explore Community", icon: Users, href: "/dashboard" }, // Changed icon to Users
];

// YOUR EXISTING Animation variants - UNCHANGED
const fadeInStaggerContainer = { /* ... */ };
const fadeInUp = { /* ... */ };
const scaleIn = { /* ... */ };

export default function DashboardPage() {
  // YOUR EXISTING STATE (if any) - UNCHANGED
  // For example, if you had useState for search term, it would remain.

  return (
    // Overall background and font (as per your previous setup)
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-950 to-gray-950 text-neutral-100 font-inter">
      {/* Top Navigation Bar - STYLED TO MATCH NEW UI */}
      <motion.header 
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-50 w-full bg-[#1A2E29] backdrop-blur-md shadow-lg border-b border-emerald-900/50" // Darker green, subtle border
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-7 w-7 text-emerald-400" />
            <span className="text-2xl font-poppins font-semibold text-white">Agrify</span>
          </Link>
          <div className="relative flex-1 max-w-md mx-4"> {/* Increased max-w slightly */}
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 h-9 bg-[#2C3A37] border-[#3A4B46] text-neutral-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 placeholder:text-neutral-500 font-inter text-sm"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
          </div>
          <div className="flex items-center gap-3">
            <Bell className="h-5 w-5 text-neutral-300 hover:text-white cursor-pointer transition-colors" />
            <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-semibold text-sm cursor-pointer">
              {/* Placeholder for User Avatar/Initial */}
              A
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Dashboard Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Welcome Section - STYLED TO MATCH NEW UI */}
        <motion.div 
            variants={fadeInUp} initial="hidden" animate="show"
            className="mb-6"
        >
            <h1 className="text-2xl md:text-3xl font-poppins font-semibold text-white">Welcome back, John Doe!</h1>
            <p className="text-sm text-neutral-400 font-inter">Here's what's happening with your farm today</p>
        </motion.div>

        {/* Top Row Info Cards - STYLED TO MATCH NEW UI */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6"
          variants={fadeInStaggerContainer} initial="hidden" animate="show"
        >
          {/* Active Disease Alerts Card */}
          <motion.div variants={fadeInUp}>
            <Card className="bg-[#1E3630]/80 border border-emerald-800/60 shadow-lg p-4 h-full">
              <CardContent className="p-0">
                <p className="text-xs text-neutral-300 mb-0.5">Active Disease Alerts</p>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-poppins font-bold text-white">2</p>
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                </div>
                <Link href="#" className="text-xs text-emerald-400 hover:underline mt-1 inline-block">View alerts</Link>
              </CardContent>
            </Card>
          </motion.div>
          {/* New Messages Card */}
          <motion.div variants={fadeInUp}>
            <Card className="bg-[#1E3630]/80 border border-emerald-800/60 shadow-lg p-4 h-full">
              <CardContent className="p-0">
                <p className="text-xs text-neutral-300 mb-0.5">New Messages</p>
                 <div className="flex items-center justify-between">
                  <p className="text-3xl font-poppins font-bold text-white">3</p>
                  <MessageIcon className="h-5 w-5 text-blue-400" />
                </div>
                <Link href="#" className="text-xs text-emerald-400 hover:underline mt-1 inline-block">View messages</Link>
              </CardContent>
            </Card>
          </motion.div>
          {/* Soil Moisture Card */}
          <motion.div variants={fadeInUp}>
             <Card className="bg-[#1E3630]/80 border border-emerald-800/60 shadow-lg p-4 h-full">
              <CardContent className="p-0">
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
                    <span className="flex items-center"><ThermometerSun className="h-3 w-3 mr-1 text-orange-400"/>24°C</span>
                    <span className="flex items-center"><CloudRain className="h-3 w-3 mr-1 text-sky-400"/>10% chance of rain</span>
                    <span className="flex items-center"><Droplets className="h-3 w-3 mr-1 text-blue-400"/>65% humidity</span>
                </div>
                <p className="text-xs text-neutral-300 mb-0.5">Soil Moisture</p>
                 <div className="flex items-center justify-between">
                  <p className="text-xl font-poppins font-bold text-emerald-400">Good</p>
                  <Leaf className="h-5 w-5 text-emerald-500" /> {/* Placeholder for graph/dial icon */}
                </div>
                <Link href="#" className="text-xs text-emerald-400 hover:underline mt-1 inline-block">View details</Link>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Quick Access Section - STYLED TO MATCH NEW UI */}
        <motion.div 
            variants={fadeInUp} initial="hidden" animate="show"
            className="mb-8"
        >
            <h2 className="text-xl font-poppins font-semibold text-white mb-3">Quick Access</h2>
            <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3" // 5 columns for quick access
            variants={fadeInStaggerContainer} initial="hidden" animate="show"
            >
            {quickActionsData.map((action) => ( // Removed index from key if label is unique
                <motion.div key={action.label} variants={scaleIn} whileHover={{ scale: 1.03, y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href={action.href} passHref>
                    <Button variant="default" className="w-full h-24 md:h-28 text-xs md:text-sm flex flex-col items-center justify-center gap-1.5 bg-[#1E3630]/90 hover:bg-[#27443C] border border-emerald-800/50 text-neutral-200 shadow-md hover:border-emerald-700 transition-all font-inter p-2">
                        <action.icon className="h-6 w-6 md:h-7 md:w-7 mb-1 text-emerald-400" />
                        <span className="text-center leading-tight">{action.label}</span>
                    </Button>
                </Link>
                </motion.div>
            ))}
            </motion.div>
        </motion.div>
        
        {/* Main Grid for Widgets - STYLED TO MATCH NEW UI */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" // Adjusted gap
          variants={fadeInStaggerContainer} initial="hidden" animate="show"
        >
          {/* Recent Disease Scans */}
          <motion.div variants={fadeInUp}>
            <Card className="bg-[#1E3630]/90 border border-emerald-800/50 shadow-lg h-full flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4 px-4">
                <CardTitle className="text-base font-poppins font-semibold text-white">Recent Disease Scans</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-3 space-y-2 flex-grow">
                {recentScansData.map((scan, idx) => (
                  <motion.div 
                    key={scan.id} 
                    className="flex items-center gap-3 p-2.5 rounded-md bg-[#2C3A37]/70 border border-emerald-900/40"
                    custom={idx}
                    initial={{ opacity: 0, x: -15 }}
                    animate={(i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.1 + 0.2, ease: "easeOut"} })}
                  >
                    <Image src={scan.icon} alt={scan.crop} width={36} height={36} className="rounded object-cover flex-shrink-0" />
                    <div className="flex-grow">
                      <p className="font-inter text-sm font-medium text-white truncate">{scan.crop} - {scan.field}</p>
                      <p className="text-xs text-neutral-400 font-inter">{scan.scannedOn}</p>
                    </div>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${scan.statusType === "detected" ? "bg-red-700/50 text-red-300 border border-red-600/70" : "bg-green-700/50 text-green-300 border border-green-600/70"}`}>
                      {scan.status.replace(" Detected", "")} {/* Shorten status text */}
                    </span>
                  </motion.div>
                ))}
              </CardContent>
              <CardFooter className="px-4 pb-4 pt-2">
                <Button variant="outline" className="w-full h-9 text-sm border-emerald-700 text-emerald-300 hover:bg-emerald-800/50 hover:text-white font-inter">
                   View All Scans
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Latest Crop Recommendation */}
          <motion.div variants={fadeInUp}>
             <Card className="bg-[#1E3630]/90 border border-emerald-800/50 shadow-lg h-full flex flex-col">
                <CardHeader className="pb-2 pt-4 px-4">
                    <CardTitle className="text-base font-poppins font-semibold text-white">Latest Crop Recommendation</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-3 space-y-2 flex-grow">
                    <div className="flex items-start gap-2">
                        <Leaf className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0"/>
                        <p className="text-xs text-neutral-300">For Your Location:</p>
                    </div>
                    <p className="text-emerald-400 font-semibold text-md">Consider planting Maize this season</p>
                    <p className="text-xs text-neutral-400">Based on soil moisture & upcoming weather patterns</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                        {["High Yield Potential", "Water Efficient", "Market Demand"].map(tag => (
                            <span key={tag} className="text-xs bg-emerald-700/60 text-emerald-200 px-2 py-0.5 rounded-full border border-emerald-600/70">{tag}</span>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="px-4 pb-4 pt-2">
                    <Button className="w-full h-9 text-sm bg-emerald-600 hover:bg-emerald-700 text-white font-inter">Get Detailed Report</Button>
                </CardFooter>
              </Card>
          </motion.div>

          {/* Agrify AI Assistant */}
          <motion.div variants={fadeInUp}>
            <Card className="bg-[#1E3630]/90 border border-emerald-800/50 shadow-lg h-full flex flex-col">
              <CardHeader className="pb-2 pt-4 px-4">
                <CardTitle className="text-base font-poppins font-semibold text-white">Agrify AI Assistant</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 px-4 pb-3 flex-grow">
                {aiPromptsData.map((prompt) => (
                  <button 
                    key={prompt} 
                    className="w-full text-left p-2.5 text-xs bg-[#2C3A37]/80 hover:bg-[#354944] rounded-md text-neutral-300 flex justify-between items-center transition-colors font-inter"
                  >
                    {prompt}
                    <ChevronRight className="h-3.5 w-3.5 text-neutral-400 flex-shrink-0" />
                  </button>
                ))}
                <p className="text-xs text-neutral-400 pt-1">Ask me anything about farming, crop management, or agricultural practices.</p>
              </CardContent>
              <CardFooter className="px-4 pb-4 pt-1">
                <div className="relative w-full">
                    <Input 
                        type="text" 
                        placeholder="Ask anything about farming..." 
                        className="bg-[#2C3A37] border-[#3A4B46] text-neutral-200 placeholder-neutral-500 focus:ring-emerald-500 focus:border-emerald-500 font-inter h-9 text-sm pr-9"
                    />
                    <SendHorizonal className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-400 cursor-pointer hover:text-emerald-300"/>
                </div>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Marketplace Highlights */}
           <motion.div variants={fadeInUp}>
            <Card className="bg-[#1E3630]/90 border border-emerald-800/50 shadow-lg h-full flex flex-col">
              <CardHeader className="pb-2 pt-4 px-4">
                  <CardTitle className="text-base font-poppins font-semibold text-white">Marketplace Highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 px-4 pb-3 flex-grow">
                  {marketplaceHighlightsData.map((item) => (
                  <motion.div 
                    key={item.id} 
                    className="flex items-center justify-between p-2.5 rounded-md bg-[#2C3A37]/70 border border-emerald-900/40"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: item.id * 0.1 + 0.3, ease: "easeOut" }}
                  >
                      <div className="flex items-center gap-3">
                      <Image src={item.icon} alt={item.name} width={36} height={36} className="rounded object-cover flex-shrink-0" />
                      <div>
                          <p className="font-inter text-sm font-medium text-white">{item.name}</p>
                          <p className="text-xs text-neutral-400 font-inter">{item.brand}</p>
                      </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <p className="text-sm text-emerald-400 font-semibold">{item.price}</p>
                        <Button variant="ghost" size="sm" className="h-auto p-0 text-xs text-emerald-400 hover:text-emerald-300 hover:bg-transparent mt-0.5">View</Button>
                      </div>
                  </motion.div>
                  ))}
              </CardContent>
              <CardFooter className="px-4 pb-4 pt-2">
                <Link href="/marketplace" className="w-full">
                  <Button variant="outline" className="w-full h-9 text-sm border-emerald-700 text-emerald-300 hover:bg-emerald-800/50 hover:text-white font-inter">
                            Browse Marketplace
                  </Button>
                </Link>
              </CardFooter>
              </Card>
            </motion.div>

          {/* Community Buzz */}
            <motion.div variants={fadeInUp}>
            <Card className="bg-[#1E3630]/90 border border-emerald-800/50 shadow-lg h-full flex flex-col">
              <CardHeader className="pb-2 pt-4 px-4">
                  <CardTitle className="text-base font-poppins font-semibold text-white">Community Buzz</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 px-4 pb-3 flex-grow">
                  {communityBuzzData.map((buzz, idx) => (
                      <motion.div 
                        key={buzz.id} 
                        className="p-2.5 rounded-md bg-[#2C3A37]/70 border border-emerald-900/40"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 + 0.35, ease: "easeOut" }}
                      >
                          <div className="flex items-center gap-2 mb-1">
                            {/* Replace with actual avatar image if available */}
                            <div className="w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                                {buzz.author.substring(0,1)}
                            </div>
                            <span className="text-xs text-neutral-400">{buzz.author}</span>
                            <span className="text-xs text-neutral-500">• {buzz.time}</span>
                          </div>
                          <p className="font-inter text-sm font-medium text-white hover:text-emerald-300 cursor-pointer mb-1 line-clamp-2">{buzz.title}</p>
                          <p className="text-xs text-neutral-400 line-clamp-2 mb-1.5">{buzz.snippet}</p>
                          <div className="flex items-center gap-3 text-xs text-neutral-400">
                            <span className="flex items-center gap-1"><MessageIcon className="h-3 w-3"/>{buzz.replies} replies</span>
                            <span className="flex items-center gap-1"><ThumbsUp className="h-3 w-3"/>{buzz.likes} likes</span>
                          </div>
                      </motion.div>
                  ))}
              </CardContent>
               <CardFooter className="px-4 pb-4 pt-2">
                  <Button variant="outline" className="w-full h-9 text-sm border-emerald-700 text-emerald-300 hover:bg-emerald-800/50 hover:text-white font-inter">
                      Go to Community
                  </Button>
              </CardFooter>
              </Card>
            </motion.div>

          {/* Latest News & Updates */}
           <motion.div variants={fadeInUp}>
            <Card className="bg-[#1E3630]/90 border border-emerald-800/50 shadow-lg h-full flex flex-col">
              <CardHeader className="pb-2 pt-4 px-4">
                  <CardTitle className="text-base font-poppins font-semibold text-white">Latest News & Updates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 px-4 pb-3 flex-grow">
                  {newsUpdatesData.map((news, idx) => (
                      <motion.div 
                        key={news.id} 
                        className="flex items-start gap-3 p-2.5 rounded-md bg-[#2C3A37]/70 border border-emerald-900/40"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 + 0.4, ease: "easeOut" }}
                        >
                          <news.icon className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-inter text-sm font-medium text-white mb-0.5">{news.title}</p>
                            <p className="text-xs text-neutral-400 mb-1 line-clamp-2">{news.snippet}</p>
                            <Link href="#" className="text-xs text-emerald-400 hover:underline">Read more ›</Link>
                          </div>
                      </motion.div>
                  ))}
              </CardContent>
               <CardFooter className="px-4 pb-4 pt-2">
                  <Button variant="outline" className="w-full h-9 text-sm border-emerald-700 text-emerald-300 hover:bg-emerald-800/50 hover:text-white font-inter">
                      View All Updates
                  </Button>
              </CardFooter>
              </Card>
            </motion.div>
        </motion.div>
      </main>
    </div>
  )
}