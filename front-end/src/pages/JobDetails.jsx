import React, { useEffect, useState } from "react";
import JobDetailsPage from "../component/JobDetailsPage";
import { useParams } from "react-router-dom";
import axios from "../axios";

function JobDetails() {
  const { id } = useParams();
  const [jobData, setJobData] = useState(null);

  useEffect(() => {
    const fetchJobData = async () => {
      const response = await axios.get(`/api/get/job-posting/${id}`);
      console.log("Fetched Job Data:", response.data);
      setJobData(response.data);
    };

    fetchJobData();
  }, [id]);
  return (
    <div className="">
      <JobDetailsPage jobData={jobData} />
    </div>
  );
}

export default JobDetails;
