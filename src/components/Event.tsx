// import { IMAGE_API_URL } from "../api/strapi";
import { motion } from "framer-motion";
import type { EventContent } from "../types/globals";

export default function Event({ title, subtitle, date, image }: EventContent) {
  const eventDateObj = new Date(date);
  const formattedDate = eventDateObj.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const imageUrl = image ? image.formats.thumbnail.url : null;

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="space-y-3 w-full max-w-xs rounded-2xl overflow-hidden bg-white/60 shadow-md hover:shadow-xl p-3"
    >
      {/* Event image or placeholder */}
      {imageUrl ? (
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
          src={imageUrl}
          alt=""
          title={`${title} event image`}
          className="w-full h-40 object-cover rounded-xl"
          loading="lazy"
        />
      ) : (
        <div
          className="w-full h-40 bg-primaryBrown rounded-xl"
          aria-hidden="true"
        ></div>
      )}

      {/* Event title */}
      <h3 className="text-xl font-semibold">{title}</h3>

      {/* Event subtitle */}
      <p>{subtitle}</p>

      {/* Event date */}
      <time
        dateTime={eventDateObj.toISOString()}
        className="block text-sm text-gray-600"
      >
        {formattedDate}
      </time>
    </motion.article>
  );
}
