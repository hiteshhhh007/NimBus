// app/disease-detection/page.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
// Select component imports removed as it's no longer used
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
    Leaf, 
    UploadCloud, 
    Camera, 
    ArrowLeft, 
    ChevronRight, 
    ExternalLink,
    ScanSearch 
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Dummy data for crop types - REMOVED as Select Crop Type is removed
// const cropTypes = [ ... ];

// Dummy data for disease result - replace with actual logic
const initialDiseaseResult = null;
const exampleDiseaseResult = {
  imageSrc: "/images/leaf-diseased.jpg", // Replace with your image path
  name: "Early Blight Detected",
  confidence: "92%",
  description: "Early blight is a common fungal disease that affects tomatoes and other plants, causing leaf damage and reduced yield.",
  symptoms: [
    "Small brown oil or copper fungleide",
    "Yellowing of the lower leaves",
    "Dark, sunken soats on stems or fruit",
  ],
  solutions: [
    "Apply copper-based fungicides.",
    "Ensure good air circulation.",
    "Remove and destroy infected plant debris.",
  ],
  preventions: [
    "Practice crop rotation.",
    "Use disease-resistant varieties.",
    "Water at the base of plants to keep foliage dry.",
  ],
  learnMoreLink: "#",
};


export default function DiseaseDetectionPage() {
  // selectedCrop state removed
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [diseaseResult, setDiseaseResult] = useState<typeof exampleDiseaseResult | null>(initialDiseaseResult);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedImage(file);
      setImagePreview(URL.createObjectURL(file));
      setDiseaseResult(null); 
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files?.[0];
    if (file && (file.type.startsWith("image/"))) {
      setUploadedImage(file);
      setImagePreview(URL.createObjectURL(file));
      setDiseaseResult(null);
    }
  };

  const handleScan = () => {
    if (!uploadedImage) {
      alert("Please upload an image first.");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setDiseaseResult(exampleDiseaseResult);
      setIsLoading(false);
    }, 2000);
  };

  const handleScanAnother = () => {
    setUploadedImage(null);
    setImagePreview(null);
    setDiseaseResult(null);
  }

  const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-950 via-gray-900 to-gray-950 text-neutral-200 font-inter">
      <header className="sticky top-0 z-40 w-full bg-gray-900/70 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back to Dashboard</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-7 w-7 text-emerald-400" />
            <span className="text-xl font-poppins font-bold text-white">Agrify</span>
          </Link>
           <div className="w-1/4"> {/* Spacer */}
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-gray-800/50 p-6 md:p-8 rounded-xl shadow-2xl border border-gray-700/50"
          >
            <h1 className="text-3xl font-poppins font-bold text-white mb-2">Detect Crop Disease</h1>
            <p className="text-neutral-400 mb-6 text-sm">Upload a clear image of the affected plant leaf.</p>

            <input
              type="file"
              id="imageUpload"
              accept="image/jpeg, image/png, image/webp"
              onChange={handleImageUpload}
              className="hidden"
            />
            <motion.div
              onDrop={handleDrop}
              onDragOver={dragOverHandler}
              onClick={() => document.getElementById('imageUpload')?.click()}
              className="relative w-full h-64 border-2 border-dashed border-gray-600 rounded-lg flex flex-col justify-center items-center text-center p-6 cursor-pointer hover:border-emerald-500 transition-colors bg-gray-700/30 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              {imagePreview ? (
                <Image src={imagePreview} alt="Uploaded preview" layout="fill" objectFit="contain" className="rounded-md" />
              ) : (
                <>
                  <UploadCloud className="h-12 w-12 text-gray-500 mb-3" />
                  <p className="font-semibold text-neutral-300">Drag & Drop Image Here</p>
                  <p className="text-neutral-400 text-sm">or Click to Upload</p>
                  <p className="text-xs text-gray-500 mt-2">JPG, PNG, max 5 MB</p>
                </>
              )}
            </motion.div>
            
            {/* IMPROVED BUTTON STYLING */}
            <Button 
              variant="outline" 
              onClick={() => document.getElementById('imageUpload')?.click()} 
              className="w-full flex items-center justify-center gap-2 mb-6 bg-gray-700/60 border-gray-600 hover:bg-gray-700 text-neutral-200 hover:text-white hover:border-emerald-500 transition-colors h-11"
            >
              <Camera className="h-5 w-5" />
              Or use your device camera
            </Button>

            {/* SELECT CROP TYPE REMOVED
            <div className="mb-6">
              <label htmlFor="cropType" className="block text-sm font-medium text-neutral-300 mb-1">Select Crop Type</label>
              <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                ...
              </Select>
            </div>
            */}

            <Button 
              onClick={handleScan} 
              disabled={isLoading || !uploadedImage}
              className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base"
            >
              {isLoading ? "Scanning..." : "Scan your device Image"}
            </Button>
          </motion.div>

          {/* Right Panel: Results */}
          <AnimatePresence>
            {diseaseResult && (
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-gray-800/50 p-6 md:p-8 rounded-xl shadow-2xl border border-gray-700/50"
              >
                <Card className="bg-transparent border-none shadow-none">
                  <CardContent className="p-0">
                    <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4 shadow-md">
                      <Image src={diseaseResult.imageSrc} alt={diseaseResult.name} layout="fill" objectFit="cover" />
                    </div>
                    <div className="bg-orange-700/30 p-4 rounded-lg mb-4 border border-orange-600/50">
                      <h2 className="text-2xl font-poppins font-bold text-white">{diseaseResult.name}</h2>
                      <p className="text-orange-300 font-medium">Confidence - {diseaseResult.confidence}</p>
                    </div>
                    
                    <p className="text-neutral-300 text-sm mb-6 leading-relaxed">{diseaseResult.description}</p>

                    <Tabs defaultValue="symptoms" className="w-full">
                      <TabsList className="grid w-full grid-cols-3 bg-gray-700/50 p-1 rounded-md mb-4">
                        <TabsTrigger value="symptoms" className="data-[state=active]:bg-emerald-700 data-[state=active]:text-white text-neutral-300 text-xs sm:text-sm">Symptoms</TabsTrigger>
                        <TabsTrigger value="solutions" className="data-[state=active]:bg-emerald-700 data-[state=active]:text-white text-neutral-300 text-xs sm:text-sm">Solutions</TabsTrigger>
                        <TabsTrigger value="preventions" className="data-[state=active]:bg-emerald-700 data-[state=active]:text-white text-neutral-300 text-xs sm:text-sm">Preventions</TabsTrigger>
                      </TabsList>
                      <TabsContent value="symptoms" className="text-sm text-neutral-300 space-y-1.5 list-none pl-0"> {/* Ensure list-none if using motion.li */}
                        {diseaseResult.symptoms.map((symptom, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-start"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <ChevronRight className="h-4 w-4 mr-1.5 mt-0.5 text-emerald-400 flex-shrink-0" /> {symptom}
                          </motion.li>
                        ))}
                      </TabsContent>
                      <TabsContent value="solutions" className="text-sm text-neutral-300 space-y-1.5 list-none pl-0">
                        {diseaseResult.solutions.map((solution, i) => (
                          <motion.li key={i} className="flex items-start" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                            <ChevronRight className="h-4 w-4 mr-1.5 mt-0.5 text-emerald-400 flex-shrink-0" /> {solution}
                          </motion.li>
                        ))}
                      </TabsContent>
                      <TabsContent value="preventions" className="text-sm text-neutral-300 space-y-1.5 list-none pl-0">
                         {diseaseResult.preventions.map((prevention, i) => (
                          <motion.li key={i} className="flex items-start" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                            <ChevronRight className="h-4 w-4 mr-1.5 mt-0.5 text-emerald-400 flex-shrink-0" /> {prevention}
                          </motion.li>
                        ))}
                      </TabsContent>
                    </Tabs>

                    <Link href={diseaseResult.learnMoreLink} target="_blank" className="inline-block text-emerald-400 hover:text-emerald-300 text-sm mt-4 font-medium hover:underline">
                      Learn More About Early Blight <ExternalLink className="inline h-3 w-3 ml-1" />
                    </Link>

                    <Button onClick={handleScanAnother} className="w-full mt-8 h-12 bg-gray-700 hover:bg-gray-600 text-neutral-200 border border-gray-600">
                      Scan Another Image
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
           {!diseaseResult && !isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center justify-center h-full bg-gray-800/30 p-8 rounded-xl border border-gray-700/50"
            >
              <ScanSearch className="h-24 w-24 text-gray-600 mb-4" />
              <p className="text-xl font-poppins text-neutral-400">Upload an image to detect diseases.</p>
              <p className="text-sm text-neutral-500">Results will appear here once an image is scanned.</p>
            </motion.div>
          )}
          {isLoading && (
             <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center h-full bg-gray-800/30 p-8 rounded-xl border border-gray-700/50"
            >
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-emerald-500 mb-4"></div>
                <p className="text-lg font-poppins text-neutral-300">Analyzing Image...</p>
                <p className="text-sm text-neutral-400">Please wait a moment.</p>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}