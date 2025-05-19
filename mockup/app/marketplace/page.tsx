// app/marketplace/page.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { 
  Leaf, 
  Search, 
  Settings2, // Filter icon
  SlidersHorizontal, // Another option for filter icon
  ShoppingCart, 
  ChevronDown,
  Star // For ratings
} from "lucide-react"
import { motion } from "framer-motion"

// Dummy Data - Replace with actual data fetching
const categories = [
  { value: "all", label: "All Categories" },
  { value: "seeds", label: "Seeds" },
  { value: "fertilizers", label: "Fertilizers" },
  { value: "tools", label: "Tools" },
  { value: "produce", label: "Fresh Produce" },
];

const locations = [
  { value: "any", label: "Any Location" },
  { value: "local", label: "Local (within 50km)" },
  { value: "state", label: "My State" },
];

const priceRanges = [
  { value: "any", label: "Any Price" },
  { value: "0-25", label: "$0 - $25" },
  { value: "25-100", label: "$25 - $100" },
  { value: "100+", label: "$100+" },
];

const organicOptions = [ // For the horizontal filter
    { value: "any", label: "Organic (Any)"},
    { value: "yes", label: "Certified Organic"},
    { value: "no", label: "Conventional"}
];

const sortOptions = [
  { value: "relevance", label: "Relevance" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "newest", label: "Newest Arrivals" },
];

const products = [
  { id: 1, name: "Tomato seeds", brand: "GreenGrow", price: "$15", image: "/images/marketplace/tomato-seeds.jpg", category: "seeds" },
  { id: 2, name: "Nitrogen fertilizer", brand: "AgroSolutions", price: "$36", image: "/images/marketplace/nitrogen-fertilizer.jpg", category: "fertilizers" },
  { id: 3, name: "Garden shovel", brand: "FarmTools", price: "$18", image: "/images/marketplace/garden-shovel.jpg", category: "tools" },
  { id: 4, name: "Roma tomatoes", farm: "Sunny Fields Farm", price: "$2.00/lb", image: "/images/marketplace/roma-tomatoes.jpg", category: "produce" },
  { id: 5, name: "Corn seeds", brand: "HarvestCo", price: "$12", image: "/images/marketplace/corn-seeds.jpg", category: "seeds" },
  { id: 6, name: "Potting mix", brand: "Evergreen Supply", price: "$30", image: "/images/marketplace/potting-mix.jpg", category: "fertilizers" },
  { id: 7, name: "Pruning shears", brand: "RuidEquip", price: "$14", image: "/images/marketplace/pruning-shears.jpg", category: "tools", action: "details", rating: 4 },
  { id: 8, name: "Organic carrots", farm: "Maode Matook Farm", price: "$2.30/bunch", image: "/images/marketplace/organic-carrots.jpg", category: "produce", action: "details", rating: 5 },
  { id: 9, name: "Watering Can", brand: "GreenThum Tools", price: "$24", image: "/images/marketplace/watering-can.jpg", category: "tools" },
  { id: 10, name: "Granular fertilizer", brand: "CropCare", price: "$20", image: "/images/marketplace/granular-fertilizer.jpg", category: "fertilizers" },
  { id: 11, name: "Hand trowel", brand: "TerrsCutt", price: "$10", image: "/images/marketplace/hand-trowel.jpg", category: "tools" },
  { id: 12, name: "Red apples", farm: "Orchana Fresh", price: "$6.00/kg", image: "/images/marketplace/red-apples.jpg", category: "produce", action: "details", rating: 5  },
];

const FilterSelect = ({ label, options, defaultValue, className }: { label: string, options: {value: string, label: string}[], defaultValue?: string, className?: string }) => (
  <div className={className}>
    {/* <Label className="text-xs text-neutral-400 mb-1 block">{label}</Label> */}
    <Select defaultValue={defaultValue || options[0].value}>
      <SelectTrigger className="w-full h-10 bg-gray-700/50 border-gray-600 text-neutral-200 focus:ring-emerald-500 focus:border-emerald-500 text-sm">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent className="bg-gray-800 border-gray-700 text-neutral-200">
        {options.map(option => (
          <SelectItem key={option.value} value={option.value} className="hover:bg-gray-700 focus:bg-gray-700">
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

export default function MarketplacePage() {
  const [viewMode, setViewMode] = useState<"buy" | "sell">("buy");
  const [isOrganic, setIsOrganic] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Add state for filters if you want them to be interactive
  // For now, products array is static

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-950 via-gray-900 to-gray-900 text-neutral-100 font-inter">
      {/* Main Header */}
      <header className="sticky top-0 z-40 w-full bg-gray-900/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Leaf className="h-7 w-7 text-emerald-400" />
            <span className="text-xl font-poppins font-bold text-white">Agrify</span>
          </Link>
          <div className="relative flex-grow max-w-lg">
            <Input
              type="search"
              placeholder="Search products (seeds, tools, fertilizer...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 h-10 bg-gray-800 border-gray-700 text-neutral-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 placeholder:text-neutral-500 text-sm"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
          </div>
          <div className="flex items-center gap-2">
            <Button 
              onClick={() => setViewMode("buy")} 
              variant={viewMode === "buy" ? "default" : "outline"}
              className={`h-9 px-4 text-sm ${viewMode === 'buy' ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-gray-700 border-gray-600 text-neutral-300 hover:bg-gray-600'}`}
            >
              Buy
            </Button>
            <Button 
              onClick={() => setViewMode("sell")} 
              variant={viewMode === "sell" ? "default" : "outline"}
              className={`h-9 px-4 text-sm ${viewMode === 'sell' ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-gray-700 border-gray-600 text-neutral-300 hover:bg-gray-600'}`}
            >
              Sell
            </Button>
            <Button variant="outline" size="icon" className="h-9 w-9 bg-gray-700 border-gray-600 text-neutral-300 hover:bg-gray-600 hover:text-emerald-400">
              <SlidersHorizontal className="h-4 w-4" />
              <span className="sr-only">Filters</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Marketplace Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-poppins font-bold text-white">Marketplace</h1>
            {/* Horizontal Filters for larger screens */}
            <div className="hidden lg:flex items-center gap-3">
                <FilterSelect label="Categories" options={categories} className="w-40" />
                <FilterSelect label="Location" options={locations} className="w-36" />
                <FilterSelect label="Price Range" options={priceRanges} className="w-36" />
                <FilterSelect label="Organic" options={organicOptions} className="w-40" />
                <FilterSelect label="Sort" options={sortOptions} defaultValue="relevance" className="w-36" />
            </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters for smaller screens or persistent */}
          <motion.aside 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="w-full lg:w-1/4 xl:w-1/5 bg-gray-800/50 p-5 rounded-lg shadow-lg border border-gray-700/60 self-start sticky top-20" // Added sticky top
          >
            <h3 className="text-lg font-poppins font-semibold text-white mb-4">Filters</h3>
            <div className="space-y-4">
              <FilterSelect label="Categories" options={categories} />
              <FilterSelect label="Location" options={locations} />
              <FilterSelect label="Price Range" options={priceRanges} />
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox 
                    id="organic" 
                    checked={isOrganic} 
                    onCheckedChange={(checked) => setIsOrganic(checked as boolean)}
                    className="data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600 border-gray-500"
                />
                <Label htmlFor="organic" className="text-sm text-neutral-300 cursor-pointer">Organic Only</Label>
              </div>
            </div>
          </motion.aside>

          {/* Product Grid */}
          <motion.section 
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5"
            initial="hidden"
            animate="show"
            variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07 }}
            }}
          >
            {products.map((product, idx) => (
              <motion.div 
                key={product.id}
                variants={{hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 }}}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
              >
                <Card className="bg-gray-800/70 border-gray-700/60 shadow-lg hover:shadow-emerald-700/20 overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-emerald-600/70">
                  <div className="relative w-full h-48 bg-gray-700">
                    <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" />
                  </div>
                  <CardContent className="p-4 flex-grow">
                    <h3 className="text-md font-poppins font-semibold text-white mb-1 truncate">{product.name}</h3>
                    <p className="text-xs text-neutral-400 mb-2">{product.brand || product.farm}</p>
                    <p className="text-lg font-semibold text-emerald-400 mb-3">{product.price}</p>
                    {product.rating && (
                        <div className="flex items-center mb-2">
                            {Array(5).fill(0).map((_, i) => (
                                <Star key={i} className={`h-4 w-4 ${i < product.rating! ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} />
                            ))}
                        </div>
                    )}
                  </CardContent>
                  <CardFooter className="p-4 border-t border-gray-700/50">
                    {product.action === "details" ? (
                         <Button variant="outline" className="w-full border-emerald-600 text-emerald-300 hover:bg-emerald-700/50 hover:text-white">View Details</Button>
                    ) : (
                         <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                        </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.section>
        </div>
      </main>
    </div>
  );
}