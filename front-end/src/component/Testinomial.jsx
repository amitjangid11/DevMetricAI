import React from "react";

function Testinomial() {
  return (
    <>
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 text-balance">
            What Our Users Say
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="yellow"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-yellow-400 fill-current"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 text-lg mb-6 italic">
                  "This platform gave me the confidence to crack my first job!
                  The AI feedback was incredibly detailed and helped me improve
                  my communication skills."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">S</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Sarah Chen</p>
                    <p className="text-slate-400 text-sm">Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="yellow"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-yellow-400 fill-current"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 text-lg mb-6 italic">
                  "We reduced our interview rounds by 40% and found better
                  candidates faster. The AI scoring system is remarkably
                  accurate and unbiased."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12   rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Marcus Rodriguez</p>
                    <p className="text-slate-400 text-sm">
                      Head of Talent, TechCorp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 " />
        <div className="absolute inset-0"></div>

        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 text-balance">
            Ready for your next interview?
          </h2>

          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto text-pretty">
            Join thousands of candidates and companies who are already
            experiencing the future of interviews.
          </p>

          <button className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-12 py-4 text-xl font-semibold rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
            Get Started Now
          </button>
        </div>
      </section>
    </>
  );
}

export default Testinomial;
