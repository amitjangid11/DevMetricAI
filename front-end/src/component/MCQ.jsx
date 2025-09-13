import { jwtDecode } from "jwt-decode";
import axios from "../axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Spinner from "./Spinner";

function MCQ({
  questionNumber,
  options,
  totalQ,
  questions,
  answer,
  totalMarks,
  setTotalMarks,
}) {
  const userToken = localStorage.getItem("auth_token");
  const decoded = userToken && jwtDecode(userToken);

  const codeEvaluationID = JSON.parse(localStorage.getItem("codeEvaluationID"));

  const [searchParams] = useSearchParams();
  const ques = searchParams.get("ques");
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [warning, setWarning] = useState("");
  const [countTabSwitch, setCountTabSwitch] = useState(0);
  const [isCheating, setIsCheating] = useState(false);

  const [answers, setAnswers] = useState({});
  const selectedOption = answers[ques] ?? null;

  useEffect(() => {
    if (!ques || questions.length === 0) return;

    const foundQuestion = questions.find(
      (question) => question.id === Number(ques)
    );

    if (foundQuestion) {
      setQuestion(foundQuestion.question);
    }
  }, [questions, ques]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setCountTabSwitch((prev) => prev + 1);
        setIsCheating(true);
        setWarning("🚨 Tab switching detected!");
      }

      if (countTabSwitch === 1) {
        alert(
          "⚠️ First Warning: Please remain on this tab to continue your aptitude test."
        );
      } else if (countTabSwitch === 2) {
        alert("⚠️ Final Warning: Switching tabs again will end your test.");
      } else if (countTabSwitch === 3) {
        alert("❌ Your aptitude test has ended due to multiple tab switches.");
        navigate("/"); // Navigate user back to home
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [countTabSwitch, navigate]);

  const handleOption = (e, index) => {
    const userAnswer = e.target.innerHTML;
    setAnswers({
      ...answers,
      [ques]: index,
    });
    if (String(userAnswer) === answer) {
      setTotalMarks((prev) => prev + 1);
    }
  };

  const handleNext = (questionNumber) => {
    navigate(`?ques=${++questionNumber}`);
  };
  const handlePrevious = (questionNumber) => {
    navigate(`?ques=${--questionNumber}`);
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      console.log(totalMarks);
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
        setIsLoading(false);
        navigate("/app/interview-round");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <Spinner message="AI review your response..." />;
  }

  return (
    <div>
      <h3 className="text-center text-xl mt-7">
        <span>Q-{questionNumber}</span> {question}
      </h3>
      <div className="flex flex-col gap-3 justify-center items-center mt-10">
        {options.map((option, index) => {
          return (
            <div
              className={`relative text-xl w-96 cursor-pointer hover:bg-[#152F56] transition-all duration-300 ease-in-out  ${
                selectedOption === index ? "bg-[#152F56]" : ""
              } p-3 rounded-[50px] border-2 text-center border-[#152F56]`}
              key={index}
              onClick={(e) => handleOption(e, index)}
            >
              {option}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center gap-35 mt-10">
        <button
          className={`rounded-[50px] border-2 text-center border-[#152F56] disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black p-3 text-xs w-32 hover:bg-[#152F56] transition-all duration-300 ease-in-out cursor-pointer`}
          onClick={() => questionNumber > 1 && handlePrevious(questionNumber)}
          disabled={ques === "1"}
        >
          &larr; Previous
        </button>
        {ques === "25" ? (
          <button
            className="rounded-[50px] border-2 text-center border-[#152F56] p-3 text-xs w-32 hover:bg-[#152F56] transition-all duration-300 ease-in-out cursor-pointer"
            onClick={handleSubmit}
          >
            Submit
          </button>
        ) : (
          <button
            className="rounded-[50px] border-2 text-center border-[#152F56] disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black p-3 text-xs w-32 hover:bg-[#152F56] transition-all duration-300 ease-in-out cursor-pointer"
            onClick={() =>
              questionNumber < totalQ && handleNext(questionNumber)
            }
            disabled={ques === "25"}
          >
            Next &rarr;
          </button>
        )}
      </div>
    </div>
  );
}

export default MCQ;
