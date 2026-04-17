import SEO from "../components/SEO";
import Skeleton from "../components/Skeleton";
import TextSection from "../components/TextSection";
import { usePageContent } from "../hooks/usePageContent";

export default function About() {
  // Fetch page data for the "about" page
  const { pageData, loading, error } = usePageContent("about");

  // Loading, error, and empty state handling
  if (loading)
    return <Skeleton imageHeight="h-160" lines={1} className="mb-4" />;
  if (error) return <div>Error: {error}</div>;
  if (!pageData) return <div>No page data found.</div>;

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
    </>
  );
}
