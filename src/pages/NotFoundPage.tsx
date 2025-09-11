import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4 bg-lighterNude text-center">
      <h1 className="text-3xl font-bold mb-4">404 Page Not Found</h1>
      <Link className="text-lg" to="/">
        Go Back
      </Link>
    </div>
  );
}
