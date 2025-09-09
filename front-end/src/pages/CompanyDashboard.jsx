import SideNavigation from "../component/SideNavigation";
import { Outlet } from "react-router-dom";

import {
  FaTachometerAlt,
  FaUserCheck,
  FaBriefcase,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

const sideLink = [
  {
    icon: <FaTachometerAlt />, // Dashboard/Overview icon
    text: "Overview",
    link: "/app/company/dashboard-overview",
  },
  {
    icon: <FaUserCheck />, // Candidate filtering icon
    text: "Candidate Filtering",
    link: "/app/company/candidate-filtering",
  },
  {
    icon: <FaBriefcase />, // Job posting icon
    text: "Job Posting",
    link: "/app/company/job-posting/1",
  },
  {
    icon: <FaCog />, // Settings gear
    text: "Setting",
    link: "/app/company/setting",
  },
 { icon: <BiLogOut />, text: "Logout", link: "/app" },
];

function CompanyDashboard() {
  return (
    <div className="h-screen flex">
      {/* Fixed Sidebar (always visible on desktop, conditionally on mobile) */}
      <SideNavigation sideLink={sideLink} />

      {/* Scrollable Content Area */}
      <div className="w-full md:ml-64 h-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default CompanyDashboard;
