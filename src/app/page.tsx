import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-7xl">Build Your Resume</h1>


      <motion.button whileTap={{ scale: 0.9 }}>
      <Button size={"lg"} className="text-lg" asChild>
        <Link href={"/buildResume"}>Start Building <ArrowRight/></Link>
        
      </Button>
      </motion.button>
      
    </div>
  );
}
