import SideNavigation from "../component/SideNavigation";
import CompanyNavbar from "../component/CompanyNavbar"; // 👈 import your CompanyNavbar
import { Outlet } from "react-router-dom";

import {
  FaTachometerAlt,
  FaUserCheck,
  FaBriefcase,
  FaCog,
} from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

const sideLink = [
  {
    icon: <FaTachometerAlt />,
    text: "Overview",
    link: "/company/dashboard-overview",
  },
  {
    icon: <FaUserCheck />,
    text: "Candidate Filtering",
    link: "/company/candidate-filtering",
  },
  {
    icon: <FaBriefcase />,
    text: "Job Posting",
    link: "/company/job-posting/1",
  },
  {
    icon: <FaCog />,
    text: "Setting",
    link: "/company/setting",
  },
  { icon: <BiLogOut />, text: "Logout", link: "/company" },
];

function CompanyDashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-[#010301] text-white">
      {/* ✅ Top Navbar */}
      <header className="sticky top-0 z-50 bg-[#010301]">
        <CompanyNavbar />
      </header>

      <div className="flex flex-1">
        {/* ✅ Sidebar */}
        <SideNavigation sideLink={sideLink} />

        {/* ✅ Scrollable Content Area */}
        <div className="w-full md:ml-64 min-h-screen overflow-y-auto bg-[#010301]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default CompanyDashboard;
