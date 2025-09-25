import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useJobForm } from "../src/context/JobFormProvider";

function ApplicationSettingForm({ registerSave }) {
  const { register, handleSubmit, reset, getFieldState, getValues } = useForm();
  const [applyMethod, setApplyMethod] = useState("");
  const { updateForm, jobPostData } = useJobForm();

  useEffect(() => {
    registerSave.current = () => {
      const values = getValues();

      if (!values.applicationDeadline ||  !applyMethod) {
        alert("Fill all required fields!");
        return false;
      }

      // Build finalData based on applyMethod
      let howToApplyData = {};
      if (applyMethod === "email") {
        if (!values.howToApplyEmail) {
          alert("Please enter an email address!");
          return false;
        }
        howToApplyData = { method: "email", value: values.howToApplyEmail };
      } else if (applyMethod === "website") {
        if (!values.howToApplyWebsite) {
          alert("Please enter the application URL!");
          return false;
        }
        howToApplyData = { method: "website", value: values.howToApplyWebsite };
      } else if (applyMethod === "linkedin") {
        if (!values.howToApplyLinkedIn) {
          alert("Please enter the LinkedIn job URL!");
          return false;
        }
        howToApplyData = {
          method: "linkedin",
          value: values.howToApplyLinkedIn,
        };
      } else if (applyMethod === "other") {
        if (!values.howToApplyOther) {
          alert("Please provide custom instructions!");
          return false;
        }
        howToApplyData = { method: "other", value: values.howToApplyOther };
      }

      const finalData = {
        applicationDeadline: values.applicationDeadline,
        howToApply: howToApplyData,
      };

      updateForm("applicationSettingForm", finalData);
      return true;
    };
  }, [getValues, updateForm, registerSave, applyMethod]);

  console.log("jobPostData", jobPostData);

  return (
    <form action="" className="flex flex-col gap-5 justify-center items-center">
      <div className="flex flex-col  w-[25vw]">
        <label className="text-white text-sm mb-1 font-bold mt-6">
          Application Deadline
        </label>
        <input
          type="date"
          className="bg-transparent border-2 border-white/10 outline-none text-white py-2 px-2 rounded-[10px] focus:border-blue-400 [color-scheme:dark]"
          {...register("applicationDeadline", { required: true })}
        />
      </div>

      <div className="flex flex-col w-[25vw]">
        <label className="text-white text-sm mb-1 font-bold mt-6">
          How to Apply
        </label>

        {/* Dropdown */}
        <select
          value={applyMethod}
          onChange={(e) => setApplyMethod(e.target.value)}
          className="bg-transparent border-2 border-white/10 outline-none text-white py-2 px-2 rounded-[10px] focus:border-blue-400 [color-scheme:dark]"
        >
          <option value="" disabled className="bg-black text-white">
            Select an option
          </option>
          <option value="website" className="bg-black text-white">
            Apply via Company Website
          </option>
          <option value="email" className="bg-black text-white">
            Apply via Email
          </option>
          <option value="linkedin" className="bg-black text-white">
            Apply via Linkedin
          </option>
        </select>

        {/* Conditional Input Fields */}
        {applyMethod === "email" && (
          <input
            type="email"
            placeholder="Enter HR email"
            className="mt-3 bg-transparent border-2 border-white/10 outline-none text-white py-2 px-2 rounded-[10px] focus:border-blue-400"
            {...register("howToApplyEmail", { required: true })}
          />
        )}

        {applyMethod === "website" && (
          <input
            type="url"
            placeholder="Enter application URL"
            className="mt-3 bg-transparent border-2 border-white/10 outline-none text-white py-2 px-2 rounded-[10px] focus:border-blue-400"
            {...register("howToApplyWebsite", { required: true })}
          />
        )}

        {applyMethod === "linkedin" && (
          <input
            type="url"
            placeholder="Paste LinkedIn Job URL"
            className="mt-3 bg-transparent border-2 border-white/10 outline-none text-white py-2 px-2 rounded-[10px] focus:border-blue-400"
            {...register("howToApplyLinkedIn", { required: true })}
          />
        )}

        {applyMethod === "other" && (
          <textarea
            placeholder="Write custom instructions (e.g. Walk-in address, call HR, etc.)"
            className="mt-3 bg-transparent border-2 border-white/10 outline-none text-white py-2 px-2 rounded-[10px] focus:border-blue-400 min-h-[100px]"
            {...register("howToApplyOther", { required: true })}
          />
        )}
      </div>
    </form>
  );
}

export default ApplicationSettingForm;
