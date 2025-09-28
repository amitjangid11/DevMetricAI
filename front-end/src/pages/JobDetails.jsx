import React, { useEffect, useState } from "react";
import JobDetailsPage from "../component/JobDetailsPage";
import { useParams } from "react-router-dom";
import axios from "../axios";

const sampleJobData = {
  jobBasicForm: {
    jobTitle: "Full Stack Web Developer",
    department: "Information Technology",
    location: "Jaipur",
    employment: "Full-time",
  },
  jobDetailForm: {
    jobDesc:
      "We are looking for a talented Full Stack Web Developer to join our dynamic IT team. You will be responsible for developing and maintaining web applications using modern technologies and frameworks.",
    yearsOfExperience: "3",
  },
  responsibilities: [
    "Develop and maintain scalable web applications using modern frameworks",
    "Collaborate with cross-functional teams to deliver high-quality software solutions",
  ],
  skillAndRequirenmentForm: {
    selectedSkills: ["React", "Node.js"],
    selectedLanguages: ["JavaScript"],
  },
  compensationAndPerksForm: {
    salaryRange: "5",
    perks: [
      "Health Insurance",
      "Flexible Working Hours",
      "Professional Development",
    ],
  },
  applicationSettingForm: {
    applicationDeadline: "2025-10-02",
    howToApply: {
      email: "sayeedaffan544@gmail.com",
    },
  },
};

function JobDetails() {
  const { id } = useParams();
  const [jobData, setJobData] = useState(null);

  console.log(id);

  useEffect(() => {
    const fetchJobData = async () => {
      const response = await axios.get(`/api/get/job-posting/${id}`);
      setJobData(response.data);
    };

    fetchJobData();
  }, [id]);


  if (!jobData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <JobDetailsPage jobData={jobData} />
    </div>
  );
}

export default JobDetails;
