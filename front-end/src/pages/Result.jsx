import axios from "../axios";
import { use, useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { jwtDecode } from "jwt-decode";
import Spinner from "../component/Spinner";
import { Link } from "react-router-dom";
import ReviewModal from "../component/ReviewModal";
import CodeReviewModal from "../component/CodeReviewModal";
import SidebarCodindQuestion from "../component/SidebarCodindQuestion";
import { creditGenerator } from "../../utils/creditGenerator";
import toast from "react-hot-toast";

function Result() {
  const userToken = localStorage.getItem("auth_token");
  const decoded = userToken && jwtDecode(userToken);

  const [openAnswer, setOpenAnswer] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const [codingScore, setCodingScore] = useState(0);
  const [interviewScore, setInterviewScore] = useState(0);
  const [aptitudeAndReasoningScore, setAptitudeAndReasoningScore] = useState(0);
  const [aptitudeAndReasoningOverview, setAptitudeAndReasoningOverview] =
    useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [domain, setDomain] = useState("");
  const [codeEvaluations, setCodeEvaluations] = useState([]); // Holds parsed evaluations
  const [credits, setCredits] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem("coding_question");
    if (data) {
      try {
        const splitedQuestions = data.split("```");
        const finalQuestions = JSON.parse(splitedQuestions[1].split("json")[1]);
        setQuestions(finalQuestions);
        setSelectedQuestion(finalQuestions[0]);
      } catch (e) {
        console.error("Error parsing questions data:", e);
      }
    }
  }, []);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        setIsLoading(true);
        const codeEvaluationID = JSON.parse(
          localStorage.getItem("codeEvaluationID")
        );
        const res = await axios.get(`/api/get-interview-result`, {
          headers: {
            "Content-Type": "application/json",
            Email: decoded.email,
            CodeEvaluationID: codeEvaluationID,
          },
        });

        const result = res.data.result[0];

        console.log("RESULT:", result);

        // Parse code review JSON safely
        const codeReviewStr = result.code_review
          ?.split("```")[1]
          ?.split("json")[1]
          ?.trim();

        let codeReviewObject = { evaluations: [] };
        if (codeReviewStr) {
          try {
            codeReviewObject = JSON.parse(codeReviewStr);
          } catch {
            codeReviewObject = eval("(" + codeReviewStr + ")");
          }
        }

        setCodeEvaluations(codeReviewObject.evaluations || []);

        // Calculate total coding score
        const totalCodingScore = (codeReviewObject.evaluations || []).reduce(
          (acc, item) => acc + (item.score || 0),
          0
        );
        setCodingScore(totalCodingScore);

        // Parse interview score
        const interviewStr = result.interview_review
          ?.split("```")[1]
          ?.split("json")[1]
          ?.trim();

        let interviewReviewObject = null;
        if (interviewStr) {
          interviewReviewObject = JSON.parse(interviewStr);
        }
        setInterviewScore(interviewReviewObject?.TotalMarks || 0);

        setAptitudeAndReasoningScore(
          result.reasoning_and_aptitude_review.totalMarks
        );
        setAptitudeAndReasoningOverview(
          result.reasoning_and_aptitude_review.overview
        );

        setDomain(result.role);
        setIsLoading(false);
      } catch (error) {
        console.log(" ERROR : " + error.message);
        setIsLoading(false);
      }
    };

    fetchResult();
  }, []);

  useEffect(() => {
    const totalMarks = codingScore + aptitudeAndReasoningScore + interviewScore;

    if (totalMarks > 0) {
      const credit = creditGenerator(totalMarks);
      setCredits(credit);

      toast.success(
        `Congrats! You scored ${totalMarks} marks and earned ${credit} DevCredits worth ₹${
          credit * 5
        } 🎉`
      );
    }
  }, [codingScore, aptitudeAndReasoningScore, interviewScore]);

  //   {
  //   userId: "64df9f...",  // from JWT
  //   email: "john@example.com",
  //   name: "John Doe",
  //   credits: 27,          // total available credits
  //   history: [            // optional, but great for tracking
  //     {
  //       type: "earned",   // or "spent"
  //       credits: 12,
  //       reason: "Interview Score",
  //       date: new Date()
  //     },
  //     {
  //       type: "spent",
  //       credits: -5,
  //       reason: "Used for Mock Test",
  //       date: new Date()
  //     }
  //   ]
  // }

  useEffect(() => {
    const sendCredits = async () => {
      try {
        if (credits > 0) {
          await axios.post(
            "/api/create-update-credits",
            {
              name: decoded.name,
              email: decoded.email,
              credits,
              history: {
                type: "earned",
                credits: credits,
                reason: "Interview Score",
                date: new Date(),
              },
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    sendCredits();
  }, [credits, decoded]);

  const percentage = ((codingScore + interviewScore) / 100) * 100;

  if (isLoading) return <Spinner message="Evaluating..." />;

  const selectedEvaluation =
    selectedQuestion &&
    codeEvaluations.find(
      (evalItem) => evalItem.questionId === selectedQuestion.id
    );

  return (
    <div className="h-screen relative px-2 md:px-6">
      {" "}
      {/* Add horizontal padding for small screens */}
      {/* Hamburger icon */}
      <div className="flex justify-end p-4" onClick={() => setOpenAnswer(true)}>
        <HiBars3BottomRight className="text-3xl cursor-pointer" />
      </div>
      {/* Score summary */}
      <div className="border-2 border-[#152F56] rounded-[100px] flex flex-col items-center justify-center gap-4 w-[51vw] md:w-1/2 m-auto mt-10 p-5">
        {/* w-full on mobile, half on medium and up */}
        <h1 className="text-3xl md:text-4xl font-semibold text-center">
          You scored {codingScore + aptitudeAndReasoningScore + interviewScore}
          /100 ({percentage.toFixed(2)}
          %)
        </h1>
        <div className="flex flex-wrap justify-center gap-3">
          <div className="text-center border-2 border-[#152F56] rounded-[50px] w-40 md:w-44 flex justify-center items-center flex-col p-3">
            <h1 className="font-semibold">Domain</h1>
            <p>{domain}</p>
          </div>
          <div className="text-center border-2 border-[#152F56] rounded-[50px] w-40 md:w-44 flex justify-center items-center flex-col p-3">
            <h1 className="font-semibold">Coding Score</h1>
            <p>{codingScore}/50</p>
          </div>
          <div className="text-center border-2 border-[#152F56] rounded-[50px] w-40 md:w-44 flex justify-center items-center flex-col p-3">
            <h1 className="font-semibold">Aptitude and Reasoning Score</h1>
            <p>{aptitudeAndReasoningScore}/50</p>
          </div>
          <div className="text-center border-2 border-[#152F56] rounded-[50px] w-40 md:w-44 flex justify-center items-center flex-col p-3">
            <h1 className="font-semibold">Interview Score</h1>
            <p>{interviewScore}/50</p>
          </div>
        </div>
      </div>
      {/* Profile Button */}
      <div className="flex justify-center gap-3 items-center mt-10">
        <Link to="/app/profile/previous-interview">
          <button className="border-2 border-[#152F56] rounded-[50px] p-3 md:p-4 w-40 md:w-44 hover:cursor-pointer hover:bg-[#152F56] text-white transition-all">
            View Profile
          </button>
        </Link>

        <button
          className="border-2 border-[#152F56] rounded-[50px] p-3 md:p-4 w-48 md:w-44 hover:cursor-pointer hover:bg-[#152F56] text-white transition-all"
          onClick={(e) => {
            e.stopPropagation();
            setIsReviewModalOpen(true);
          }}
        >
          Rate your experience
        </button>
      </div>
      {/* Sidebar */}
      {openAnswer && (
        <SidebarCodindQuestion
          setOpenAnswer={setOpenAnswer}
          questions={questions}
          selectedQuestion={selectedQuestion}
          setSelectedQuestion={setSelectedQuestion}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {/* Modal */}
      {isModalOpen && selectedQuestion && (
        <CodeReviewModal
          selectedQuestion={selectedQuestion}
          setIsModalOpen={setIsModalOpen}
          selectedEvaluation={selectedEvaluation}
        />
      )}
      {isReviewModalOpen && (
        <ReviewModal setIsReviewModalOpen={setIsReviewModalOpen} />
      )}
    </div>
  );
}

export default Result;
