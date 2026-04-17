/**
 * CountdownIcon displays a single time unit (e.g., Days, Hours) and its value.
 * - Accessible and responsive.
 * - Use within a countdown timer.
 */
type CountdownIconProps = {
  /** Name of the time unit (e.g., "Days") */
  name: string;
  /** Value for the time unit */
  value: number;
};

export default function CountdownIcon({ name, value }: CountdownIconProps) {
  return (
    <div
      className="flex flex-col justify-center items-center px-2 py-2 w-16 h-16 text-center"
      role="group"
      aria-label={`${value} ${name}`}
    >
      <span className="font-semibold text-xs" aria-hidden="true">
        {name}
      </span>
      <time
        className="font-bold text-xl md:text-2xl"
        dateTime={value.toString()}
        aria-label={name}
      >
        {value}
      </time>
    </div>
  );
}
