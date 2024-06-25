import React from "react";
import Link from "next/link";
import { CardHoverEffectDemo } from "@/components/Cards";

import Header from "../components/Header/Header";
import { ImagesSliderDemo } from "@/components/Carousel";
import { AccordionDemo } from "@/components/Accordian";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <>
        {/* <Header /> */}
        <ImagesSliderDemo />
        <CardHoverEffectDemo />
        <AccordionDemo />
        <Footer />

    </>
  );
}
