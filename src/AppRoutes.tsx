import { Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Maintenance from "./pages/Maintenance";
import NotFound from "./pages/NotFound";
import Speaking from "./pages/Speaking";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Banner />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/speaking"
          element={
            <Layout>
              <Speaking />
            </Layout>
          }
        />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
