import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <>
      <h1>Auth layout</h1>
      <Outlet />
    </>
  );
}

export default AuthLayout;
