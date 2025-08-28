import { useSearchParams } from "react-router-dom";
import MCQ from "../component/MCQ";
import ProgressBar from "../component/ProgressBar";
import { useEffect, useState } from "react";
import axios from "axios";

function ReasoningAndApptitude() {
  const [searchParams] = useSearchParams();
  const ques = searchParams.get("ques"); // "1"

  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function generate_reasoning_question() {
      try {
        const res = await axios.get(
          "https://devmetricai-backend.onrender.com/api/generate-aptitude-and-reasoning-questions"
        );

        console.log(res.data.questions);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  useEffect(() => {
    const filterQuestion = questions.filter((question) => {
      return question.id === Number(ques);
    });

    setOptions(filterQuestion[0].options);
    setCorrectAnswer(filterQuestion[0].answer);
  }, [ques]);

  return (
    <div className="lg:h-[100vh] text-3xl font-bold relative top-[40px]">
      <h1 className="text-center">Reasoning & Aptitude Assessment</h1>
      <ProgressBar currentQ={ques} totalQ={questions.length} />
      <MCQ
        questionNumber={ques}
        options={options}
        answer={correctAnswer}
        totalQ={questions.length}
        questions={questions}
      />
    </div>
  );
}

export default ReasoningAndApptitude;
