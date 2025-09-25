import React, { createContext, useContext, useState } from "react";

const JobFormContext = createContext();

function JobFormProvider({ children }) {
  const [jobPostData, setJobPostData] = useState({
    jobBasicForm: {},
    jobDetailForm: {},
    skillAndRequirenmentForm: {},
    compensationAndPerksForm: {},
    applicationSettingForm: {},
  });

  function updateForm(section, data) {
    setJobPostData((prev) => ({
      ...prev, // keep all the other form sections
      [section]: { ...prev[section], ...data }, // merge old + new
    }));
  }

  return (
    <JobFormContext.Provider
      value={{
        jobPostData,
        setJobPostData,
        updateForm,
      }}
    >
      {children}
    </JobFormContext.Provider>
  );
}

function useJobForm() {
  const context = useContext(JobFormContext);

  if (!context) {
    throw new Error("useJobForm must be used within a <JobFormProvider>");
  }

  return context;
}

export { JobFormProvider, useJobForm };
