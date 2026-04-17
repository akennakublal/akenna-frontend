import type { EventContent } from "../types/globals";
import Event from "./Event";
import Skeleton from "./Skeleton";

/**
 * EventSection displays a responsive grid of upcoming events.
 * - Accessible and responsive.
 * - Follows WCAG and industry best practices.
 */
function EventSection({
  upcomingEvents,
  title,
  loading,
}: {
  upcomingEvents: EventContent[];
  title: string;
  loading: boolean;
}) {
  return (
    // Section groups the event list for semantics and accessibility
    <section className="flex flex-col justify-start relative px-6 py-8 sm:px-12 lg:py-16 lg:px-32 bg-lighterNude text-primaryBrown">
      {/* Section heading */}
      <h2 className="w-fit text-center font-bold text-3xl border-b-4 border-primaryBrown">
        {title}
      </h2>
      {/* Responsive event grid, aria-live for screen reader updates */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 align-top justify-items-center md:justify-items-stretch gap-8 py-8"
        aria-live="polite"
      >
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} imageHeight="h-32" lines={2} />
          ))
        ) : upcomingEvents.length !== 0 ? (
          upcomingEvents.map((event) => (
            <Event key={event.documentId ?? event.title} {...event} />
          ))
        ) : (
          <h3 className="w-full text-center text-2xl p-16">
            There are no upcoming events
          </h3>
        )}
      </div>
    </section>
  );
}

export default EventSection;
