import React, { useState } from "react";
import { employmentTypes, jobDepartments } from "../Data/JobPosting";
import { useForm } from "react-hook-form";

function JobBasicForm() {
  const { register, handleSubmit, reset, getFieldState, getValues } = useForm();
  const [selectedRole, setSelectedRole] = useState("");
  const [otherRole, setOtherRole] = useState("");
  const [isOtherRoleDisabled, setIsOtherRoleDisabled] = useState(true);
  return (
    <form action="" className="flex flex-col gap-5 justify-center items-center">
      <div className="flex flex-col  w-[25vw]">
        <label className="text-white text-sm mb-1 font-bold mt-6">
          Job Title
        </label>
        <input
          type="text"
          placeholder="e.g. Full Stack Web Developer"
          autoFocus
          className="bg-transparent border-2 border-white/10 outline-none text-white py-2 px-2 rounded-[10px] focus:border-blue-400"
          autoComplete="new-title"
          {...register("jobTitle", {
            required: true,
          })}
        />
      </div>
      <div className="flex flex-col  w-[25vw]">
        <label className="text-white text-sm mb-1 font-bold">Department</label>
        <select
          {...register("department", { required: true })}
          className="bg-transparent border-2 border-white/10 outline-none text-white py-2 px-2 rounded-[10px]  focus:border-blue-400"
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
            Select your department
          </option>
          {jobDepartments.map((item, index) => (
            <option className="text-black" key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        {selectedRole === "Other" && (
          <input
            type="text"
            placeholder="Enter your department"
            className="bg-transparent border-2 border-white/10 outline-none text-white py-2 px-2 rounded-[10px]  mt-2 focus:border-blue-400"
            {...register("otherRole", {
              required: !isOtherRoleDisabled,
            })}
            disabled={isOtherRoleDisabled}
            value={otherRole}
            onChange={(e) => setOtherRole(e.target.value)}
          />
        )}
      </div>
      <div className="flex flex-col w-[25vw]">
        <label className="text-white text-sm mb-1 font-bold mt-6">
          Location
        </label>
        <input
          type="text"
          placeholder="e.g. Jaipur"
          autoFocus
          className="bg-transparent border-2 border-white/10 outline-none text-white py-2 px-2 rounded-[10px]  focus:border-blue-400"
          autoComplete="new-location"
          {...register("location", {
            required: true,
          })}
        />
      </div>
      <div className="flex flex-col  w-[25vw]">
        <label className="text-white text-sm mb-1 font-bold">Employment</label>
        <select
          {...register("employment", { required: true })}
          className="bg-transparent border-2 border-white/10 outline-none text-white py-2 px-2 rounded-[10px]  focus:border-blue-400"
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
            Select your Employment type
          </option>
          {employmentTypes.map((item, index) => (
            <option className="text-black" key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        {selectedRole === "Other" && (
          <input
            type="text"
            placeholder="Enter your employment type"
            className="bg-transparent border-2 border-white/10 outline-none text-white py-2 px-2 rounded-[10px]  mt-2 focus:border-blue-400"
            {...register("otherRole", {
              required: !isOtherRoleDisabled,
            })}
            disabled={isOtherRoleDisabled}
            value={otherRole}
            onChange={(e) => setOtherRole(e.target.value)}
          />
        )}
      </div>
    </form>
  );
}

export default JobBasicForm;
