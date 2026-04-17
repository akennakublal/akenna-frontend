import Button from "../components/Button";

export default function BookASession() {
  return (
    // Book section with responsive padding and background
    <section className="flex flex-col gap-8 px-16 md:px-32 xl:px-64 py-16 bg-secondaryBrown text-white">
      {/* Text Section */}
      <article className="space-y-4">
        <h1 className="text-3xl font-semibold">
          To book a session, please contact:
        </h1>
        <p className="text-lg">
          Please complete the below form and we will respond to you as soon as
          possible.
        </p>
      </article>

      {/* Booking Form */}
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

        {/* Date Time */}
        <label
          htmlFor="dateTime"
          className="px-4 py-2 col-span-2 sm:col-span-1 bg-white text-primaryBrown rounded-lg"
        >
          <input
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            placeholder="Date and Time"
            className="w-full placeholder:text-secondaryBrown"
            required
          />
        </label>

        {/* Email Address */}
        <label
          htmlFor="email"
          className="px-4 py-2 col-span-2 bg-white text-primaryBrown rounded-lg"
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
