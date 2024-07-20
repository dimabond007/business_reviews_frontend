import { useAuth } from "@/context/AuthContext";
import { Outlet } from "react-router-dom";

function BusinessListPage() {
  const { loggedInUser } = useAuth();

  return (
    <>
      <h1>BusinessListPage</h1>
      <Outlet />
    </>
  );
}

export default BusinessListPage;
