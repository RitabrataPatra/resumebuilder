"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import {UploadIcon } from "lucide-react";
import Link from "next/link";
import * as motion from "motion/react-client";


const Page = () => {
  const inputFileRef = React.useRef<HTMLInputElement>(null);
  const[uploadedFile, setUploadedFile] = useState<File|null>(null);
  const handleButtonClick = ()=>{
    inputFileRef.current?.click();
  }
  const handleFileChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
    if(e.target.files === null) return ;
    setUploadedFile(e.target.files[0]);
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
    <h1 className="text-7xl">Upload Your Resume</h1>


    <div className='flex flex-col gap-2 text-center'> 
    

    {
      uploadedFile ? (
        <>
        <div>
          <p className='text-sm'>Your Uploaded File : {uploadedFile.name}</p>
          <p className='text-sm'>Your Uploaded File Size : {Math.round((uploadedFile.size/1024))} KB </p>
        </div>

        <Button size={"lg"} className="text-lg" onClick={()=>setUploadedFile(null)}>
          Reset
        </Button></>
        
      ) : (
        <>
        <motion.button whileTap={{ scale: 0.9 }}>
    <Button size={"lg"} className="text-lg" asChild onClick={handleButtonClick} disabled={uploadedFile !== null}>
      <span>Upload Resume <UploadIcon/></span>
    </Button>
    </motion.button>

    <input ref={inputFileRef} type="file" className='hidden' accept='.pdf' onChange={handleFileChange}/></>
      )
    }

    <p className='text-xs'><span className='text-red-600'>Note - </span>Your resume must be in (.pdf ) format.</p>
    </div>
    
    
  </div>
  )
}

export default Page