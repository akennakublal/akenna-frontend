import type { TextSection as TextSectionProps } from "../types/globals";
import Button from "./Button";
export default function TextSection({
  title,
  description,
  image,
  textColor,
  textLocation,
  imageDirection,
  cta,
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
        {cta && <Button {...cta} />}
      </div>

      {/* Image */}
      <img
        src={image}
        alt=""
        className={`hidden md:block absolute h-4/5 lg:w-1/5 lg:h-auto bottom-0 ${
          imageDirection === "left" && "scale-x-[-1]"
        }  ${
          textLocation === "left"
            ? "right-0 mr-8 lg:mr-16"
            : "left-0 ml-16 lg:ml-32"
        }`}
      />
    </section>
  );
}
