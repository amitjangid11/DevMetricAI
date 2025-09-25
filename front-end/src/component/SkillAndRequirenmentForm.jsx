import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { skillsArray, languagesArray } from "../Data/CandidateFiltering";
import { useJobForm } from "../context/JobFormProvider";

function SkillAndRequirenmentForm({ registerSave }) {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [isCloseSkills, setIsCloseSkills] = useState(false);

  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [filteredLanguages, setFilteredLanguages] = useState([]);
  const [isCloseLanguages, setIsCloseLanguages] = useState(false);
  const { updateForm, jobPostData } = useJobForm();

  const { register, watch, setValue } = useForm();

  const skillsInput = watch("skills", "");
  const languagesInput = watch("languages", "");

  useEffect(() => {
    registerSave.current = () => {
      if (selectedSkills.length === 0 || selectedLanguages.length === 0) {
        alert("Fill all required fields!");
        return false;
      }
      const finalData = {
        selectedSkills,
        selectedLanguages,
      };
      updateForm("skillAndRequirenmentForm", finalData);
      return true;
    };
  }, [registerSave, updateForm, selectedSkills, selectedLanguages]);

  // 🔹 Filter skills
  useEffect(() => {
    if (skillsInput.trim() !== "") {
      const filterSkills = skillsArray.filter((item) =>
        item.toLowerCase().includes(skillsInput.toLowerCase())
      );
      setFilteredSkills(filterSkills);
      setIsCloseSkills(false);
    } else {
      setFilteredSkills([]);
      setIsCloseSkills(false);
    }
  }, [skillsInput]);

  // 🔹 Filter languages
  useEffect(() => {
    if (languagesInput.trim() !== "") {
      const filterLangs = languagesArray.filter((item) =>
        item.toLowerCase().includes(languagesInput.toLowerCase())
      );
      setFilteredLanguages(filterLangs);
      setIsCloseLanguages(false);
    } else {
      setFilteredLanguages([]);
      setIsCloseLanguages(false);
    }
  }, [languagesInput]);

  return (
    <form action="" className="flex flex-col gap-8 justify-center items-center">
      {/* ====== Skills Input ====== */}
      <div className="flex flex-col relative">
        <label className="text-white text-sm mb-1 font-bold">
          Required Skills
        </label>
        <div className="flex flex-wrap items-center gap-2 bg-transparent border border-white/10 rounded-[10px] w-[25vw] min-h-[42px] px-2">
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
                  setSelectedSkills((prev) => prev.filter((s) => s !== skill))
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
        {filteredSkills.length > 0 && !isCloseSkills && (
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
                    setIsCloseSkills(true);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* ====== Languages Input ====== */}
      <div className="flex flex-col relative">
        <label className="text-white text-sm mb-1 font-bold">
          Languages (optional)
        </label>
        <div className="flex flex-wrap items-center gap-2 bg-transparent border border-white/10 rounded-[10px] w-[25vw] min-h-[42px] px-2">
          {selectedLanguages.map((lang) => (
            <span
              key={lang}
              className="inline-flex items-center gap-1 rounded-full bg-white/5 text-white border border-white/10 px-2 py-1 text-xs"
            >
              {lang}
              <button
                type="button"
                aria-label={`Remove ${lang}`}
                className="rounded-full p-0.5 hover:bg-white/10"
                onClick={() =>
                  setSelectedLanguages((prev) => prev.filter((l) => l !== lang))
                }
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </span>
          ))}
          <input
            type="text"
            placeholder="e.g. English, Korean, Japanese…"
            className="flex-1 bg-transparent outline-none text-white py-2 px-1 min-w-[120px]"
            autoComplete="new-languages"
            {...register("languages")}
          />
        </div>

        {/* Dropdown suggestions */}
        {filteredLanguages.length > 0 && !isCloseLanguages && (
          <div className="absolute top-full left-0 mt-1 w-full bg-white/10 rounded-md shadow-lg z-10">
            <ul>
              {filteredLanguages.map((item, index) => (
                <li
                  key={index}
                  className="p-3 cursor-pointer hover:bg-slate-100 hover:text-black"
                  onClick={() => {
                    setSelectedLanguages((prev) =>
                      prev.includes(item) ? prev : [...prev, item]
                    );
                    setValue("languages", "");
                    setIsCloseLanguages(true);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </form>
  );
}

export default SkillAndRequirenmentForm;
