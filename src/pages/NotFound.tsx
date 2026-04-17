import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function NotFound() {
  const navigate = useNavigate();

  // Handler to navigate to home page
  function goHome() {
    navigate("/", {});
  }

  return (
    // Main content region for accessibility
    <div
      className="w-full h-screen flex flex-col items-center justify-center gap-4 bg-lighterNude text-center"
      role="main"
    >
      {/* 404 Heading */}
      <h1 className="text-3xl font-bold mb-4">404 Page Not Found</h1>
      {/* Go Home button */}
      <Button
        onClick={goHome}
        title="Go Home"
        backgroundColor="primaryBrown"
        textColor="white"
      />
    </div>
  );
}
