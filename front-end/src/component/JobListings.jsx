import React, { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import axios from "../axios";
import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div className="border border-[#152F56] p-4 w-full h-full flex flex-col justify-between rounded-md shadow-lg bg-[#0f1b2b]">
      <div>
        <h2 className="text-white font-semibold text-lg">{job.title}</h2>
        <p className="text-gray-400 text-sm">{job.company}</p>
      </div>
      <div className="border-t border-[#152F56] pt-2 mt-2">
        <p className="text-gray-300 flex items-center text-sm gap-1">
          <CiLocationOn /> {job.location}
        </p>
        <p className="text-gray-300 text-sm">{job.salary}</p>
      </div>
      <Link
        to={`/app/profile/job/${job.id}`}
        className="text-blue-400 hover:underline text-sm self-end mt-2"
      >
        View Details
      </Link>
    </div>
  );
}

function JobListings() {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    axios
      .get("/api/get/job-posting")
      .then((response) => {
        const jobs = response.data.jobPostings.map((job) => ({
          id: job._id,
          title: job.jobBasicForm.jobTitle,
          // company: job.name,
          company: "Company",
          location: job.jobBasicForm.location,
          salary: `${job.compensationAndPerksForm.salaryRange} LPA`,
        }));
        setJobListings(jobs);
      })
      .catch((error) => console.error("Error fetching job postings:", error));
  }, []);

  return (
    <div className="bg-black min-h-screen py-10 px-4 sm:px-8">
      <h1 className="text-white text-2xl sm:text-3xl font-bold mb-6">
        Latest Job Listings
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {jobListings.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
}

export default JobListings;
