import type { TextSection as TextSectionProps } from "../types/globals";
import TextSection from "../components/TextSection";
import Image1 from "../assets/akenna-green-dress-Photoroom.png";

export default function About() {
  const aboutSection: TextSectionProps = {
    title: "Lorem ipsum dolor sit consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit at felis vulputate aliquet sit purus in risus arcu. Vitae magna molestie nulla ultrices lobortis consectetur velit sit pellentesque. Non arcu fringilla posuere mattis fermentum metus nec. Sed risus facilisi nullam sed.",
    image: Image1,
    textColor: "black",
    textLocation: "left",
    imageDirection: "right",
    cta: {
      title: "Book a Session",
      url: "/contact",
      backgroundColor: "white",
      textColor: "primaryBrown",
    },
  };
  return (
    <div className="relative px-6 py-8 sm:px-12 lg:py-16 lg:px-32 bg-linear-to-r from-lightNude to-primaryBrown">
      <TextSection {...aboutSection} />
    </div>
  );
}
