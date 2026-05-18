import { motion } from "framer-motion";
import useCountdown from "../hooks/useCountdown";
import type { BannerContent } from "../types/globals";
import Button from "./Button";
import CountdownIcon from "./CountdownIcon";
import { IMAGE_API_URL } from "../api/strapi";

export default function Banner({
  title,
  description,
  eventDate,
  location,
  cta,
  backgroundImage,
}: BannerContent) {
  const eventDateObj = new Date(eventDate);
  const formattedDate = eventDateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const rawUrl =
    backgroundImage?.formats?.large?.url ||
    backgroundImage?.formats?.medium?.url ||
    backgroundImage?.url;
  const imageUrl = rawUrl
    ? rawUrl.startsWith("http")
      ? rawUrl
      : IMAGE_API_URL + rawUrl
    : null;
  const [days, hours, minutes, seconds] = useCountdown(eventDateObj);

  return (
    <motion.section
      aria-label="Event Banner"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="z-10 relative bg-linear-to-r from-primaryBrown to-lighterNude flex flex-col md:flex-row md:px-16 px-4 py-4 justify-between items-center text-white"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 z-1 bg-black/35" />

      {/* Background Image */}
      {imageUrl && (
        <motion.img
          src={imageUrl}
          alt=""
          fetchPriority="high"
          aria-hidden="true"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 z-0 w-full h-full object-cover object-center"
        />
      )}
      {/* Event Name and Description */}
      <motion.div
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.16,
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="z-10 flex flex-col py-7 gap-3 w-full md:w-1/2"
      >
        {/* Name */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="font-cursive text-5xl md:text-6xl font-bold text-center md:text-left"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 18 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          {description}
        </motion.p>
      </motion.div>
      {/* Countdown Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.65, ease: "easeOut" }}
        className="z-10 flex flex-col items-center justify-center bg-primaryBrown/80 gap-3 px-6 py-6 rounded-2xl"
      >
        <h2 className="text-center uppercase font-bold lg:text-xl tracking-widest">
          {/* Date */}
          <time>{formattedDate}</time>

          <span> | </span>
          {/* Location */}
          <span>{location}</span>
        </h2>

        {/* CTA */}
        <Button {...cta} />

        {/* Countdown */}
        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate="show"
          className="flex justify-between items-center gap-2"
        >
          {[
            { name: "Days", value: days },
            { name: "Hours", value: hours },
            { name: "Minutes", value: minutes },
            { name: "Seconds", value: seconds },
          ].map((item) => (
            <motion.div
              key={item.name}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0 },
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 0.45,
                repeat: 0,
                ease: "easeInOut",
              }}
            >
              <CountdownIcon name={item.name} value={item.value} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
