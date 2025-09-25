import React from "react";

const features = [
  {
    id: 1,
    title: "Smart AI Questions",
    description: "Adapts to role & level",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="teal"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12 text-teal-400 mx-auto mb-4"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Instant Feedback",
    description: "Improve answers in real time",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="blue"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12 text-blue-400 mx-auto mb-4"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Data-Driven Hiring",
    description: "Unbiased & faster screening",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="purple"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12 text-purple-400 mx-auto mb-4"
      >
        <line x1="12" y1="20" x2="12" y2="10"></line>
        <line x1="18" y1="20" x2="18" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="16"></line>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Secure & Scalable",
    description: "Built for growth",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="green"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12 text-green-400 mx-auto mb-4"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
  },
];

const steps = [
  {
    id: 1,
    number: "1",
    title: "Sign Up & Choose Your Role",
    description:
      "Select whether you're a candidate looking to practice or a company ready to hire smarter.",
    gradient: "from-teal-500 to-blue-500",
  },
  {
    id: 2,
    number: "2",
    title: "Start Interviewing with AI",
    description:
      "Engage with our intelligent AI that adapts questions to your role and experience level.",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    id: 3,
    number: "3",
    title: "Get Results & Insights Instantly",
    description:
      "Receive detailed feedback and actionable insights to improve your performance or hiring decisions.",
    gradient: "from-purple-500 to-pink-500",
  },
];
function MainHomeFeature() {
  return (
    <>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 text-balance">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step) => (
              <div
                key={step.id}
                className="border border-[#173460] p-6 flex flex-col items-center gap-6 rounded-[8px]"
              >
                <div className="p-8 text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <span className="text-2xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 text-balance">
            Powerful Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="border border-[#173460] p-6 flex flex-col items-center gap-6 rounded-[8px]"
              >
                <div className="p-6 text-center">
                  {feature.icon}
                  <h3 className="text-lg font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MainHomeFeature;
