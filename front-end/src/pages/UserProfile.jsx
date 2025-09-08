import { FaRegUser, FaViacoin } from "react-icons/fa";
import SideNavigation from "../component/SideNavigation";
import { Outlet } from "react-router-dom";
import { VscPreview } from "react-icons/vsc";
import { GrDocumentPerformance } from "react-icons/gr";
import { HiSparkles } from "react-icons/hi2";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";

const sideLink = [
  {
    icon: <FaRegUser />,
    text: "Profile",
    link: "/app/profile/profile-details",
  },
  {
    icon: <VscPreview />,
    text: "Previous Interview",
    link: "/app/profile/previous-interview",
  },
  {
    icon: <GrDocumentPerformance />,
    text: "Performance",
    link: "/app/profile/performance",
  },
  {
    icon: <HiSparkles />,
    text: "Suggestions",
    link: "/app/profile/suggestions",
  },
  {
    icon: <FaViacoin />,
    text: "Your DevCredits",
    link: "/app/profile/devcredits",
  },
  {
    icon: <IoIosNotificationsOutline />,
    text: "Notifications",
    link: "/app/profile/notifications",
  },
  { icon: <BiLogOut />, text: "Logout", link: "/app" },
];

function UserProfile() {
  return (
    <div className="h-screen flex">
      {/* Fixed Sidebar (always visible on desktop, conditionally on mobile) */}
      <SideNavigation sideLink={sideLink}/>

      {/* Scrollable Content Area */}
      <div className="w-full md:ml-64 h-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default UserProfile;
