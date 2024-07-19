import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ContactUsPage from "./pages/ContactUsPage";
import BusinessListPage from "./pages/BusinessListPage";
import BusinessDetailsPage from "./pages/BusinessDetailsPage";
import BusinessLayout from "./pages/layouts/BusinessLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/Register" element={<RegisterPage />} />
        <Route path="/bsnss" element={<BusinessLayout />}>
          <Route index element={<BusinessListPage />} />
          <Route path="/bsnss/:bsnssId" element={<BusinessListPage />}>
            <Route index element={<BusinessDetailsPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
