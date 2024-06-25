import React from 'react'
import { ModeToggle } from '../toggle'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


const ACarousel = () => {
  return (
    //style={{objectFit:"contain !important"}}
        <div className="carousel-item" >
      <img src="https://source.unsplash.com/random/200×200/?biodiversity" className="d-block w-[300vh] h-[70vh]" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>Lets conserve The Earth</h5>
        <p>Welcome To Heritage World</p> */}
      </div>
    </div>
    
  )
}

export default ACarousel;
