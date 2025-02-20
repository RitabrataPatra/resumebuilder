import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  FolderSearchIcon,
  TextSelectionIcon,
  Upload,
} from "lucide-react";
import Link from "next/link";
import React from "react";
// import { motion } from "motion/react"
import * as motion from "motion/react-client";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-7xl">So, do you want to...</h1>

      <div className="flex flex-row gap-4 justify-center items-center">
        <motion.button
          whileTap={{ scale: 0.9 }}>
        <Button size={"lg"} className="text-lg" asChild>
          <Link href={"/templates"}>
            Choose Template
            <FolderSearchIcon />
          </Link>
        </Button>
        </motion.button>
        
        or
        <motion.button
          whileTap={{ scale: 0.9 }}
        >
          <Button size={"lg"} className="text-lg" asChild>
          <Link href={"/existingResume"}>
            Change Existing Resume
            <Upload />
          </Link>
          </Button>
         
        </motion.button>
      </div>
    </div>
  );
};

export default page;
