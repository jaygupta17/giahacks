"use client"

import Web3Modal from "web3modal";
import {ethers} from "ethers";
import { contractAddress,abi } from "./constants";
import { createContext, useEffect, useState } from "react";
import { date } from "zod";


const fetchContract = (signerOrProvider) => {
    return new ethers.Contract(contractAddress,abi,signerOrProvider);
}

export const Web3Context = createContext();
export const Web3Provider = ({children}) => {
    const [address,setAddress]  = useState("")
    const [isPending,setIsPending] = useState()
    const createCampaign = async(campaign) => {
        const {title,descr,target} = campaign;
        const web3modal = new Web3Modal();
        const connection =await web3modal.connect();
        const provider = new ethers.BrowserProvider(connection);
        const signer =await provider.getSigner();
        const contract = fetchContract(signer);
        const targetInWei = ethers.parseUnits(target, 18); 
        const addressObject = ethers.getAddress(address);             
        try {
            const transaction = await contract.createCampaign(addressObject,title,descr,targetInWei);
           await transaction.wait();
           console.log("success: ",transaction);
        } catch (error) {
            console.log(error);
        }
    }

    const getCampaigns = async() => {
        const web3modal = new Web3Modal();
        const connection =await web3modal.connect();
        const provider = new ethers.BrowserProvider(connection);
        const contract = fetchContract(provider);
        const campaigns = await contract.getCampaigns();
        const parsedCampaigns = campaigns.map((camp,i)=>({
            owner:camp.owner,
            title: camp.title,
            descr:camp.descr,
            target: ethers.formatEther(camp.target.toString()),
            amountCollected:ethers.formatEther(camp.amountCollected.toString()),
            pId:i
        }))
        return parsedCampaigns
    }

    const getUserCampaigns = async ( ) => {
        const web3modal = new Web3Modal();
        const connection =await web3modal.connect();
        const provider = new ethers.BrowserProvider(connection);      
        const contract = fetchContract(provider);
        const campaigns = await contract.getCampaigns();
        const accounts = await window.ethereum.request({
            method:"eth_accounts",
        })
        const currentUser = accounts[0];
        const filterCampaigns = campaigns.filter((camp)=>!camp.owner==address)
        const userData = filterCampaigns.map((camp,i)=>({
            owner:camp.owner,
            title: camp.title,
            descr:camp.descr,
            target: ethers.formatEther(camp.target.toString()),
            amountCollected:ethers.formatEther(camp.amountCollected.toString()),
            pId:i
        }))
        return userData;
    }

    const donate = async (pId,amount)=>{
        setIsPending(true)
        const web3modal = new Web3Modal;
        const connection =await web3modal.connect();
        const provider = new ethers.BrowserProvider(connection);
        const signer =await provider.getSigner();
        const contract = fetchContract(signer);
        try {
            const transaction = await contract.donate(pId,{
                value:ethers.parseEther(amount)
            });
           await transaction.wait();
           location.reload();
           console.log("success: ",transaction);
           setIsPending(false)
           return  transaction
        } catch (error) {
            setIsPending(false)
            alert(error);
        }
    }

    const getDonations = async (pId) => {
        const web3modal = new Web3Modal();
        const connection =await web3modal.connect();
        const provider = new ethers.BrowserProvider(connection);
        const contract = fetchContract(provider);
        const donations = await contract.getDonators(pId);
        const noOfDonations = donations[0].length;
        const parsedDonations = [];
        for (let i = 0; i < noOfDonations; i++) {
            parsedDonations.push({
                donator:donations[0][i],
                donation: ethers.formatEther(donations[1][i].toString())
            })
        }
        return parsedDonations;
    }

    const checkIfWalletConnected = async () => {
        try {
            if (!window.ethereum) {
                return alert("Install Metamask")
            }
            const accounts = await window.ethereum.request({
                method:"eth_accounts"
            })
            if (accounts.length) {
                setAddress(accounts[0])
            }else{
                alert("account not found")
            }
        } catch (error) {
            alert("error: while checking")
        }
    }

    useEffect(()=>{
        // checkIfWalletConnected();
    },[])

    const connectWallet = async () => {
        try {
            if (!window.ethereum) {
                return alert("Install Metamask")
            }
            const accounts = await window.ethereum.request({
                method:"eth_requestAccounts"
            })
            setAddress(accounts[0])
        } catch (error) {
            alert("error: while connecting")
        }
    }

    return(
        <Web3Context.Provider value={{
            address,
            checkIfWalletConnected,
            connectWallet,
            getCampaigns,
            getDonations,
            getUserCampaigns,
            createCampaign,
            donate
        }}>
            {children}
        </Web3Context.Provider>
    )
}