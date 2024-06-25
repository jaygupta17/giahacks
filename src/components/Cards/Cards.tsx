import React from 'react'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'



export default function Cards() {
  return (
<div className="card">
  <img src="https://source.unsplash.com/random/200×200/?biodiversity" alt="Avatar" className="d-block w-[30vh] h-[30vh] m-[15vh]"></img>
  <div className="container d-block  m-[15vh] p-[0.2%] ">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
  </div>
</div>
  )
}
