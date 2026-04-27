import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const BookASession = lazy(() => import("./pages/BookASession"));
const PersonalCoaching = lazy(() => import("./pages/PersonalCoaching"));
const GroupCoaching = lazy(() => import("./pages/GroupCoaching"));
const CorporateCoaching = lazy(() => import("./pages/CorporateCoaching"));
const Speaking = lazy(() => import("./pages/Speaking"));
const Maintenance = lazy(() => import("./pages/Maintenance"));
const NotFound = lazy(() => import("./pages/NotFound"));
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useBannerContent } from "./hooks/useBannerContent";
import { ROUTES } from "./config/routes";
import Skeleton from "./components/Skeleton";
import { useGlobalContent } from "./hooks/useGlobalContent";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import ScrollToTop from "./components/ScrollToTop";
// import HomeRedesign from "./pages/HomeRedesign";

// Utility function to check for network errors
function isNetworkError(error: unknown): boolean {
  if (!error || typeof error !== "object") return false;
  // Check if error has a 'message' property of type string
  const message = (error as { message?: string }).message;
  return (
    typeof message === "string" &&
    (message.includes("Network Error") || message.includes("Failed to fetch"))
  );
}

// Layout component wraps all pages with shared UI (Banner, Navbar, Footer)
function Layout({ children }: { children: React.ReactNode }) {
  const {
    bannerData,
    loading: bannerLoading,
    error: bannerError,
  } = useBannerContent();
  const { loading: globalLoading, error: globalError } = useGlobalContent();

  if (
    (bannerError && isNetworkError(bannerError)) ||
    (globalError && isNetworkError(globalError))
  ) {
    return <Maintenance />;
  }

  return (
    <>
      {/* Show banner or loading state */}
      {bannerLoading && globalLoading ? (
        <Skeleton imageHeight="h-48" lines={2} className="h-64 mb-8" />
      ) : (
        bannerData && <Banner {...bannerData} />
      )}
      {/* Navigation bar */}
      {bannerLoading && globalLoading ? (
        <Skeleton imageHeight="h-12" lines={1} className="mb-4" />
      ) : (
        <Navbar />
      )}
      <PageTransition>{children}</PageTransition>
      {bannerLoading && globalLoading ? (
        <Skeleton imageHeight="h-12" lines={1} className="mb-4" />
      ) : (
        <Footer />
      )}
    </>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <Suspense
      fallback={
        <Skeleton imageHeight="h-200" lines={5} className="h-64 mb-8" />
      }
    >
      <AnimatePresence mode="wait">
        <ScrollToTop />
        <Routes location={location} key={location.pathname}>
          {/* Home route */}
          <Route
            path={ROUTES.HOME}
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          {/* <Route
          path={ROUTES.HOME_REDESIGN}
          element={
            <Layout>
              <HomeRedesign />
            </Layout>
          }
        /> */}
          {/* Contact route */}
          <Route
            path={ROUTES.CONTACT}
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          {/* Book a Session route */}
          <Route
            path={ROUTES.BOOK_A_SESSION}
            element={
              <Layout>
                <BookASession />
              </Layout>
            }
          />
          {/* About route */}
          <Route
            path={ROUTES.ABOUT}
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          {/* Personal Coaching route */}
          <Route
            path={ROUTES.COACHING.PERSONAL}
            element={
              <Layout>
                <PersonalCoaching />
              </Layout>
            }
          />
          {/* Group Coaching route */}
          <Route
            path={ROUTES.COACHING.GROUP}
            element={
              <Layout>
                <GroupCoaching />
              </Layout>
            }
          />
          {/* Corporate Coaching route */}
          <Route
            path={ROUTES.COACHING.CORPORATE}
            element={
              <Layout>
                <CorporateCoaching />
              </Layout>
            }
          />
          {/* Speaking route */}
          <Route
            path={ROUTES.SPEAKING}
            element={
              <Layout>
                <Speaking />
              </Layout>
            }
          />
          {/* Maintenance and NotFound routes */}
          <Route path={ROUTES.MAINTENANCE} element={<Maintenance />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default AppRoutes;
