import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Maintenance() {
  const navigate = useNavigate();

  // Handler to navigate back in history
  function goBack() {
    navigate(-1);
  }
  // Handler to navigate to home page
  function goHome() {
    navigate("/", {});
  }

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center gap-4 bg-lighterNude text-center"
      role="main"
    >
      {/* Maintenance message */}
      <h1 className="text-3xl font-bold mb-4">We'll be back soon!</h1>
      <p className="text-lg">Our site is currently undergoing maintenance.</p>

      {/* Go Home button */}
      <Button
        onClick={goHome}
        title="Go Home"
        backgroundColor="primaryBrown"
        textColor="white"
      />
      {/* Go Back button */}
      <Button
        onClick={goBack}
        title="Go Back"
        backgroundColor="transparent"
        textColor="primaryBrown"
      />
    </div>
  );
}
