import Button from "../components/Button";
import SEO from "../components/SEO";
import { usePageContent } from "../hooks/usePageContent";

export default function Contact() {
  // Fetch page data for the "contact" page
  const { pageData } = usePageContent("contact");
  return (
    // Contact section with responsive padding and background
    <section className="flex flex-col gap-8 px-16 md:px-32 xl:px-64 py-16 bg-secondaryBrown text-white">
      {/* Conditionally render SEO metadata */}
      {pageData && pageData?.seo && <SEO {...pageData?.seo} />}

      {/* Text Section */}
      <article className="space-y-4">
        <h1 className="text-3xl font-semibold">Let’s Connect</h1>
        <p className="text-lg">
          Have a question or want to learn more? Send a message and I’ll get
          back to you as soon as possible.
        </p>
      </article>

      {/* Contact Form */}
      <form action="" className="grid grid-cols-2 gap-6">
        {/* Name */}
        <label
          htmlFor="name"
          className="px-4 py-2 col-span-2 sm:col-span-1 bg-white text-primaryBrown rounded-lg"
        >
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="w-full placeholder:text-secondaryBrown"
            required
          />
        </label>

        {/* Email Address */}
        <label
          htmlFor="email"
          className="px-4 py-2 col-span-2 sm:col-span-1 bg-white text-primaryBrown rounded-lg"
        >
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            className="w-full placeholder:text-secondaryBrown"
            required
          />
        </label>

        {/* Message */}
        <label
          htmlFor="message"
          className="col-span-2 px-4 py-2 bg-white text-primaryBrown rounded-lg h-64"
        >
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            className="placeholder:text-secondaryBrown resize-none w-full h-full"
            required
          />
        </label>

        {/* Submit Button */}
        <Button
          title="Send Message"
          otherStyles="col-span-2"
          backgroundColor="white"
          textColor="primaryBrown"
        />
      </form>
    </section>
  );
}
