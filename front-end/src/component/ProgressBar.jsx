import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Spinner from "./Spinner";
import axios from "../axios";
import { jwtDecode } from "jwt-decode";

function ProgressBar({ currentQ, totalQ, isLoading, totalMarks }) {
  const progress = (currentQ / totalQ) * 100;
  const [searchParams] = useSearchParams();
  const ques = searchParams.get("ques");
  const [timeInSecond, setTimeInSecond] = useState(30 * 60);
  const navigate = useNavigate();

  const userToken = localStorage.getItem("auth_token");
  const decoded = userToken && jwtDecode(userToken);

  const codeEvaluationID = JSON.parse(localStorage.getItem("codeEvaluationID"));

  useEffect(() => {
    if (timeInSecond === 0) {
      const handleSubmit = async () => {
        alert("⏰ Time is up! Submitting your answer...");

        try {
          const response = await axios.post(
            "/api/total-marks-of-aptitude-and-reasoning",
            { totalMarks },
            {
              headers: {
                "Content-Type": "application/json",
                Email: decoded.email,
                CodeEvaluationID: codeEvaluationID,
              },
            }
          );

          if (response.status === 200) {
            navigate("/app/interview-round");
          }
        } catch (error) {
          console.log(error);
        }
      };

      // call the async function
      handleSubmit();
    }

    const interval = setInterval(() => {
      setTimeInSecond((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeInSecond, totalMarks, codeEvaluationID, navigate, decoded]);

  if (isLoading) {
    return <h1 className="text-center">Loading...</h1>;
  }

  function timeFormatter(time) {
    const min = String(Math.floor(time / 60)).padStart(2, "0");
    const sec = String(time % 60).padStart(2, "0");
    return `${min}:${sec}`;
  }

  if (isLoading) {
    return <Spinner message="AI review your response..." />;
  }

  return (
    <div>
      <div className="flex justify-between p-10">
        <div className="rounded-[50px] border-2 border-[#152F56] text-center w-44 h-10 flex justify-center items-center">
          <p className="text-xl">
            Q-{ques} of {totalQ}
          </p>
        </div>
        <div className="rounded-[50px] border-2 border-[#152F56] text-center w-72 h-10 flex justify-center items-center">
          <p className="text-xl">
            Time Reamaining: {timeFormatter(timeInSecond)}
          </p>
        </div>
      </div>

      <div className="w-[95vw] bg-gray-800 h-1 rounded-full mx-10">
        <div
          className="h-1 rounded-full transition-all duration-500"
          style={{
            width: `${progress}%`,
            backgroundColor: "#076aff89",
          }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
