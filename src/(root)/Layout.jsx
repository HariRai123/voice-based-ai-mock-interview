import { Outlet } from "react-router";
import { Toaster } from "sonner";

const RootLayout = () => {
  return (
    <div className="min-h-screen w-full pattern bg-background text-foreground">
      <Outlet />
      
      <Toaster />
    </div>
  );
};

export default RootLayout;
