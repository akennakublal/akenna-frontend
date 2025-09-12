import { Link } from "react-router-dom";
import type { TextSection as TextSectionProps } from "../types/globals";
export default function TextSection({
  title,
  description,
  button,
  image,
  textColor,
  textLocation,
}: TextSectionProps) {
  return (
    <section
      className={`flex py-8 justify-center items-center ${
        textLocation === "left" ? "md:justify-start" : "md:justify-end"
      }`}
    >
      {/* Text Section */}
      <div
        className={`flex flex-col gap-6 w-full md:w-3/5 text-${textColor} ${
          textLocation === "right" ? "text-right items-end" : "items-start"
        }`}
      >
        <h1 className="text-2xl md:text-5xl font-semibold">{title}</h1>
        <article className="md:text-xl">{description}</article>
        <Link
          to="/"
          className="text-sm md:text-base bg-white rounded-lg text-primaryBrown font-semibold px-6 py-1.5"
        >
          {button}
        </Link>
      </div>

      {/* Image */}
      <img
        src={image}
        alt=""
        className={`hidden md:block absolute h-4/5 lg:w-1/5 lg:h-auto bottom-0  ${
          textLocation === "left"
            ? "right-0 mr-8 lg:mr-16 scale-x-[-1]"
            : "left-0 ml-16 lg:ml-32 scale-x-[-1]"
        }`}
      />
    </section>
  );
}
