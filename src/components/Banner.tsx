import BackgroundImage from "../assets/trinidad and tobago.jpg";
import useCountdown from "../hooks/useCountdown";
import CountdownIcon from "./CountdownIcon";

export default function Banner() {
  const [days, hours, minutes, seconds] = useCountdown(
    new Date("December 25, 2025 12:00:00")
  );
  return (
    <div className="z-10 relative bg-linear-to-r from-primaryBrown to-lighterNude flex flex-col md:flex-row px-16 py-4 justify-between items-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>

      {/* Event Name and Description */}
      <div className="z-10 flex flex-col py-7 gap-3 w-full md:w-1/2">
        {/* Name */}
        <h1 className="font-cursive text-6xl font-bold text-center md:text-left">
          The Women's Conference
        </h1>
        <p className="text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur. Platea fermentum adipiscing at
          eget habitant pretium nulla lobortis.
        </p>
      </div>

      {/* Countdown Container */}
      <div className="z-10 flex flex-col items-center justify-center bg-primaryBrown/80 gap-3 px-6 py-6 rounded-2xl">
        <h1 className="text-center uppercase font-bold text-xl tracking-widest">
          {/* Date */}
          <span>25th December, 2025</span>

          <span> | </span>
          {/* Location */}
          <span>Port of Spain</span>
        </h1>

        {/* CTA */}
        <button className="bg-white px-6 py-1.5 rounded-lg text-xl text-secondaryBrown font-semibold">
          Reserve Your Spot Now!
        </button>

        {/* Countdown */}
        <div className="flex justify-between items-center gap-2">
          <CountdownIcon name="Days" value={days} />
          <CountdownIcon name="Hours" value={hours} />
          <CountdownIcon name="Minutes" value={minutes} />
          <CountdownIcon name="Seconds" value={seconds} />
        </div>
      </div>
    </div>
  );
}
