import { motion } from "framer-motion";
import Button from "../components/Button";
import SEO from "../components/SEO";
import { usePageContent } from "../hooks/usePageContent";

export default function BookASession() {
  // Fetch page data for the "book-a-session" page
  const { pageData } = usePageContent("book-a-session");
  return (
    // Book section with responsive padding and background
    <section className="flex flex-col gap-8 px-16 md:px-32 xl:px-64 py-16 bg-secondaryBrown text-white">
      {/* Conditionally render SEO metadata */}
      {pageData && pageData?.seo && <SEO {...pageData?.seo} />}

      {/* Text Section */}
      <motion.article
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h1 className="text-3xl font-semibold">Book Your Session</h1>
        <p className="text-lg">
          Your next level starts here. Book a session to gain clarity, overcome
          obstacles, and take actionable steps toward your goals.
        </p>
      </motion.article>

      {/* Booking Form */}
      <motion.form
        action=""
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-2 gap-6"
      >
        {/* Name */}
        <motion.label
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          whileHover={{ y: -2 }}
          htmlFor="name"
          className="px-4 py-2 col-span-2 sm:col-span-1 bg-white text-primaryBrown rounded-lg"
        >
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="w-full placeholder:text-secondaryBrown focus-within:ring-2 focus-within:ring-primaryNude transition-all duration-300"
            required
          />
        </motion.label>

        {/* Date Time */}
        <motion.label
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          whileHover={{ y: -2 }}
          htmlFor="dateTime"
          className="px-4 py-2 col-span-2 sm:col-span-1 bg-white text-primaryBrown rounded-lg"
        >
          <input
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            placeholder="Date and Time"
            className="w-full placeholder:text-secondaryBrown focus-within:ring-2 focus-within:ring-primaryNude transition-all duration-300"
            required
          />
        </motion.label>

        {/* Email Address */}
        <motion.label
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          whileHover={{ y: -2 }}
          htmlFor="email"
          className="px-4 py-2 col-span-2 bg-white text-primaryBrown rounded-lg"
        >
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            className="w-full placeholder:text-secondaryBrown focus-within:ring-2 focus-within:ring-primaryNude transition-all duration-300"
            required
          />
        </motion.label>

        {/* Message */}
        <motion.label
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          whileHover={{ y: -2 }}
          htmlFor="message"
          className="col-span-2 px-4 py-2 bg-white text-primaryBrown rounded-lg h-64"
        >
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className="placeholder:text-secondaryBrown resize-none w-full h-full focus-within:ring-2 focus-within:ring-primaryNude transition-all duration-300 rounded-lg p-3"
            required
          />
        </motion.label>

        {/* Submit Button */}
        <Button
          title="Send Message"
          otherStyles="col-span-2"
          backgroundColor="white"
          textColor="primaryBrown"
        />
      </motion.form>
    </section>
  );
}
