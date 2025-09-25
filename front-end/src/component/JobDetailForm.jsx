import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useJobForm } from "../context/JobFormProvider";

function JobDetailForm({ registerSave }) {
  const { register, handleSubmit, reset, getFieldState, getValues } = useForm();
  const [inputBox, setInputBox] = useState(["", ""]); // start with 2
  const { updateForm, jobPostData } = useJobForm();

  console.log("jobPostData", jobPostData);

  // 🔹 handle input change
  const handleChange = (index, value) => {
    const updated = [...inputBox];
    updated[index] = value;
    setInputBox(updated);
  };

  // 🔹 add new empty input
  const addInputBox = (e) => {
    e.preventDefault(); // prevent form refresh
    setInputBox([...inputBox, ""]);
  };

  useEffect(() => {
    registerSave.current = () => {
      const values = getValues();
      values.responsibilities = inputBox;
      console.log("value", values);
      if (!values.jobDesc || !values.yearsOfExperience) {
        alert("Fill all required fields!");
        return false;
      }
      updateForm("jobDetailForm", values);
      return true;
    };
  }, [registerSave, updateForm, getValues, inputBox]);

  return (
    <form className="flex flex-col gap-5 justify-center items-center">
      {/* Job Description */}
      <div className="flex flex-col w-[25vw]">
        <label className="text-white text-sm mb-1 font-bold">
          Job Description
        </label>
        <textarea
          {...register("jobDesc")}
          placeholder="Enter Job Description..."
          className="bg-transparent border-2 border-white/10 outline-none text-white py-2 px-2 rounded-[5px] resize-none"
          rows={5}
          autoComplete="off"
        />
      </div>

      {/* Responsibilities */}
      <div className="flex flex-col w-[25vw]">
        <label className="text-white text-sm mb-1 font-bold">
          Key Responsibilities
        </label>
        {inputBox.map((item, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Responsibility #${index + 1}`}
            value={item}
            onChange={(e) => handleChange(index, e.target.value)}
            className="bg-transparent border-2 border-white/10 outline-none mb-3 text-white py-2 px-2 rounded-[10px] focus:border-blue-400"
            autoComplete="off"
          />
        ))}
        <div className="flex items-center justify-end">
          <button
            onClick={addInputBox}
            className="w-10 h-10 bg-gray-800 text-white rounded-xl cursor-pointer hover:bg-gray-700"
          >
            +
          </button>
        </div>
      </div>

      {/* Years of Experience */}
      <div className="flex flex-col w-[25vw]">
        <label className="text-white text-sm mb-1 font-bold mt-6">
          Years of Experience
        </label>
        <input
          type="number"
          placeholder="e.g. 3"
          className="bg-transparent border-2 border-white/10 outline-none text-white py-2 px-2 rounded-[10px] focus:border-blue-400"
          autoComplete="off"
          {...register("yearsOfExperience", { required: true })}
        />
      </div>
    </form>
  );
}

export default JobDetailForm;
