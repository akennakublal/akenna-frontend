import Button from "../components/Button";

export default function Contact() {
  return (
    <section className="flex flex-col gap-8 px-16 md:px-32 xl:px-64 py-16 bg-secondaryBrown text-white">
      {/* Text Section */}
      <article className="space-y-4">
        <h1 className="text-3xl font-semibold">
          For questions and any assistance please contact:
        </h1>
        <p className="text-lg">
          Please complete the below form and we will respond to you as soon as
          possible.
        </p>
      </article>

      {/* Form */}
      <form action="" className="grid grid-cols-2 gap-6">
        {/* Name */}
        <label htmlFor="name" className="hidden">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          className="px-4 py-2 col-span-2 sm:col-span-1 bg-white text-primaryBrown placeholder:text-secondaryBrown rounded-lg"
        />

        {/* Email Address */}
        <label htmlFor="name" className="hidden">
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="Email Address"
          className="px-4 py-2 col-span-2 sm:col-span-1 bg-white text-primaryBrown placeholder:text-secondaryBrown rounded-lg"
        />

        {/* Message */}
        <label htmlFor="message" className="hidden">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Message"
          className="col-span-2 px-4 py-2 bg-white text-primaryBrown placeholder:text-secondaryBrown rounded-lg h-64"
        />
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
