"use server"

import { revalidatePath } from "next/cache"

export const createComplaint = async(values:any) => {
    try {
        fetch("http://localhost:8000/complaints", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
          }).then(res=>{
            return {
                res:res.ok
            }
          })

    } catch (error) {
        throw error
    }
}

export const getComplaints = async() => {
    try {
       const res = await  fetch('http://localhost:8000/complaints')
       return {
        data: res.json()
       }
    } catch (error) {
        throw error
    }
}


