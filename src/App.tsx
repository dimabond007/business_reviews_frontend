import { Navigate, Route, Routes, useLocation } from "react-router-dom";
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

function App() {
  const { loggedInUser } = useAuth();
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);

  function ProtectedLoggedInRoute({ children }: { children: React.ReactNode }) {
    if (loggedInUser === null) {
      return <Navigate to="/auth/login" />;
    }

    return children;
  }
  function ProtectedLoggedOutRoute({
    children,
  }: {
    children: React.ReactNode;
  }) {
    // in real world, loggedInUser will consume from AuthContext
    if (loggedInUser) {
      return <Navigate to="/bsnss" />;
    }

    return children;
  }
  return (
    <>
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
            <ProtectedLoggedInRoute>
              <BusinessLayout />
            </ProtectedLoggedInRoute>
          }
        >
          <Route index element={<BusinessListPage />} />
          <Route path=":bsnssId" element={<BusinessListPage />}>
            <Route index element={<BusinessDetailsPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
