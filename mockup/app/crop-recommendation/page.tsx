// app/crop-recommendation/page.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image" // For crop icons
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Leaf, 
  MapPin, 
  LocateFixed, 
  Upload,
  Disc3,
  ArrowLeft,
  Info,
  Star // For ratings in results
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Progress } from "@/components/ui/progress"

const harvestSeasons = [
  { value: "rbar_rs_kharif_spring", label: "Rbar RS, Kharif, Spring" },
  { value: "rabi", label: "Rabi (Winter)" },
  { value: "kharif", label: "Kharif (Monsoon)" },
  { value: "zaid", label: "Zaid (Summer)" },
];

const priorities = [
  { id: "highYield", label: "High Yield" },
  { id: "droughtResistance", label: "Drought Resistance" },
  { id: "marketDemand", label: "Market Demand" },
];

const initialRecommendedCrops = null; // Set to null initially
const exampleRecommendedCropsData = [ // Renamed to avoid conflict
  { 
    id: 1, 
    name: "Maize / Corn", 
    icon: "/images/crops/maize.png", // Ensure this image exists
    match: 95, 
    reasons: "Good soil compatibility, favorable weather forecast.",
    details: [
      { label: "Est. Yield", value: "7.5 tons/ha" }, // Corrected typo
      { label: "Suitability", value: "High" } // Changed "Test vidh"
    ]
  },
  { 
    id: 2, 
    name: "Wheat", 
    icon: "/images/crops/wheat.png", // Ensure this image exists
    match: 88, 
    reasons: "Tolerant to current soil pH, moderate water needs.",
    details: [
      { label: "Growth Cycle", value: "120 days" }, // Example detail
      { label: "Est. Yield", value: "4.8 tons/ha" }, // Corrected typo
      { label: "Market Price", value: "Medium" } // Example detail
    ]
  },
  { 
    id: 3, 
    name: "Soybean", 
    icon: "/images/crops/soybean.png", // Ensure this image exists
    match: 82, 
    reasons: "Nitrogen-fixing, good for crop rotation.",
    details: [
      { label: "Planting Season", value: "Kharif" },
      { label: "Est. Yield", value: "2.5 tons/ha" },
      { label: "Drought Tolerance", value: "Moderate" }
    ]
  },
];

const exampleAlternativeCropsData = [
    { id: 4, name: "Millet" },
    { id: 5, name: "Sorghum" },
    { id: 6, name: "Barley" },
];


export default function CropRecommendationPage() {
  const [location, setLocation] = useState("");
  const [soilPh, setSoilPh] = useState("");
  const [nitrogen, setNitrogen] = useState("");
  const [phosphorus, setPhosphorus] = useState("");
  const [potassium, setPotassium] = useState("");
  const [harvestSeason, setHarvestSeason] = useState(harvestSeasons[0].value);
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([]);
  
  const [isLoading, setIsLoading] = useState(false);
  // State to hold the fetched/simulated crop recommendations
  const [recommendedCrops, setRecommendedCrops] = useState<typeof exampleRecommendedCropsData | null>(initialRecommendedCrops);
  const [alternativeCrops, setAlternativeCrops] = useState<typeof exampleAlternativeCropsData | null>(null);


  const handlePriorityChange = (priorityId: string) => {
    setSelectedPriorities(prev => 
      prev.includes(priorityId) 
        ? prev.filter(id => id !== priorityId) 
        : [...prev, priorityId]
    );
  };

  const handleGetRecommendations = () => {
    setIsLoading(true);
    setRecommendedCrops(null); // Clear previous results
    setAlternativeCrops(null); // Clear previous results
    console.log("Form data:", { location, soilPh, nitrogen, phosphorus, potassium, harvestSeason, selectedPriorities });
    // Simulate API call
    setTimeout(() => {
      setRecommendedCrops(exampleRecommendedCropsData);
      setAlternativeCrops(exampleAlternativeCropsData);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 text-neutral-200 font-inter">
      <header className="sticky top-0 z-40 w-full bg-gray-950/70 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back to Dashboard</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-7 w-7 text-emerald-400" />
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-2xl mx-auto bg-gray-800 p-8 md:p-10 rounded-xl shadow-2xl border border-gray-700 mb-10" 
        >
            <h1 className="text-3xl font-poppins font-bold text-white mb-8 text-center">Get Crop Recommendations</h1>

            {/* Location Section */}
            <section className="mb-6">
                <h2 className="text-lg font-poppins font-semibold text-neutral-100 mb-3">Location</h2>
                <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                    <div className="relative flex-grow">
                        <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                        <Input 
                            type="text" 
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 h-11 bg-gray-700 border-gray-600 text-white placeholder-neutral-400 focus:ring-emerald-500 focus:border-emerald-500 rounded-md"
                        />
                    </div>
                    <Button variant="outline" className="flex-shrink-0 h-11 px-4 bg-gray-700 border-emerald-500 text-emerald-300 hover:bg-gray-600 hover:border-emerald-400 w-full sm:w-auto flex items-center justify-center gap-2">
                        <LocateFixed className="h-5 w-5" /> Use My Current Location
                    </Button>
                </div>
            </section>

            {/* Soil Data Section */}
            <section className="mb-6">
                <h2 className="text-lg font-poppins font-semibold text-neutral-100 mb-3">Soil Data</h2>
                <Tabs defaultValue="manual" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-gray-700 p-1 rounded-md mb-4">
                        <TabsTrigger value="manual" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-neutral-300 py-1.5 text-sm">Manual Input</TabsTrigger>
                        <TabsTrigger value="upload" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-neutral-300 py-1.5 text-sm">Upload Soil Test Report</TabsTrigger>
                        <TabsTrigger value="sensor" className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-neutral-300 py-1.5 text-sm">Connect Soil Sensor</TabsTrigger>
                    </TabsList>
                    <TabsContent value="manual">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { label: "Soil pH", value: soilPh, setter: setSoilPh, unit: "" },
                                { label: "Nitrogen (N)", value: nitrogen, setter: setNitrogen, unit: "kg/ha" },
                                { label: "Phosphorus (P)", value: phosphorus, setter: setPhosphorus, unit: "kg/ha" },
                                { label: "Potassium (K)", value: potassium, setter: setPotassium, unit: "kg/ha" },
                            ].map(item => (
                                <div key={item.label}>
                                    <Label htmlFor={item.label.toLowerCase().replace(/\s/g, '')} className="block text-xs font-medium text-neutral-400 mb-1">{item.label}</Label>
                                    <div className="relative">
                                        <Input 
                                            type="text" 
                                            id={item.label.toLowerCase().replace(/\s/g, '')}
                                            value={item.value}
                                            onChange={(e) => item.setter(e.target.value)}
                                            className="w-full pr-16 py-2 h-10 bg-white border-neutral-300 text-neutral-900 placeholder-neutral-500 focus:ring-emerald-500 focus:border-emerald-500 rounded-md"
                                        />
                                        {item.unit && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-500 pointer-events-none">{item.unit}</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="upload" className="text-center py-6 text-neutral-400">
                        Upload feature coming soon.
                    </TabsContent>
                    <TabsContent value="sensor" className="text-center py-6 text-neutral-400">
                        Sensor integration coming soon.
                    </TabsContent>
                </Tabs>
            </section>

            <section className="mb-8">
                <h2 className="text-lg font-poppins font-semibold text-neutral-100 mb-3">Other Factors <span className="text-sm text-neutral-500 font-normal">(Optional)</span></h2>
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="harvestSeason" className="block text-xs font-medium text-neutral-400 mb-1">Desired Harvest Season</Label>
                        <Select value={harvestSeason} onValueChange={setHarvestSeason}>
                            <SelectTrigger id="harvestSeason" className="w-full bg-gray-700 border-gray-600 text-white focus:ring-emerald-500 focus:border-emerald-500 h-11 rounded-md">
                                <SelectValue placeholder="Select season" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-700 border-gray-600 text-neutral-200">
                            {harvestSeasons.map(season => (
                                <SelectItem key={season.value} value={season.value} className="hover:bg-gray-600 focus:bg-gray-600 data-[highlighted]:bg-gray-600 data-[state=checked]:bg-emerald-700">
                                {season.label}
                                </SelectItem>
                            ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label className="block text-xs font-medium text-neutral-400 mb-2">Prioritize:</Label>
                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                            {priorities.map(p => (
                                <div key={p.id} className="flex items-center space-x-1.5">
                                    <Checkbox 
                                        id={p.id} 
                                        checked={selectedPriorities.includes(p.id)}
                                        onCheckedChange={() => handlePriorityChange(p.id)}
                                        className="data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600 border-neutral-500 h-4 w-4"
                                    />
                                    <Label htmlFor={p.id} className="text-sm text-neutral-300 font-normal cursor-pointer">{p.label}</Label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Button 
                onClick={handleGetRecommendations} 
                disabled={isLoading}
                className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base rounded-md"
            >
                {isLoading ? "Processing..." : "Get Recommendations"}
            </Button>
        </motion.div>

        {/* Recommended Crops Section - Now included and styled for dark theme */}
        <AnimatePresence>
        {isLoading && (
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center text-center py-10"
            >
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500 mb-4"></div>
                <p className="text-lg font-poppins text-neutral-300">Fetching Recommendations...</p>
            </motion.div>
        )}
        {!isLoading && recommendedCrops && (
            <motion.section 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20}}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mt-0 md:mt-0" // Remove top margin if form is above
            >
                <h2 className="text-2xl font-poppins font-bold text-white mb-6 text-center">Recommended Crops for Your Location</h2>
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial="hidden"
                    animate="show"
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 }}}}
                >
                    {recommendedCrops.map(crop => (
                        <motion.div 
                            key={crop.id}
                            variants={{hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 }}}
                            transition={{ type: "spring", stiffness: 120, damping: 12 }}
                            whileHover={{ y: -6, boxShadow: "0 12px 24px rgba(0, 100, 0, 0.25)" }}
                        >
                        <Card className="bg-gray-800/70 border-gray-700/60 shadow-xl h-full flex flex-col hover:border-emerald-500/70 transition-all duration-200 rounded-lg overflow-hidden">
                            <CardHeader className="flex-row items-center gap-3 p-4 bg-gray-700/50 border-b border-gray-600/50">
                                <Image src={crop.icon} alt={crop.name} width={40} height={40} className="bg-emerald-600/20 p-1.5 rounded-full object-contain" />
                                <CardTitle className="text-md font-poppins font-semibold text-white flex-1 truncate">{crop.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 flex-grow space-y-2.5">
                                <div className="text-right">
                                    <p className="text-sm font-medium text-emerald-400">{crop.match}% Match</p>
                                    <Progress value={crop.match} className="h-1.5 mt-1 bg-gray-700 [&>div]:bg-emerald-500 rounded-full" />
                                </div>
                                <p className="text-xs text-neutral-300 leading-relaxed line-clamp-2">{crop.reasons}</p>
                                <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-neutral-400 border-t border-gray-700/50 pt-2.5 mt-2.5">
                                    {crop.details.map(detail => (
                                        <div key={detail.label} className="truncate">
                                            <span className="text-neutral-500">{detail.label}: </span>{detail.value}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="p-4 border-t border-gray-700/50">
                                <Button variant="outline" className="w-full border-emerald-600 text-emerald-300 hover:bg-emerald-700/50 hover:text-white h-9 text-sm">
                                    <Info className="mr-2 h-3.5 w-3.5" /> View Details
                                </Button>
                            </CardFooter>
                        </Card>
                        </motion.div>
                    ))}
                </motion.div>
                {alternativeCrops && alternativeCrops.length > 0 && (
                    <div className="mt-10">
                        <h3 className="text-xl font-poppins font-semibold text-white mb-4 text-center">Alternative Crops</h3>
                        <motion.div 
                            className="flex flex-wrap justify-center gap-3"
                            initial="hidden"
                            animate="show"
                            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 }}}}
                        >
                            {alternativeCrops.map(altCrop => (
                                <motion.span 
                                    key={altCrop.id} 
                                    className="bg-gray-700/80 text-neutral-300 px-3.5 py-1.5 text-sm rounded-full border border-gray-600/80 shadow-sm"
                                    variants={{hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 }}}
                                    whileHover={{ backgroundColor: "rgb(55 65 81 / 0.9)", borderColor: "rgb(75 85 99 / 0.9)"}} // hover:bg-gray-600/90
                                >
                                    {altCrop.name}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                )}
            </motion.section>
        )}
        </AnimatePresence>

      </main>
    </div>
  );
}