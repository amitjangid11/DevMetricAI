import React from "react";
import { Mail } from "lucide-react"; // nice mail icon
import { Link } from "react-router-dom";

function EmailVerification() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#010301] px-4">
      <div className="bg-[#0C1A31] text-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#1F2937] p-4 rounded-full">
            <Mail size={40} className="text-[#3B82F6]" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-2">Verify Your Email</h1>
        <p className="text-gray-400 mb-6">
          We’ve sent a verification link to your email address. <br />
          Please check your inbox and verify to move further.
        </p>

        {/* Example email display (you can pass it as props) */}
        <p className="font-semibold text-[#3B82F6] mb-6">
          example@yourcompany.com
        </p>

        {/* Resend link */}
        <p className="text-gray-400 text-sm">
          Didn’t receive the email?{" "}
          <button className="text-[#3B82F6] font-medium hover:underline">
            Resend
          </button>
        </p>

        {/* Back to login */}
        <div className="mt-6">
          <Link
            to="/company/register"
            className="border-2 border-[#152F56] rounded-[50px] p-3 md:p-4 w-40 md:w-44 hover:cursor-pointer hover:bg-[#152F56] text-white transition-all"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmailVerification;
