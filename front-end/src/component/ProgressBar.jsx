import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function ProgressBar({ currentQ, totalQ }) {
  const progress = (currentQ / totalQ) * 100;
  const [searchParams] = useSearchParams();
  const ques = searchParams.get("ques");
  const [timeInSecond, setTimeInSecond] = useState(30 * 60);

  useEffect(() => {
    if (timeInSecond === 0) {
      alert("Time is over");
      return;
    }

    const interval = setInterval(() => {
      setTimeInSecond((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeInSecond]);

  function timeFormatter(time) {
    const min = String(Math.floor(time / 60)).padStart(2, "0");
    const sec = String(time % 60).padStart(2, "0");
    return `${min}:${sec}`;
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
