import { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "../axios";
import toast from "react-hot-toast";
import { preffredLocation } from "../Data/CandidateFiltering";
import { jwtDecode } from "jwt-decode";

const ITJobs = [
  "Full Stack Web Developer",
  "Frontend Developer",
  "Backend Developer",
  "Software Engineer",
  "Mobile App Developer",
  "DevOps Engineer",
  "Cloud Engineer",
  "Cybersecurity Analyst",
  "Data Scientist",
  "Machine Learning Engineer",
  "AI Engineer",
  "Blockchain Developer",
  "Game Developer",
  "UI/UX Designer",
  "Embedded Systems Engineer",
  "AR/VR Developer",
  "Big Data Engineer",
  "Database Administrator",
  "Network Engineer",
  "IT Support Specialist",
  "System Administrator",
  "Quality Assurance Engineer",
  "Site Reliability Engineer",
  "IoT Developer",
  "Technical Product Manager",
  "Software Architect",
  "Other",
];

function CompleteProfile() {
  const [selectedRole, setSelectedRole] = useState("");
  const [otherRole, setOtherRole] = useState("");
  const [isOtherRoleDisabled, setIsOtherRoleDisabled] = useState(true);
  const [email, setEmail] = useState("");

  const { register, handleSubmit, reset, getFieldState, getValues } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const initialToken = localStorage.getItem("initial-token");
    const decoded = jwtDecode(initialToken);

    setEmail(decoded.email);
  }, []);

  async function onSubmit(data) {
    try {
      const finalData = {
        ...data,
        role: data.role === "Other" ? data.otherRole : data.role,
        email: email,
      };

      console.log(finalData);

      delete finalData.otherRole;

      const res = await axios.post(`/api/complete-profile`, finalData);

      if (res.status === 200) {
        localStorage.setItem("auth_token", res.data.token);
        toast.success("Welcome aboard! Your account is ready.");
        navigate("/");
      }
      
    } catch (error) {
      console.error("Signup Error:", error);
      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-64 md:h-auto bg-[url('/images/signin.avif')] bg-cover bg-center flex justify-center items-center flex-col text-white gap-5 px-8" />

      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 md:px-20 py-10">
        <h1 className="text-4xl text-white font-bold mb-8">
          Complete Your Profile
        </h1>

        <form className="space-y-6 mt-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label className="text-white text-sm mb-1 font-bold">Role</label>
            <select
              {...register("role", { required: true })}
              className="bg-transparent border-2 border-white/10 outline-none text-white py-2 px-2 rounded-[10px] w-full focus:border-blue-400"
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

          <div className="flex flex-col">
            <label className="text-white text-sm mb-1 font-bold">
              Location
            </label>
            <input
              type="text"
              placeholder="e.g. Jaipur"
              className="bg-transparent border-2 border-white/10 outline-none text-white py-2 px-2 rounded-[10px] w-full focus:border-blue-400"
              autoComplete="new-location"
              {...register("location", {
                required: true,
              })}
            />

            <div className="flex flex-col mt-4">
              <label className="text-white text-sm mb-1 font-bold">
                Preferred Location
              </label>
              <select
                {...register("preferredLocation", { required: true })}
                className="bg-transparent border-2 border-white/10 outline-none text-white py-2 px-2 rounded-[10px] w-full focus:border-blue-400"
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
          <div className="flex flex-col">
            <label className="text-white text-sm mb-1 font-bold">
              Year of Experiences
            </label>
            <input
              type="number"
              placeholder="e.g. 3"
              className="bg-transparent border-2 border-white/10 outline-none text-white py-2 px-2 rounded-[10px] w-full focus:border-blue-400"
              autoComplete="new-experiences"
              {...register("yearOfExperiences", {
                required: true,
              })}
            />
          </div>

          <div className="mt-6">
            <button className="bg-white text-black font-semibold py-3 px-14 rounded-full hover:bg-gray-300 transition cursor-pointer w-full sm:w-auto">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfile;
