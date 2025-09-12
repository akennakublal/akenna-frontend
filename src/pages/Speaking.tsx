import type {
  TextSection as TextSectionProps,
  Event as EventProps,
} from "../types/globals";
import Event from "../components/Event";
import TextSection from "../components/TextSection";
import Image1 from "../assets/akenna-cropped.png";

export default function Speaking() {
  const speakingSection: TextSectionProps = {
    title: "Lorem ipsum dolor sit consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sit at felis vulputate aliquet sit purus in risus arcu. Vitae magna molestie nulla ultrices lobortis consectetur velit sit pellentesque. Non arcu fringilla posuere mattis fermentum metus nec. Sed risus facilisi nullam sed.",
    image: Image1,
    textColor: "white",
    textLocation: "right",
    imageDirection: "right",
    cta: {
      title: "Book a Session",
      url: "/contact",
      backgroundColor: "white",
      textColor: "primaryBrown",
    },
  };

  const upcomingEvents: EventProps[] = [
    {
      title: "Lorem ipsum",
      subtitle: "Lorem ipsum dolor sit amet consectetur.",
      date: "25th December, 2025",
    },
    {
      title: "Lorem ipsum",
      subtitle: "Lorem ipsum dolor sit amet consectetur.",
      date: "25th December, 2025",
    },
    {
      title: "Lorem ipsum",
      subtitle: "Lorem ipsum dolor sit amet consectetur.",
      date: "25th December, 2025",
    },
    {
      title: "Lorem ipsum",
      subtitle: "Lorem ipsum dolor sit amet consectetur.",
      date: "25th December, 2025",
    },
  ];
  return (
    <>
      <div className="relative px-6 py-8 sm:px-12 lg:py-16 lg:px-32 bg-linear-to-r from-primaryNude to-primaryBrown">
        <TextSection {...speakingSection} />
      </div>
      {/* Upcoming Events */}
      <div className="flex flex-col justify-start relative px-6 py-8 sm:px-12 lg:py-16 lg:px-32 bg-lighterNude text-primaryBrown">
        <h2 className="w-fit text-center font-bold text-3xl border-b-4 border-primaryBrown border-x-5)">
          Upcoming Events
        </h2>
        <section className="flex justify-center sm:justify-between items-center flex-wrap gap-8 py-8">
          {upcomingEvents.length !== 0 ? (
            upcomingEvents.map((event) => {
              return <Event {...event} />;
            })
          ) : (
            <h3 className="w-full text-center text-2xl p-16">
              There are no upcoming events
            </h3>
          )}
        </section>
      </div>
    </>
  );
}
