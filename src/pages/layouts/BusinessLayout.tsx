import { Outlet } from "react-router-dom";

function BusinessLayout() {
  return (
    <>
      <div className="px-6">
        <Outlet />
      </div>
    </>
  );
}

export default BusinessLayout;
