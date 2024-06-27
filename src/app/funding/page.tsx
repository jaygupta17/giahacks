// src/app/complaint/page.tsx
'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CampaignCard } from "./campaign-card";

const CampaignPage = () => {
  const [isOpen,setIsOpen] =useState(false);
  const open=()=>{
    setIsOpen((prev)=>!prev)
  }
  function close(){
    setIsOpen(false)
  }

  return(
    <div className="w-full py-8 gap-y-8 flex flex-col  items-center bg-zinc-900">
        <div className="w-[90%] text-center cursor-pointer font-bold tracking-wide py-4 bg-gradient-to-b hover:from-gray-200 hover:to-gray-400 from-gray-50 to-gray-400 rounded-lg" onClick={open}>Add Campaign</div>    
        <div className={isOpen ? "w-full px-4 md:w-[90%] gap-y-2 justify-center flex-col items-center flex" : "hidden"}>
          <Button onClick={close} className="bg-gray-700">Close</Button>
        {/* <ComplaintForm /> */}
        </div>
        <div className="grid place-content-center gap-y-8 grid-cols-1 w-[90%]">
          <CampaignCard/>
          <CampaignCard/>
          <CampaignCard/>
        </div>
    </div>
  )
};

export default CampaignPage;