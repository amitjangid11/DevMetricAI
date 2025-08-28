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

  useEffect(() => {
    async function generate_reasoning_question() {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://devmetricai-backend.onrender.com/api/generate-aptitude-and-reasoning-questions"
        );

        const initialSpilitedResponse =
          response.data.questions.split("```json")[1];
        const finalSpilitedResponse = initialSpilitedResponse.split("```");
        const questionArray = finalSpilitedResponse[0];
        const finalQuestionArray = JSON.parse(questionArray);

        setQuestions(finalQuestionArray);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    generate_reasoning_question();
  }, []);

  useEffect(() => {
    const filterQuestion =
      questions.length > 0 &&
      questions.filter((question) => {
        return question.id === Number(ques);
      });

    filterQuestion && setOptions(filterQuestion[0].options);
    filterQuestion && setCorrectAnswer(filterQuestion[0].answer);
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
      />
      <MCQ
        questionNumber={ques}
        options={options}
        answer={correctAnswer}
        totalQ={questions.length}
        questions={questions}
        isLoading={isLoading}
      />
    </div>
  );
}

export default ReasoningAndApptitude;
