import React, { useState } from "react";
import { Link } from "react-router-dom";

const cardData = [
  {
    id: 1,
    title: "🎓 Kick-start Your Career Journey",
    description:
      "Prepare with real interview simulations, sharpen your skills, and boost your confidence. Turn practice into opportunities — get interview-ready today.",
    actionText: "I’m a Student — Start My Interview",
  },
  {
    id: 2,
    title: "Hire Smarter, Faster",
    description:
      "Access AI-driven interview insights to evaluate candidates effectively. Save time, cut hiring costs, and make data-backed decisions with confidence.",
    actionText: "I’m a Company — Hire with AI",
  },
];

function ChooseBeforeLogin() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="flex h-screen bg-black text-white">
      {/* Left Content */}
      <div className="w-4/5 flex flex-col items-center mt-35 px-10 space-y-8">
        {cardData.map((item, index) => {
          return (
            <div
              key={index}
              className={`border border-[#152F56] rounded-xl p-6 hover:border-blue-500 transition w-[40vw] cursor-pointer ${
                selected === index ? "border-blue-500" : ""
              }`}
              onClick={() => setSelected(index)}
            >
              <h1 className="text-2xl font-bold mb-2 text-center">
                {item.title}
              </h1>
              <p className="text-slate-500 mb-4 leading-relaxed italic">
                {item.description}
              </p>
              <div className="flex items-center gap-4 justify-center">
                <div
                  className={`w-10 h-10 rounded-full border-2 border-[#152F56] hover:border-blue-500 transition ${
                    selected === index ? "bg-[#152F56]" : ""
                  }`}
                ></div>
                <p className="text-sm font-medium text-gray-200">
                  {item.actionText}
                </p>
              </div>
            </div>
          );
        })}

        <div>
          <Link to={selected === 0 ? "/signin" : "/company/register"}>
            <button className="rounded-[50px] border-2 text-center border-[#152F56] disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-black p-3 text-xs w-32 hover:bg-[#152F56] transition-all duration-300 ease-in-out cursor-pointer">
              Continue
            </button>
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-1/2">
        <img
          src="/images/start-page.avif"
          alt="Girl sitting with laptop"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default ChooseBeforeLogin;
