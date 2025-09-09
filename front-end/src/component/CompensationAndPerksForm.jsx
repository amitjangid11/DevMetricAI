import React from "react";
import { useForm } from "react-hook-form";

function CompensationAndPerksForm() {
  const { register, handleSubmit, reset, getFieldState, getValues } = useForm();

  const perksArray = [
    "Health Insurance",
    "Paid Time Off",
    "Remote Work Flexibility",
    "Performance Bonus",
    "Retirement Benefits",
    "Learning & Development",
    "Free Meals & Snacks",
    "Parental Leave",
    "Company Laptop/Equipment",
  ];

  return (
    <form action="" className="flex flex-col gap-8 justify-center items-center">
      {/* Salary Range */}
      <div className="flex flex-col w-[25vw]">
        <label className="text-white text-sm mb-1 font-bold mt-6">
          Salary Range
        </label>
        <input
          type="number"
          placeholder="e.g. 6"
          autoFocus
          className="bg-transparent border-2 border-white/10 outline-none text-white py-2 px-2 rounded-[10px] focus:border-blue-400"
          autoComplete="new-title"
          {...register("salaryRange", { required: true })}
        />
      </div>

      {/* Benefits & Perks */}
      <div className="flex flex-col w-[25vw]">
        <label className="text-white text-sm mb-1 font-bold mt-6">
          Benefits & Perks
        </label>
        <div className="flex flex-col gap-2 border-2 border-white/10 rounded-[10px] p-3">
          {perksArray.map((perk, index) => (
            <label
              key={index}
              className="inline-flex items-center gap-2 text-white text-sm cursor-pointer"
            >
              <input
                type="checkbox"
                value={perk}
                {...register("perks")}
                className="w-4 h-4 accent-blue-500"
              />
              {perk}
            </label>
          ))}
        </div>
      </div>
    </form>
  );
}

export default CompensationAndPerksForm;
