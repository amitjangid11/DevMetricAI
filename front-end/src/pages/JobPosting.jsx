import { useRef, useState } from "react";
import StepBar from "../component/StepBar";
import { Outlet, useNavigate } from "react-router-dom";
import JobBasicForm from "../component/JobBasicForm";
import JobDetailForm from "../component/JobDetailForm";
import SkillAndRequirenmentForm from "../component/SkillAndRequirenmentForm";
import CompensationAndPerksForm from "../component/CompensationAndPerksForm";
import ApplicationSettingForm from "../../components/ApplicationSettingForm";
import { useJobForm } from "../context/JobFormProvider";
import { jwtDecode } from "jwt-decode";
import axios from "../axios";

function JobPosting() {
  const [currentStep, setCurrentStep] = useState(1);
  const saveStepData = useRef(null);
  const navigate = useNavigate();
  const { jobPostData } = useJobForm();

  const companyToken = localStorage.getItem("company_token");
  const decoded = jwtDecode(companyToken);
  console.log(decoded.company.email);

  const nextStep = async () => {
    if (saveStepData.current) {
      const success = saveStepData.current(); // child validation + save
      if (!success) return; // stop if invalid
    }

    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
      navigate(`/company/job-posting/${currentStep + 1}`);
    } else {
      const finalData = {
        ...jobPostData,
        email: decoded.company.email,
      };
      console.log("jobPostData", finalData);
      const res = await axios.post("/api/job-postings", finalData);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      navigate(`/company/job-posting/${currentStep - 1}`);
    }
  };

  return (
    <div className="min-h-screen">
      {" "}
      <div className="p-8 flex flex-col gap-2">
        <h1 className="sm:text-[30px] md:text-4xl font-bold">
          Post a New Job Opening
        </h1>
        <p className="italic font-light">
          Publish your role requirements and connect with the right candidates
          instantly.
        </p>
      </div>
      <div className="p-8">
        <StepBar currentStep={currentStep} />
        <div>
          {currentStep === 1 ? (
            <JobBasicForm registerSave={saveStepData} />
          ) : currentStep === 2 ? (
            <JobDetailForm registerSave={saveStepData} />
          ) : currentStep === 3 ? (
            <SkillAndRequirenmentForm registerSave={saveStepData} />
          ) : currentStep === 4 ? (
            <CompensationAndPerksForm registerSave={saveStepData} />
          ) : currentStep === 5 ? (
            <ApplicationSettingForm registerSave={saveStepData} />
          ) : null}
          <div className="flex justify-center items-center gap-35 mt-10">
            <button
              className={`rounded-[50px]  text-center border-2 border-white/10 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black p-3 text-xs w-32 hover:bg-gray-800 transition-all duration-300 ease-in-out cursor-pointer`}
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              &larr; Previous
            </button>

            <button
              className="rounded-[50px]  text-center border-2 border-white/10 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black p-3 text-xs w-32 hover:bg-gray-800 transition-all duration-300 ease-in-out cursor-pointer"
              onClick={nextStep}
            >
              {currentStep != 5 ? "Next &rarr;" : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobPosting;
