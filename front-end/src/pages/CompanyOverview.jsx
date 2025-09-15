import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import axios from "../axios";

function CompanyOverview() {
  const [companyData, setCompanyData] = useState({});
  const [dashboardStats, setDashboardStats] = useState([
    {
      id: 1,
      title: "Total Candidates Available",
      subtext: "Loading...",
    },
    {
      id: 2,
      title: "New Candidates This Week",
      subtext: "Loading...",
    },
    {
      id: 3,
      title: "Your Shortlisted Candidates",
      subtext: "5 saved",
    },
    {
      id: 4,
      title: "Active Job Postings",
      subtext: "0 Jobs",
    },
  ]);

  useEffect(() => {
    const companyToken = localStorage.getItem("company_token");
    if (companyToken) {
      const decoded = jwtDecode(companyToken);
      setCompanyData(decoded);
    }

    // Fetch stats from API
    const fetchStats = async () => {
      try {
        const [totalRes, recentRes] = await Promise.all([
          axios.get("/api/users/count"),
          axios.get("/api/users/recent-count")
        ]);

        const totalData = totalRes.data;
        const recentData = recentRes.data;

        setDashboardStats(prevStats => prevStats.map(stat => {
          if (stat.id === 1) {
            return { ...stat, subtext: `${totalData.count} candidates` };
          } else if (stat.id === 2) {
            return { ...stat, subtext: `${recentData.count} new profiles` };
          }
          return stat;
        }));
      } catch (error) {
        console.error("Error fetching stats:", error);
        setDashboardStats(prevStats => prevStats.map(stat => {
          if (stat.id === 1) {
            return { ...stat, subtext: "Error loading" };
          } else if (stat.id === 2) {
            return { ...stat, subtext: "Error loading" };
          }
          return stat;
        }));
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-[#010301]">
      <div className="flex items-center justify-between">
        <div className="p-8 flex flex-col gap-2">
          <h1 className="text-4xl font-bold">
            Find, Filter, and Hire Smarter.
          </h1>
          <p className="italic font-light">
            Welcome back, {companyData?.company?.name}! Ready to find your next
            hire?
          </p>
        </div>
        <div>
          <div className="flex gap-2 items-center mr-[30px] ">
            <button className="rounded-[50px] border-2 border-white/10 p-3 text-xs w-32 hover:bg-[#152F56] transition-all">
              Search Candidate
            </button>
            <button className="rounded-[50px] border-2 border-white/10 p-3 text-xs w-32 hover:bg-[#152F56] transition-all">
              Post a Job
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8">
        {dashboardStats.map(({ id, title, subtext }) => (
          <div
            key={id}
            className="p-16 rounded-2xl shadow-2xl shadow-gray-900 border-2 border-white/10 text-center text-white"
          >
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm mt-2">{subtext}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyOverview;
