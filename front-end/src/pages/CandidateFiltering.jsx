import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { X, Search } from "lucide-react";
import { ITJobs, skillsArray, candidates, preffredLocation } from "../Data/CandidateFiltering";
import CandidatesCard from "../component/CandidatesCard";



function CandidateFiltering() {
  const [selectedRole, setSelectedRole] = useState("");
  const [otherRole, setOtherRole] = useState("");
  const [isOtherRoleDisabled, setIsOtherRoleDisabled] = useState(true);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [isClose, setIsClose] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    getFieldState,
    getValues,
    watch,
    setValue,
  } = useForm();

  const skillsInput = watch("skills", ""); // watch the "skills" input

  useEffect(() => {
    if (skillsInput.trim() !== "") {
      const filterSkills = skillsArray.filter((item) =>
        item.toLowerCase().includes(skillsInput.toLowerCase())
      );
      console.log(filterSkills);
      setFilteredSkills(filterSkills);
      setIsClose(false);
    } else {
      setFilteredSkills([]); // reset if input is empty
      setIsClose(false);
    }
  }, [skillsInput]);

  const onSubmit = async (data) => {
    console.log(data);
    console.log(selectedSkills);
  };

  console.log(candidates);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="p-8 flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Smart Candidate Filtering</h1>
          <p className="italic font-light">
            No more endless scrolling through resumes. Apply filters, sort by
            performance, and instantly spot the best-fit talent for your role.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First row - 4 inputs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8">
          {/* Role */}
          <div className="flex flex-col">
            <label className="text-white text-sm mb-1 font-bold">Role</label>
            <select
              {...register("role", { required: true })}
              className="bg-transparent border border-white/10 outline-none text-white py-2 px-2 rounded-[10px] w-full h-[42px]"
              value={selectedRole}
              onChange={(e) => {
                setSelectedRole(e.target.value);
                if (e.target.value === "Other") {
                  setIsOtherRoleDisabled(false);
                } else {
                  setIsOtherRoleDisabled(true);
                  setOtherRole("");
                }
              }}
            >
              <option value="" className="text-black" disabled>
                Select your role
              </option>
              {ITJobs.map((item, index) => (
                <option className="text-black" key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>

            {selectedRole === "Other" && (
              <input
                type="text"
                placeholder="Enter your role"
                className="bg-transparent border-2 border-white/10 outline-none text-white py-2 px-2 rounded-[10px] w-full mt-2 focus:border-blue-400"
                {...register("otherRole", {
                  required: !isOtherRoleDisabled,
                })}
                disabled={isOtherRoleDisabled}
                value={otherRole}
                onChange={(e) => setOtherRole(e.target.value)}
              />
            )}
          </div>

          {/* Skills */}
          <div className="flex flex-col relative">
            <label className="text-white text-sm mb-1 font-bold">Skills</label>
            <div className="flex flex-wrap items-center gap-2 bg-transparent border border-white/10 rounded-[10px] w-full min-h-[42px] px-2">
              {selectedSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-1 rounded-full bg-white/5 text-white border border-white/10 px-2 py-1 text-xs"
                >
                  {skill}
                  <button
                    type="button"
                    aria-label={`Remove ${skill}`}
                    className="rounded-full p-0.5 hover:bg-white/10"
                    onClick={() =>
                      setSelectedSkills((prev) =>
                        prev.filter((s) => s !== skill)
                      )
                    }
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </span>
              ))}
              <input
                type="text"
                placeholder="e.g. React, Next.js, Node.js…"
                className="flex-1 bg-transparent outline-none text-white py-2 px-1 min-w-[120px]"
                autoComplete="new-skills"
                {...register("skills")}
              />
            </div>

            {/* Dropdown suggestions */}
            {filteredSkills.length > 0 && !isClose && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white/10 rounded-md shadow-lg z-10">
                <ul>
                  {filteredSkills.map((item, index) => (
                    <li
                      key={index}
                      className="p-3 cursor-pointer hover:bg-slate-100 hover:text-black"
                      onClick={() => {
                        setSelectedSkills((prev) =>
                          prev.includes(item) ? prev : [...prev, item]
                        );
                        setValue("skills", "");
                        setIsClose(true);
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <label className="text-white text-sm mb-1 font-bold">
              Location
            </label>
            <input
              type="text"
              placeholder="e.g. Jaipur"
              className="bg-transparent border border-white/10 outline-none text-white py-2 px-2 rounded-[10px] w-full h-[42px]"
              autoComplete="new-location"
              {...register("location", {
                required: true,
              })}
            />
          </div>

          {/* Preferred Location */}
          <div className="flex flex-col">
            <label className="text-white text-sm mb-1 font-bold">
              Preferred Location
            </label>
            <select
              {...register("preferredLocation", { required: true })}
              className="bg-transparent border border-white/10 outline-none text-white py-2 px-2 rounded-[10px] w-full h-[42px]"
            >
              <option value="" className="text-black" disabled>
                Select preferred location
              </option>
              {preffredLocation.map((item, index) => (
                <option className="text-black" key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Second row - keep 4 equal columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-8 pb-8">
          {/* Experience */}
          <div className="flex flex-col">
            <label className="text-white text-sm mb-1 font-bold">
              Years of Experience
            </label>
            <input
              type="text"
              placeholder="e.g. 3"
              className="bg-transparent border border-white/10 outline-none text-white py-2 px-2 rounded-[10px] w-full h-[42px]"
              autoComplete="new-experiences"
              {...register("yearOfExperience", {
                required: true,
              })}
            />
          </div>

          {/* Button aligned at the end */}
          <div className="flex items-end">
            <button className="inline-flex items-center rounded-md bg-cyan-500 px-4 py-2 text-sm font-medium text-black hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer">
              Apply Filter
            </button>
          </div>
        </div>
      </form>

      <div className="p-8">
        <h1 className="text-2xl font-bold italic">{4} Candidates Found</h1>
        <div className="flex gap-4 flex-wrap mt-10">
          {/* TODO: Add a heading before applying filter and also if no candidate found then show a heading for that too*/}
          {candidates.map((item, index) => {
            return <CandidatesCard key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default CandidateFiltering;
