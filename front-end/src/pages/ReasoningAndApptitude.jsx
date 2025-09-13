import { useSearchParams } from "react-router-dom";
import MCQ from "../component/MCQ";
import ProgressBar from "../component/ProgressBar";
import { useEffect, useState } from "react";
import axios from "../axios";
import Spinner from "../component/Spinner";

function ReasoningAndApptitude() {
  const [searchParams] = useSearchParams();
  const ques = searchParams.get("ques"); // "1"

  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalMarks, setTotalMarks] = useState(0);

  useEffect(() => {
    async function generate_reasoning_question() {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "/api/generate-aptitude-and-reasoning-questions"
        );

        const initialSpilitedResponse =
          response.data.questions.split("```json")[1];
        const finalSpilitedResponse = initialSpilitedResponse.split("```");
        const questionArray = finalSpilitedResponse[0];
        const finalQuestionArray = JSON.parse(questionArray);

        console.log("From here");

        console.log(finalQuestionArray);

        setQuestions(finalQuestionArray);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    generate_reasoning_question();
  }, []);

  useEffect(() => {
    if (!ques || questions.length === 0) return;

    const filterQuestion = questions.find(
      (question) => question.id === Number(ques)
    );

    if (filterQuestion) {
      setOptions(filterQuestion.options);
      setCorrectAnswer(filterQuestion.answer);
    }
  }, [ques, questions]);

  if (isLoading) {
    return <Spinner message="Loading..." />;
  }

  return (
    <div className="lg:h-[100vh] text-3xl font-bold relative top-[40px]">
      <h1 className="text-center">Reasoning & Aptitude Assessment</h1>
      <ProgressBar
        currentQ={ques}
        totalQ={questions.length}
        isLoading={isLoading}
        totalMarks={totalMarks}
      />
      <MCQ
        questionNumber={ques}
        options={options}
        answer={correctAnswer}
        totalQ={questions.length}
        questions={questions}
        totalMarks={totalMarks}
        setTotalMarks={setTotalMarks}
      />
    </div>
  );
}

export default ReasoningAndApptitude;
