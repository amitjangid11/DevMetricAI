import { useState, useEffect } from "react";

export default function PageNotFound() {
  const [isVisible, setIsVisible] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div
        className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Animated 404 Icon */}
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="animate-float">
              <div
                className={`w-32 h-32 mx-auto mb-4 rounded-full bg-gray-900 border-4 border-pink-500 flex items-center justify-center animate-pulse ${
                  shake ? "animate-shake" : ""
                }`}
              >
                <svg
                  className="w-16 h-16 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
            </div>

            {/* Floating particles */}
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl font-bold text-pink-500 mb-4 font-mono tracking-tight">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-400 max-w-md mx-auto leading-relaxed">
            Oops! Looks like this page doesn&apos;t exist. Let&apos;s get you
            back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={() => window.history.back()}
            className="group px-8 py-3 bg-pink-500 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-pink-600 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Go Back
            </span>
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="group px-8 py-3 bg-green-500 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-green-600 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5 transition-transform group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Go Home
            </span>
          </button>
        </div>

        {/* Interactive Element */}
        <div className="text-center">
          <button
            onClick={handleShake}
            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm underline decoration-dotted underline-offset-4 cursor-pointer"
          >
            Click here if you&apos;re feeling frustrated 😤
          </button>
        </div>
      </div>
    </div>
  );
}
