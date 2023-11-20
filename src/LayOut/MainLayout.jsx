import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto font-poppins">
      <Outlet></Outlet>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default MainLayout;
