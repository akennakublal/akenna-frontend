// import { IMAGE_API_URL } from "../api/strapi";
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
    <article className="space-y-2 w-full max-w-xs transition-transform duration-500 hover:scale-105">
      {/* Event image or placeholder */}
      {imageUrl ? (
        <img
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
    </article>
  );
}
