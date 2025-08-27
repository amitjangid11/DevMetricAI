import { useSearchParams } from "react-router-dom";
import MCQ from "../component/MCQ";
import ProgressBar from "../component/ProgressBar";
import { useEffect, useState } from "react";

const questions = [
  {
    id: 1,
    question: "If 5x = 20, what is the value of x?",
    options: ["2", "4", "5", "20"],
    answer: "4",
  },
  {
    id: 2,
    question: "The average of 10, 20, 30 is?",
    options: ["15", "20", "25", "30"],
    answer: "20",
  },
  {
    id: 3,
    question: "If a car runs 60 km in 1.5 hours, what is its speed?",
    options: ["40 km/h", "50 km/h", "60 km/h", "45 km/h"],
    answer: "40 km/h",
  },
  {
    id: 4,
    question: "Find the missing number: 2, 6, 12, 20, ?",
    options: ["28", "30", "32", "36"],
    answer: "30",
  },
  {
    id: 5,
    question: "Which is a prime number?",
    options: ["21", "29", "35", "39"],
    answer: "29",
  },
  {
    id: 6,
    question:
      "If 12 men can complete work in 8 days, how many days will 6 men take?",
    options: ["8", "12", "16", "18"],
    answer: "16",
  },
  {
    id: 7,
    question: "What is the probability of getting a head in a fair coin toss?",
    options: ["0", "0.25", "0.5", "1"],
    answer: "0.5",
  },
  {
    id: 8,
    question: "Find the odd one: Apple, Banana, Mango, Potato",
    options: ["Banana", "Mango", "Potato", "Apple"],
    answer: "Potato",
  },
  {
    id: 9,
    question: "Solve: 15% of 200 = ?",
    options: ["20", "25", "30", "35"],
    answer: "30",
  },
  {
    id: 10,
    question: "Which number is divisible by 9?",
    options: ["234", "342", "729", "456"],
    answer: "729",
  },
  {
    id: 11,
    question: "If A = 1, B = 2, Z = 26. Find the sum of C + D?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    id: 12,
    question:
      "Ravi is older than Mohan. Mohan is older than Sohan. Who is the youngest?",
    options: ["Ravi", "Mohan", "Sohan", "Cannot say"],
    answer: "Sohan",
  },
  {
    id: 13,
    question: "The angle of a straight line is?",
    options: ["90°", "180°", "270°", "360°"],
    answer: "180°",
  },
  {
    id: 14,
    question: "If 9 + 3 = 12, then 12 + 6 = ?",
    options: ["14", "18", "20", "24"],
    answer: "18",
  },
  {
    id: 15,
    question: "Which fraction is greater?",
    options: ["2/5", "3/7", "4/9", "5/12"],
    answer: "3/7",
  },
  {
    id: 16,
    question: "What is the square root of 144?",
    options: ["10", "11", "12", "14"],
    answer: "12",
  },
  {
    id: 17,
    question: "Find the missing term: 1, 4, 9, 16, ?",
    options: ["20", "24", "25", "30"],
    answer: "25",
  },
  {
    id: 18,
    question: "A clock shows 3:15. What is the angle between the hands?",
    options: ["0°", "7.5°", "15°", "30°"],
    answer: "7.5°",
  },
  {
    id: 19,
    question: "If A trains at 60 km/h and B at 80 km/h, how much faster is B?",
    options: ["10 km/h", "15 km/h", "20 km/h", "25 km/h"],
    answer: "20 km/h",
  },
  {
    id: 20,
    question: "Simplify: (2 + 3) × (4 + 1)",
    options: ["20", "25", "15", "30"],
    answer: "25",
  },
  {
    id: 21,
    question: "Which is the largest fraction?",
    options: ["3/8", "4/9", "5/12", "7/16"],
    answer: "7/16",
  },
  {
    id: 22,
    question: "If today is Monday, what will be the day after 15 days?",
    options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
    answer: "Tuesday",
  },
  {
    id: 23,
    question:
      "A man walks 3 km north and 4 km east. Distance from starting point?",
    options: ["5 km", "6 km", "7 km", "8 km"],
    answer: "5 km",
  },
  {
    id: 24,
    question: "Find the odd one: 121, 144, 169, 180",
    options: ["121", "144", "169", "180"],
    answer: "180",
  },
  {
    id: 25,
    question: "Which is not a leap year?",
    options: ["2000", "2004", "1900", "2012"],
    answer: "1900",
  },
];

function ReasoningAndApptitude() {
  const [searchParams] = useSearchParams();
  const ques = searchParams.get("ques"); // "1"

  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");

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
