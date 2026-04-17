import { IMAGE_API_URL } from "../api/strapi";
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
  const rawUrl = image?.formats?.medium?.url;
  const imageUrl = rawUrl
    ? rawUrl.startsWith("http")
      ? rawUrl
      : IMAGE_API_URL + rawUrl
    : null;

  return (
    // Section for semantic grouping, flex for layout
    <section
      className={`w-full relative flex flex-col lg:flex-row py-8 xl:px-16 gap-16 justify-between items-center ${
        textLocation !== "left" && "lg:flex-row-reverse"
      }`}
      aria-label={title}
    >
      {/* Text Section */}
      <div
        className={`z-15 flex flex-col gap-6 w-full lg:w-3/5 text-${textColor} ${
          textLocation === "right" ? "text-right items-end" : "items-start"
        }`}
      >
        {/* Title */}
        <h2 className="text-2xl lg:text-5xl xl:text-6xl font-semibold">
          {title}
        </h2>
        {/* Description */}
        <article className="lg:text-xl xl:text-2xl whitespace-pre-wrap">
          {description}
        </article>
        {/* CTA Button */}
        {cta && <Button {...cta} />}
      </div>

      {/* {imageUrl && (
        <img
          src={imageUrl}
          title={`${title} section image`}
          alt={image.alternativeText || `${title} section image`}
          className={`invisible md:visible absolute object-contain h-full max-h-lg lg:max-w-85 lg:h-auto -bottom-16 ${
            imageDirection === "left" ? "scale-x-[-1]" : ""
          } ${
            textLocation === "left"
              ? "-right-8 lg:right-0"
              : "-left-8 lg:left-0"
          }`}
          loading="lazy"
        />
      )} */}

      {imageUrl && (
        <div className="relative z-10 hidden lg:flex items-center justify-center w-full lg:w-2/5 h-full">
          <img
            src={imageUrl}
            title={`${title} section image`}
            alt={image.alternativeText || `${title} section image`}
            className={` rounded-xl  object-cover h-full max-h-lg lg:max-w-85 lg:h-auto transition-all duration-300 ${
              imageDirection === "left"
                ? "-scale-x-100 hover:-scale-x-110 hover:scale-y-110"
                : "hover:scale-110"
            } `}
            loading="lazy"
          />
          {/* <div
            className={`absolute inset-0 ${backgroundColor ? `hover:bg-${backgroundColor}` : "hover:bg-lighterNude"} opacity-40`}
          ></div> */}
        </div>
      )}
    </section>
  );
}
