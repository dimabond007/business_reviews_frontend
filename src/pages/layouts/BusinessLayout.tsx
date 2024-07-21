import { Outlet } from "react-router-dom";

function BusinessLayout() {
  return (
    <>
      <div className="">
        <Outlet />
      </div>
    </>
  );
}

export default BusinessLayout;
