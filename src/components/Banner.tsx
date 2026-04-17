import useCountdown from "../hooks/useCountdown";
import type { BannerContent } from "../types/globals";
import Button from "./Button";
import CountdownIcon from "./CountdownIcon";
// import { IMAGE_API_URL } from "../api/strapi";
// import { useEffect } from "react";

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
  // const backgroundImageUrl = IMAGE_API_URL + backgroundImage.formats.medium.url;
  const backgroundImageUrl = backgroundImage.formats.medium.url;
  const [days, hours, minutes, seconds] = useCountdown(eventDateObj);

  // useEffect(() => {
  //   console.log("Fixed backgroundImageUrl:", backgroundImageUrl);
  //   console.log("Image API URL:", IMAGE_API_URL);
  //   console.log("Background image URL:", backgroundImage.formats.medium.url);
  // }, [backgroundImageUrl, backgroundImage]);

  return (
    <section
      aria-label="Event Banner"
      className="z-10 relative bg-linear-to-r from-primaryBrown to-lighterNude flex flex-col md:flex-row md:px-16 px-4 py-4 justify-between items-center text-white"
    >
      {/* Background Image */}
      {backgroundImageUrl && (
        <img
          src={backgroundImageUrl}
          alt=""
          fetchPriority="high"
          aria-hidden="true"
          className="absolute inset-0 z-0 w-480 h-full object-cover opacity-60"
        />
      )}

      {/* Event Name and Description */}
      <div className="z-10 flex flex-col py-7 gap-3 w-full md:w-1/2">
        {/* Name */}
        <h1 className="font-cursive text-5xl md:text-6xl font-bold text-center md:text-left">
          {title}
        </h1>
        <p className="text-center md:text-left">{description}</p>
      </div>

      {/* Countdown Container */}
      <div className="z-10 flex flex-col items-center justify-center bg-primaryBrown/80 gap-3 px-6 py-6 rounded-2xl">
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
        <div className="flex justify-between items-center gap-2">
          <CountdownIcon name="Days" value={days} />
          <CountdownIcon name="Hours" value={hours} />
          <CountdownIcon name="Minutes" value={minutes} />
          <CountdownIcon name="Seconds" value={seconds} />
        </div>
      </div>
    </section>
  );
}
