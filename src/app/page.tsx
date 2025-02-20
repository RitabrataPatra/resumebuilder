import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-7xl">Build Your Resume</h1>

      <Button size={"lg"} className="text-lg" asChild>
        <Link href={"/buildResume"}>Start Building <ArrowRight/></Link>
        
      </Button>
    </div>
  );
}
