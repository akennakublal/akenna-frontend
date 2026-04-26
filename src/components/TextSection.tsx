import { motion } from "framer-motion";
import { IMAGE_API_URL } from "../api/strapi";
import type { TextSection as TextSectionProps } from "../types/globals";
import Button from "./Button";

const textColorMap: Record<string, string> = {
  primaryBrown: "text-primaryBrown",
  secondaryBrown: "text-secondaryBrown",
  primaryNude: "text-primaryNude",
  lightNude: "text-lightNude",
  lighterNude: "text-lighterNude",
  black: "text-black",
  white: "text-white",
};

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

  const textInitialX = textLocation === "left" ? -60 : 60;
  const imageInitialX = imageDirection === "left" ? -80 : 80;

  return (
    // Section for semantic grouping, flex for layout
    <section
      className={`w-full relative flex py-8 xl:px-16 gap-4 lg:gap-16 justify-between items-center ${
        textLocation !== "left" && "flex-row-reverse"
      }`}
      aria-label={title}
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: textInitialX }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className={`z-15 flex flex-col gap-6 w-full lg:w-3/5 ${
          textColorMap[textColor] || "text-primaryBrown"
        } ${textLocation === "right" ? "text-right items-end" : "items-start"}`}
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-4xl lg:text-5xl xl:text-6xl font-semibold"
        >
          {title}
        </motion.h2>

        <div
          className={`flex ${textLocation === "right" ? "flex-row-reverse" : "flex-row"} justify-between items-center w-full gap-8`}
        >
          {/* Text Section */}
          <div
            className={`flex flex-col justify-center ${textLocation === "right" ? "items-end" : "items-start"} w-1/2 gap-6 lg:w-full`}
          >
            {/* Description */}
            <motion.article
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.28, duration: 0.6 }}
              className="lg:text-xl xl:text-2xl whitespace-pre-wrap"
            >
              {description}
            </motion.article>
            {/* CTA Button */}
            {cta && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Button {...cta} />
              </motion.div>
            )}
          </div>

          {/* Image Section */}
          {imageUrl && (
            <motion.div
              initial={{ opacity: 0, x: imageInitialX, scale: 0.94 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="flex relative z-10 md:hidden items-center justify-center"
            >
              <motion.img
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.35 }}
                src={imageUrl}
                title={`${title} section image`}
                alt={image.alternativeText || `${title} section image`}
                className={`rounded-xl object-cover max-w-40 h-auto ${
                  imageDirection === "left" ? "-scale-x-100" : ""
                }`}
                loading="lazy"
              />
            </motion.div>
          )}
        </div>
      </motion.div>

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
        <motion.div
          initial={{ opacity: 0, x: imageInitialX, scale: 0.94 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="hidden relative z-10 md:flex h-lg justify-self-stretch items-center justify-center w-2/5 h-full"
        >
          <motion.img
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.35 }}
            src={imageUrl}
            title={`${title} section image`}
            alt={image.alternativeText || `${title} section image`}
            className={`rounded-xl object-cover h-full max-h-lg lg:max-w-85 lg:h-auto ${
              imageDirection === "left" ? "-scale-x-100" : ""
            }`}
            loading="lazy"
          />
        </motion.div>
      )}
    </section>
  );
}
