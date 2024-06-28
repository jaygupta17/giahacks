"use client"

import Web3Modal from "web3modal";
import ethers from "ethers";
import { contractAddress,abi } from "./constants";
import { createContext, useState } from "react";


const fetchContract = (signerOrProvider) => {
    return new ethers.Contract(contractAddress,abi,signerOrProvider);
}

export const Web3Context = createContext();
export const Web3Provider = ({children}) => {
    const [address,setAddress]  = useState(null)
    const createCampaign = async(campaign) => {
        const {title,descr,target,deadline} = campaign;
        const web3modal = new Web3Modal();
        const connection =await web3modal.connect();
        const provider = new ethers.BrowserProvider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        try {
            const transaction = await contract.createCampaign(address,title,descr,ethers.utils.parseUnits(target,18),new Date(deadline).getTime());
           await transaction.wait();
           console.log("success: ",transaction);
        } catch (error) {
            console.log(error);
        }
    }

    const getCampaigns = async() => {
        const provider
    }

}