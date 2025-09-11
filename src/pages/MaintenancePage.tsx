import { useNavigate } from "react-router-dom";

function MaintenancePage() {
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

      <button onClick={goHome}>Go Home</button>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}

export default MaintenancePage;
