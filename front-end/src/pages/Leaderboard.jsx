const students = [
  {
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    name: "John Doe",
    marks: "95/100",
    country: "USA",
    flag: "https://flagcdn.com/w40/us.png",
  },
  {
    id: 2,
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b1c0?w=40&h=40&fit=crop&crop=face",
    name: "Sarah Wilson",
    marks: "87/100",
    country: "Canada",
    flag: "https://flagcdn.com/w40/ca.png",
  },
  {
    id: 3,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    name: "Mike Johnson",
    marks: "92/100",
    country: "Australia",
    flag: "https://flagcdn.com/w40/au.png",
  },
  {
    id: 4,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    name: "Emma Brown",
    marks: "89/100",
    country: "United Kingdom",
    flag: "https://flagcdn.com/w40/gb.png",
  },
  {
    id: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    name: "David Lee",
    marks: "94/100",
    country: "Germany",
    flag: "https://flagcdn.com/w40/de.png",
  },
];

function Leaderboard() {
  return (
    <div>
      <div className="h-[100vh] m-5">
        <div className="flex justify-between items-center w-full">
          <div>
            <h1 className="text-3xl font-bold">Leaderboard - DevMetricAI</h1>
          </div>
          <div className="flex gap-3">
            <button className="rounded-[5px] border-2 text-center border-[#152F56] disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black p-3 text-xs w-32 hover:bg-[#152F56] transition-all duration-300 ease-in-out cursor-pointer focus:bg-[#152F56]">
              Today
            </button>
            <button className="rounded-[5px] border-2 text-center border-[#152F56] disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black p-3 text-xs w-32 hover:bg-[#152F56] transition-all duration-300 ease-in-out cursor-pointer focus:bg-[#152F56]">
              Weekly
            </button>
            <button className="rounded-[5px] border-2 text-center border-[#152F56] disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black p-3 text-xs w-32 hover:bg-[#152F56] transition-all duration-300 ease-in-out cursor-pointer focus:bg-[#152F56]">
              Monthly
            </button>
          </div>
        </div>
        <div className=" border border-neutral-800 bg-[neutral-900] text-white overflow-hidden mt-10">
          <table className="w-full">
            <thead className="bg-[#0C1A31]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider">
                  #
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider">
                  Candidate
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-neutral-400 uppercase tracking-wider">
                  Marks
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-neutral-400 uppercase tracking-wider">
                  Location
                </th>
              </tr>
            </thead>

            <tbody className=" divide-neutral-800">
              {students.map((student, index) => (
                <tr
                  key={student.id}
                  className="hover:bg-neutral-800/40 transition-colors"
                >
                  <td
                    className={`px-6 py-4 text-sm text-neutral-100 ${
                      index === 0
                        ? "w-9 h-9 rounded-[50px] bg-[#DBA11C]"
                        : index === 1
                        ? "w-9 h-9 rounded-[50px] bg-[#878585]"
                        : index === 2
                        ? "w-9 h-9 rounded-[50px] bg-[#CD7F32]"
                        : ""
                    }`}
                  >
                    {student.id}
                  </td>

                  {/* Candidate: avatar + full name in same position without extra column gap */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-0">
                      <img
                        src={
                          student.avatar ||
                          "/placeholder.svg?height=36&width=36&query=person-avatar" ||
                          "/placeholder.svg"
                        }
                        alt={`${student.name} avatar`}
                        className="w-9 h-9 rounded-full object-cover"
                      />
                      {/* keep name directly next to avatar (no extra gap) */}
                      <span className="text-sm font-medium text-neutral-50 pl-2">
                        {student.name}
                      </span>
                    </div>
                  </td>

                  {/* Marks right-aligned */}
                  <td className="px-6 py-4 text-sm text-neutral-100 font-semibold text-right">
                    {student.marks}
                  </td>

                  {/* Location (flag + country) right-aligned */}
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <img
                        src={
                          student.flag ||
                          "/placeholder.svg?height=16&width=24&query=country-flag" ||
                          "/placeholder.svg"
                        }
                        alt={`${student.country} flag`}
                        className="w-6 h-4 object-cover rounded"
                      />
                      <span className="text-sm text-neutral-100">
                        {student.country}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
