import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "../axios";
import Spinner from "../component/Spinner";

// [
// {
// "email": "affansayeed234@gmail.com",
// "highestMarks": 5,
// "interviewCount": 2,
// "location": "Jaipur",
// "name": "Affan Sayeed",
// "picture": "https://msssajpqjooeggljlurm.supabase.co/storage/v1/object/public/profile-image/1757073244362-AboutImage.jpg"
// }
// ]

const rangeData = [
  {
    id: 1,
    name: "Today",
  },
  {
    id: 2,
    name: "Weekly",
  },
  {
    id: 3,
    name: "Monthly",
  },
];

function Leaderboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const range = searchParams.get("range") || "today";
  const [students, setStudents] = useState([]);
  const [sortStudentsByMarks, setSortStudentsByMarks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchLeaderBoardData() {
      try {
        setIsLoading(true);
        const response = await axios.get("/api/get-leaderboard-data");
        setStudents(response.data.leaderboardData);
        console.log(response);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchLeaderBoardData();
  }, []);

  useEffect(() => {
    const sortedStudents = students.sort(
      (a, b) => b.marks.split("/")[0] - a.marks.split("/")[0]
    );

    setSortStudentsByMarks(sortedStudents);
  }, [students]);

  if (isLoading) return <Spinner message="Loading..." />;

  return (
    <div>
      <div className="h-96 m-5">
        <div className="flex justify-between items-center w-full">
          <div>
            <h1 className="text-3xl font-bold">Leaderboard - DevMetricAI</h1>
          </div>
          <div className="flex gap-3">
            {rangeData.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`rounded-[5px] border-2 text-center border-[#152F56] disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black p-3 text-xs w-32 hover:bg-[#152F56] transition-all duration-300 ease-in-out cursor-pointer  ${
                    range.toLowerCase() === item.name.toLowerCase()
                      ? "bg-[#152F56]"
                      : ""
                  }`}
                  onClick={() =>
                    setSearchParams({ range: item.name.toLowerCase() })
                  }
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
        <div className="border border-neutral-800 bg-neutral-900 text-white overflow-hidden mt-10">
          <table className="w-full table-fixed">
            <thead className="bg-[#0C1A31]">
              <tr>
                <th className="w-16 px-6 py-3 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider">
                  #
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-neutral-400 uppercase tracking-wider">
                  Candidate
                </th>
                <th className="w-24 px-6 py-3 text-right text-xs font-medium text-neutral-400 uppercase tracking-wider">
                  Marks
                </th>
                <th className="w-32 px-6 py-3 text-right text-xs font-medium text-neutral-400 uppercase tracking-wider">
                  Location
                </th>
              </tr>
            </thead>

            <tbody className="bg-[#010301]">
              {sortStudentsByMarks.map((student, index) => (
                <tr
                  key={index}
                  className="hover:bg-neutral-800/40 transition-colors"
                >
                  {/* ID with extra space to separate from candidate */}
                  <td
                    className={`w-6 h-6 flex items-center justify-center mx-auto mt-5 ${
                      index === 0
                        ? "rounded-full bg-[#DBA11C]"
                        : index === 1
                        ? "rounded-full bg-[#878585]"
                        : index === 2
                        ? "rounded-full bg-[#CD7F32]"
                        : "text-center"
                    }`}
                  >
                    <span className="text-xs">{index + 1}</span>
                  </td>

                  {/* Candidate avatar + name with more spacing */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={
                          student.picture ||
                          "/placeholder.svg?height=36&width=36&query=person-avatar"
                        }
                        alt={`${student.name} avatar`}
                        className="w-9 h-9 rounded-full object-cover"
                      />
                      <span className="text-sm font-medium text-neutral-50">
                        {student.name}
                      </span>
                    </div>
                  </td>

                  {/* Marks right aligned */}
                  <td className="w-24 px-6 py-4 text-sm text-neutral-100 font-semibold text-right">
                    {student.highestMarks}/100
                  </td>

                  {/* Location right aligned */}
                  <td className="w-32 px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {/* <img
                        src={
                          student.flag ||
                          "/placeholder.svg?height=16&width=24&query=country-flag"
                        }
                        alt={`${student.country} flag`}
                        className="w-6 h-4 object-cover rounded"
                      /> */}
                      {/* Optional: show text country */}
                      <span className="text-sm text-neutral-100">{student.location}</span>
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
