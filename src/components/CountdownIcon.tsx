// Change component Name
type CountdownIconProps = {
  name: string;
  value: number;
};
export default function CountdownIcon({ name, value }: CountdownIconProps) {
  return (
    <div className="flex flex-col justify-center items-center px-2 py-2 w-15 h-15 text-center">
      <p className="font-semibold text-xs">{name}</p>
      <p className="font-bold text-xl">{value}</p>
    </div>
  );
}
