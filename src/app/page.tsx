import React from "react";
import Link from "next/link";
import Header from "../components/Header/Header";
import { ImagesSliderDemo } from "@/components/Carousel";
import { AccordionDemo } from "@/components/Accordian";
import Footer from "@/components/Footer";
import App from "@/components/Testimonials";
import { EvervaultCardDemo } from "@/components/Cards";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <>
        {/* <Header /> */}
        <ImagesSliderDemo />
        <EvervaultCardDemo />
        <App />
        <AccordionDemo />
        <Footer />

    </>
  );
}
