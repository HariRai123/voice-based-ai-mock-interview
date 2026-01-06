import { Link, Outlet } from "react-router";
import Logo from "@/public/navbarlogo.png";

const Dashboard = () => {
  return (
    <div >
      <nav className="flex items-center">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="AI Mock Interview Logo"
            className="h-10 w-auto"
          />
          <h2 className="text-primary-100">AI Mock</h2>
        </Link>
      </nav>
      <Outlet/>
    </div>
  );
};

export default Dashboard;
