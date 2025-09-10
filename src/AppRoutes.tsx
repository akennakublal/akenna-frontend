import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import NotFound from "./pages/NotFound";
import Homepage from "./pages/Homepage";
// import ContactPage from "./pages/ContactPage";
// import AboutPage from "./pages/AboutPage";
// import MaintenancePage from "./pages/MaintenancePage";
import { useMemo } from "react";

function AppRoutes() {
  const location = useLocation();
  const hideLayout = useMemo(() => {
    const hiddenPaths = ["/maintenance", "*"];
    return hiddenPaths.some((path) =>
      path === "*"
        ? location.pathname !== "/" && !location.pathname.startsWith("/")
        : location.pathname === path
    );
  }, [location.pathname]);

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/maintenance" element={<MaintenancePage />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

export default AppRoutes;
