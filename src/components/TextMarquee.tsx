import { motion } from "framer-motion";

type TextMarqueeProps = {
  items: string[];
  speed?: number;
  className?: string;
  itemClassName?: string;
};

export default function TextMarquee({
  items,
  speed = 20,
  className = "",
  itemClassName = "",
}: TextMarqueeProps) {
  if (!items.length) return null;

  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`w-full overflow-hidden whitespace-nowrap ${className}`}
      aria-label="Scrolling announcement"
    >
      <motion.div
        className="flex w-max items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {repeatedItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className={`mx-6 inline-flex items-center text-xl md:text-3xl font-semibold uppercase tracking-widest ${itemClassName}`}
          >
            {item}
            <span className="ml-12 opacity-60">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
