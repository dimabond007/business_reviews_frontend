import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ContactUsPage from "./pages/ContactUsPage";
import BusinessListPage from "./pages/BusinessListPage";
import BusinessDetailsPage from "./pages/BusinessDetailsPage";
import BusinessLayout from "./pages/layouts/BusinessLayout";
import { useAuth } from "./context/AuthContext";
import AuthLayout from "./pages/layouts/AuthLayout";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const { loggedInUser } = useAuth();

  // function ProtectedLoggedInRoute({ children }: { children: React.ReactNode }) {
  //   if (loggedInUser === null) {
  //     return <Navigate to="/auth/login" />;
  //   }

  //   return children;
  // }

  function ProtectedLoggedOutRoute({
    children,
  }: {
    children: React.ReactNode;
  }) {
    if (loggedInUser) {
      return <Navigate to="/bsnss" />;
    }

    return children;
  }

  return (
    <>
      <NavBar />
      <div className="max-w-3xl m-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route
            path="/auth"
            element={
              <ProtectedLoggedOutRoute>
                <AuthLayout />
              </ProtectedLoggedOutRoute>
            }
          >
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          <Route
            path="/bsnss"
            element={
              // <ProtectedLoggedInRoute>
              <BusinessLayout />
              // </ProtectedLoggedInRoute>
            }
          >
            <Route index element={<BusinessListPage />} />
            <Route path=":bsnssId" element={<BusinessDetailsPage />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
