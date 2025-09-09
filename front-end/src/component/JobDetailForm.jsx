import React, { useState } from "react";
import { useForm } from "react-hook-form";

function JobDetailForm() {
  const { register, handleSubmit, reset, getFieldState, getValues } = useForm();
  const [inputBox, setInputBox] = useState(Array(2).fill(""));

  return (
    <form action="" className="flex flex-col gap-5 justify-center items-center">
      <div className="flex flex-col w-[25vw]">
        <label className="text-white text-sm mb-1 font-bold">
          Job Description
        </label>
        <textarea
          {...register("jobDesc")}
          placeholder="Enter Job Description..."
          className="bg-transparent border-2 border-white/10 outline-none text-white py-2 px-2 rounded-[5px]  resize-none"
          rows={5}
          autoComplete="off"
        />
      </div>
      <div className="flex flex-col w-[25vw]">
        <label className="text-white text-sm mb-1 font-bold">
          Key Responsibilities
        </label>
        {inputBox.map((item, index) => {
          return (
            <input
              key={index}
              type="text"
              placeholder="e.g. Full Stack Web Developer"
              autoFocus
              className="bg-transparent border-2 border-white/10 outline-none mb-3 text-white py-2 px-2 rounded-[10px] focus:border-blue-400"
              autoComplete="new-responsibilities"
              {...register("responsibilities", {
                required: true,
              })}
            />
          );
        })}
        <div className="flex items-center justify-end">
          <button className="w-10 h-10 bg-gray-800 text-white rounded-xl cursor-pointer hover:bg-gray-700">
            +
          </button>
        </div>
      </div>

      <div className="flex flex-col  w-[25vw]">
        <label className="text-white text-sm mb-1 font-bold mt-6">
          Years of Experience
        </label>
        <input
          type="number"
          placeholder="e.g. 3"
          autoFocus
          className="bg-transparent border-2 border-white/10 outline-none text-white py-2 px-2 rounded-[10px] focus:border-blue-400"
          autoComplete="new-experience"
          {...register("years-of-experience", {
            required: true,
          })}
        />
      </div>
    </form>
  );
}

export default JobDetailForm;
