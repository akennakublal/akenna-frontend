import type { EventContent } from "../types/globals";
import TextSection from "../components/TextSection";
import { useGlobalContent } from "../hooks/useGlobalContent";
import { usePageContent } from "../hooks/usePageContent";
import EventSection from "../components/EventSection";
import SEO from "../components/SEO";
import Skeleton from "../components/Skeleton";

export default function Home() {
  // Fetch global and page data for the home page
  const { globalData } = useGlobalContent();
  const { pageData, loading, error } = usePageContent("home");

  // Loading, error, and empty state handling
  if (loading)
    return <Skeleton imageHeight="h-160" lines={1} className="mb-4" />;
  if (error) return <div>Error: {error}</div>;
  if (!pageData) return <div>No page data found.</div>;
  if (!globalData) return <div>No global settings found.</div>;

  // Filter and sort upcoming events
  const upcomingEvents: EventContent[] = pageData?.events
    .filter((event) => {
      const eventDate = new Date(event.date);
      const currentDate = new Date();
      return eventDate >= currentDate;
    })
    .sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });

  return (
    <>
      {/* Conditionally render SEO metadata */}
      {pageData.seo && <SEO {...pageData.seo} />}

      {/* Render each text section with responsive and gradient backgrounds */}
      {pageData.textSections?.map((section) => {
        // Dynamically build gradient classes based on section props
        const gradientDirectionClass =
          section?.gradient?.direction === "to bottom"
            ? "bg-linear-to-b"
            : section?.gradient?.direction === "to top"
              ? "bg-linear-to-t"
              : section?.gradient?.direction === "to left"
                ? "bg-linear-to-l"
                : "bg-linear-to-r";

        const gradientStartClass =
          section?.gradient?.startColor === "primaryBrown"
            ? "from-primaryBrown"
            : section?.gradient?.startColor === "secondaryBrown"
              ? "from-secondaryBrown"
              : section?.gradient?.startColor === "primaryNude"
                ? "from-primaryNude"
                : section?.gradient?.startColor === "lightNude"
                  ? "from-lightNude"
                  : "from-lighterNude";

        const gradientEndClass =
          section?.gradient?.endColor === "primaryBrown"
            ? "to-primaryBrown"
            : section?.gradient?.endColor === "secondaryBrown"
              ? "to-secondaryBrown"
              : section?.gradient?.endColor === "primaryNude"
                ? "to-primaryNude"
                : section?.gradient?.endColor === "lightNude"
                  ? "to-lightNude"
                  : "to-lighterNude";

        return (
          <div
            key={section.title}
            className={`relative px-6 py-8 sm:px-12 lg:py-16 lg:px-32 ${section?.gradient ? `${gradientDirectionClass} ${gradientStartClass} ${gradientEndClass}` : section?.backgroundColor ? `bg-${section.backgroundColor}` : "bg-lighterNude"}`}
          >
            {/* Render TextSection with all section props */}
            <TextSection {...section} />
          </div>
        );
      })}

      {/* Render upcoming events section if events exist */}
      {pageData.events && (
        <EventSection
          upcomingEvents={upcomingEvents}
          title="Upcoming Events"
          loading={loading}
        />
      )}
    </>
  );
}
