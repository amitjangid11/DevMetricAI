const dashboardStats = [
  {
    id: 1,
    title: "Total Candidates Available",
    subtext: "1,250 candidates",
  },
  {
    id: 2,
    title: "New Candidates This Week",
    subtext: "32 new profiles",
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
];

function CompanyOverview() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="p-8 flex flex-col gap-2">
          <h1 className="text-4xl font-bold">
            Find, Filter, and Hire Smarter.
          </h1>
          <p className="italic font-light">
            Welcome back, {"Google"}! Ready to find your next hire?
          </p>
        </div>
        <div>
          <div className="flex gap-2 items-center mr-[30px] ">
            <button className="rounded-[50px] border-2 border-white/10 text-center  disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black p-3 text-xs w-32 hover:bg-[#152F56] transition-all duration-300 ease-in-out cursor-pointer">
              Search Candidate
            </button>
            <button className="rounded-[50px] border-2 border-white/10 text-center  disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black p-3 text-xs w-32 hover:bg-[#152F56] transition-all duration-300 ease-in-out cursor-pointer">
              Post a Job
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-8">
        {dashboardStats.map(({ id, title, subtext }) => (
          <div
            key={id}
            className="p-16 rounded-2xl shadow-2xl shadow-gray-900 border-2 border-white/10 text-center  text-white"
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
