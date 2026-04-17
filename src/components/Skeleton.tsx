type SkeletonProps = {
  imageHeight?: string; // Tailwind height class for image placeholder
  lines?: number; // Number of text lines to show
  className?: string; // Additional classes for the container
};
function Skeleton({ imageHeight, lines = 2, className = "" }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-primaryNude rounded-lg shadow p-4 w-full flex flex-col gap-4${className}`}
    >
      {imageHeight && (
        <div className={`bg-lightNude w-full ${imageHeight} rounded-md mb-4`} />
      )}
      <div className="flex flex-col gap-2">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`bg-lighterNude rounded ${
              index === 0 ? "h-6 w-3/4" : "h-4 w-1/2"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Skeleton;
