import type { Event as EventProps } from "../types/globals";
export default function Event({ title, subtitle, date }: EventProps) {
  return (
    <article className="space-y-2 w-55 transition-transform duration-500 hover:scale-105">
      <div className="w-55 h-35 bg-primaryBrown rounded-xl"></div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{subtitle}</p>
      <small>{date}</small>
    </article>
  );
}
