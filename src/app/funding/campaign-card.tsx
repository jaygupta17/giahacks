"use client"
import { Button } from "@/components/ui/button"
import { Web3Context } from "@/context/Web3Context"
import { Close } from "@radix-ui/react-toast"
import { Cross, CrossIcon, ReplyIcon, ShieldCloseIcon, Undo2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Suspense, useContext, useState, useTransition } from "react"

export const CampaignCard = ({title,pId,owner,amountCollected,descr,target}:{title:string,pId:any,owner:any,amountCollected:any,descr:string,target:string}) => {
    const [open , setopen] = useState(false)
    const {donate,isPending} = useContext(Web3Context)
    const [value,setValue] = useState<any>()
    const donatemoney = () => {

            donate(pId,value).then((res:any)=>res)
    }
    return(
        <Suspense fallback={<p>Loading</p>}>

        <div className="w-full gap-y-3 flex flex-col px-4 py-4 bg-white/10 hover:bg-white/5 border border-white/80">
        <div className="flex self-start items-center gap-4">
            <Image className="w-10 h-10 rounded-full" width={20} height={20} src="/adminuser/back.jpg" alt="bnone" />
            <div className="font-medium text-white">
                <div>Campaign</div>
                <div className="text-sm text-gray-400">{owner}</div>
            </div>
        </div>
        <div className="text-white/80 font-bold text-2xl">{title}</div>
        <div className="text-white/80 font-normal">
           {descr}
        </div>
        <div className="flex flex-col gap-y-1">
            <p className="text-white/90 tracking-wide font-semibold">Target:</p>
            <div className="flex text-white/60 tracking-wide font-bold flex-wrap gap-2">
                {target}
            </div>
            <p className="text-white/90 tracking-wide font-semibold">Collected:</p>
            <div className="flex text-white/60 tracking-wide font-bold flex-wrap gap-2">
                {amountCollected}
            </div>
        </div>
        <div>
            {open ?<div className="flex gapy-x-2"> <input className="placeholder:italic placeholder:text-slate-700 block bg-white/70 w-full border border-slate-300 rounded-md p-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Reply..." type="text"/>
            </div > : <div className="flex text-white">Reply &nbsp;  <ReplyIcon onClick={()=>setopen(true)} className="text-white cursor-pointer size-8"/></div>}
        </div>
        <div className="grid place-content-center gap-x-4 grid-cols-2">
            <input type="text" className="dark:text-white" disabled={isPending} onChange={(e)=>setValue(e.target.value)} />
        <Button disabled={isPending} className="hover:bg-indigo-500 bg-indigo-600" onClick={donatemoney}>{isPending ? "Loading" : "Fund"}</Button>
        </div>
</div>
</Suspense>
    )
}