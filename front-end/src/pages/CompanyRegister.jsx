import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const IndustryTypes = [
  "Information Technology (IT) & Software",
  "E-commerce & Retail",
  "Finance & Banking",
  "Healthcare & Biotechnology",
  "Education & E-learning",
  "Telecommunications",
  "Manufacturing & Engineering",
  "Energy & Utilities",
  "Transportation & Logistics",
  "Media & Entertainment",
  "Real Estate & Construction",
  "Agriculture & Food",
  "Government & Public Sector",
  "Travel & Hospitality",
  "Automotive",
  "Legal & Consulting",
  "Non-Profit & NGO",
  "Pharmaceuticals",
  "Marketing & Advertising",
  "Other",
];

function CompanyRegister() {
  const { register, handleSubmit, reset, getFieldState, getValues } = useForm({
    defaultValues: {
      webUri: "https://",
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [otherRole, setOtherRole] = useState("");
  const [isOtherRoleDisabled, setIsOtherRoleDisabled] = useState(true);

  const navigate = useNavigate();

  import axios from "axios";
  import { toast } from "react-hot-toast";
  import { useNavigate } from "react-router-dom";

  async function onSubmit(data) {
    try {
      // Send data to backend
      const res = await axios.post("/api/company/register", data);

      toast.success(
        res.data?.message ||
          "Registration successful! Your company account has been created. Please verify your email to proceed."
      );

      // Redirect to email verification page and pass email state
      navigate("/verify-email", {
        state: {
          email: data.email,
        },
      });
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
          Create Your Account
        </h1>
        <p className="text-white">
          Already have a account{" "}
          <Link to="/company/login" className="text-[#1509F6]">
            {" "}
            Sign in
          </Link>
        </p>

        <form className="space-y-6 mt-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label className="text-white text-sm mb-1 font-bold mt-6">
              Organization Name
            </label>
            <input
              type="text"
              placeholder="e.g. DevMetricAI"
              autoFocus
              className="bg-transparent border-4 border-[#0C1A31] outline-none text-white py-2 px-2 rounded-[10px] w-full"
              autoComplete="new-name"
              {...register("name", {
                required: true,
              })}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white text-sm mb-1 font-bold">
              Official Website
            </label>
            <input
              type="text"
              placeholder="e.g. https://devmetricai.com"
              autoFocus
              className="bg-transparent border-4 border-[#0C1A31] outline-none text-white py-2 px-2 rounded-[10px] w-full"
              autoComplete="new-name"
              {...register("webUri", {
                required: true,
              })}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-sm mb-1 font-bold">
              Official Email Address
            </label>
            <input
              type="email"
              placeholder="e.g. info@devmetricai.com"
              className="bg-transparent border-4 border-[#0C1A31] outline-none text-white py-2 px-2 rounded-[10px] w-full"
              autoComplete="new-email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              })}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white text-sm mb-1 font-bold">
              Industry
            </label>
            <select
              {...register("industryType", { required: true })}
              className="bg-transparent border-4 border-[#0C1A31] outline-none text-white py-2 px-2 rounded-[10px] w-full"
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
                Select your Industry type
              </option>
              {IndustryTypes.map((item, index) => (
                <option className="text-black" key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>

            {selectedRole === "Other" && (
              <input
                type="text"
                placeholder="Enter your industry name"
                className="bg-transparent border-4 border-[#0C1A31] outline-none text-white py-2 px-2 rounded-[10px] w-full mt-2"
                {...register("otherIndustry", {
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
              Headquarters Location
            </label>
            <input
              type="text"
              placeholder="e.g. Jaipur"
              className="bg-transparent border-4 border-[#0C1A31] outline-none text-white py-2 px-2 rounded-[10px] w-full"
              autoComplete="new-email"
              {...register("location", {
                required: true,
              })}
            />
          </div>

          <div className="flex flex-col relative">
            <label className="text-white text-sm mb-1 font-bold">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="bg-transparent border-4 border-[#0C1A31] outline-none text-white py-2 px-2 rounded-[10px] pr-8 w-full"
              autoComplete="new-password"
              {...register("password", {
                required: true,
                min: 8,
                max: 20,
              })}
            />
            {!showPassword ? (
              <FiEyeOff
                className="absolute right-4 top-10 cursor-pointer text-white"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FiEye
                className="absolute right-4 top-10 cursor-pointer text-white"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
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

export default CompanyRegister;
