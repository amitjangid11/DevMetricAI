import React from "react";

function DualAudiences() {
  return (
    <section>
      <h1 className="text-xl md:text-5xl lg:text-4xl font-bold text-white drop-shadow-md text-center">
        Interviews are broken. We fix them — for both sides.
      </h1>

      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* For Candidates */}
            <div className="border border-[#173460]  p-6 flex flex-col items-center gap-6 rounded-[8px]">
              <div className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Turn interview fear into confidence.
                  </h3>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="teal"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="text-slate-300">
                      Practice AI-driven mock interviews anytime
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="teal"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="text-slate-300">
                      Get instant feedback on answers, tone & confidence
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="teal"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="text-slate-300">
                      Track your growth before facing the real HR panel
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* For Companies */}
            <div className="border border-[#173460]  p-6 flex flex-col items-center gap-6 rounded-[8px]">
              <div className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8"
                    >
                      <line x1="12" y1="20" x2="12" y2="10"></line>
                      <line x1="18" y1="20" x2="18" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="16"></line>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Hire faster, without guesswork.
                  </h3>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="blue"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="text-slate-300">
                      AI-generated role-specific interview questions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="blue"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="text-slate-300">
                      Automatic candidate evaluation & scoring
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="blue"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="text-slate-300">
                      Save up to 60% of recruiter time
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DualAudiences;
