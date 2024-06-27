import { Button } from "@/components/ui/button"
import { Close } from "@radix-ui/react-toast"
import { Cross, CrossIcon, ReplyIcon, ShieldCloseIcon, Undo2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export const CampaignCard = () => {
    const [open , setopen] = useState(false)
    return(
        <div className="w-full gap-y-3 flex flex-col px-4 py-4 bg-white/10 hover:bg-white/5 border border-white/80">
        <div className="flex self-start items-center gap-4">
            <Image className="w-10 h-10 rounded-full" width={20} height={20} src="/adminuser/back.jpg" alt="bnone" />
            <div className="font-medium text-white">
                <div>Jese Leos</div>
                <div className="text-sm text-gray-400">Joined in August 2014</div>
            </div>
        </div>
        <div className="text-white/80 font-bold text-2xl">Funding for Heart Transplant</div>
        <div className="text-white/80 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus adipisci deleniti expedita magni tenetur omnis mollitia atque, voluptates similique nesciunt unde provident, illum impedit consequuntur corporis ullam voluptatem a suscipit et reiciendis.
        </div>
        <div className="flex flex-col gap-y-1">
            <p className="text-white/90 tracking-wide font-semibold">Attachements:</p>
            <div className="flex text-white/60 flex-wrap gap-2">
                Update this to show files
            </div>
        </div>
        <div>
            {open ?<div className="flex gapy-x-2"> <input className="placeholder:italic placeholder:text-slate-700 block bg-white/70 w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Reply..." type="text"/>
            </div > : <div className="flex text-white">Reply &nbsp;  <ReplyIcon onClick={()=>setopen(true)} className="text-white cursor-pointer size-8"/></div>}
        </div>
        <div className="grid place-content-center gap-x-4 grid-cols-2">
        <Button className="bg-indigo-600">Fund</Button>
        <Button variant="outline" className="bg-transparent text-white">View</Button>
        </div>
</div>
    )
}