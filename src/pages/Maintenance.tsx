import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Maintenance() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }
  function goHome() {
    navigate("/", {});
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4 bg-lighterNude text-center">
      <h1 className="text-3xl font-bold mb-4">We'll be back soon!</h1>
      <p className="text-lg">Our site is currently undergoing maintenance.</p>

      <Button
        onClick={goHome}
        title="Go Home"
        backgroundColor="primaryBrown"
        textColor="white"
      />
      <Button
        onClick={goBack}
        title="Go Back"
        backgroundColor="transparent"
        textColor="primaryBrown"
      />
    </div>
  );
}
