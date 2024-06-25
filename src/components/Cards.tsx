import { HoverEffect } from "../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <>
      <div className="flex flex-center items-center mt-[5%] text-5xl text-black font-bold">
        Features We Offer
      </div>
      <div className="max-w-6xl h-[80%] mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </>
  );
}
export const projects = [
  {
    title: "Complaint Filing ",
    description:
      "Allows users to file and track complaints regarding the maintenance of heritage sites.",
    link: "./complaint",
  },
  {
    title: "Event & Workshop",
    description:
      "Keeps users informed about events and workshops related to heritage conservation.",
    link: "./workshop",
  },
  {
    title: "VR Heritage Viewing",
    description:
      "Allows users to view heritage sites in augmented reality, regardless of their current location.",
    link: "./room",
  },
  {
    title: "Chatbot Interaction",
    description:
      "Provides an AI-powered chatbot for users to discuss various heritage sites using the Gemini API.",
    link: "./chatbot",
  },
  {
    title: "UNESCO Heritage Sites",
    description:
      "This shows the list of heritage sites that are recognized by UNESCO.",
    link: "https://whc.unesco.org/en/list/",
  },
];
