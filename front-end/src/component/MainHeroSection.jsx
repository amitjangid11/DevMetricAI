import React from "react";
import { Link } from "react-router-dom";

function MainHeroSection() {
  return (
    <section className=" min-h-screen flex justify-center items-center px-4 text-center">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl gap-6">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md">
            Ace Interviews. Hire Smarter.{" "}
            <span className="text-[#816ac0]">Powered by AI.</span>
          </h1>
          <p className="text-white text-sm md:text-lg mt-4 max-w-[40rem] drop-shadow">
            Whether you’re a job seeker practicing for your dream role, or a
            recruiter searching for the right talent — our AI Interview
            Assistant makes it faster, smarter, and stress-free.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link to="/signin" className="w-full sm:w-auto">
            <button
              className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-blue-500 
      hover:from-teal-600 hover:to-blue-600 text-white 
      px-6 sm:px-12 py-3 sm:py-4 
      text-base sm:text-xl font-semibold 
      rounded-full shadow-2xl hover:shadow-teal-500/50 
      transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              I’m a Candidate
            </button>
          </Link>

          <Link to="/company/register" className="w-full sm:w-auto">
            <button
              className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-blue-500 
      hover:from-teal-600 hover:to-blue-600 text-white 
      px-6 sm:px-12 py-3 sm:py-4 
      text-base sm:text-xl font-semibold 
      rounded-full shadow-2xl hover:shadow-teal-500/50 
      transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              I’m a Company
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default MainHeroSection;
