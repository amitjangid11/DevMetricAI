import { jwtDecode } from "jwt-decode";
import axios from "../axios";
import { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";

function DevCredits() {
  const userToken = localStorage.getItem("auth_token");
  const decoded = userToken && jwtDecode(userToken);
  const [totalCredits, setTotalCredits] = useState(0);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const response = await axios.post(
          "/api/get-candidate-credits",
          {
            email: decoded.email,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          console.log(response.data);
          setTotalCredits(response.data.credits);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCredits();
  }, [decoded]);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="p-8 flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Your DevCredits</h1>
          <p className="italic font-light">
            Redeem credits to unlock exclusive tools designed for your success.
          </p>
        </div>
        <div>
          <div className="flex gap-2 items-center mr-[30px] rounded-[50px] border-2 text-center border-[#152F56] p-3">
            <img
              className="w-10"
              src="/images/devcredits.png"
              alt="DevCredits"
            />
            <p className="">{totalCredits} DevCredits</p>
          </div>
        </div>
      </div>

      <div className="p-8">
        <h1 className="text-3xl font-bold">DevCredits Benefits</h1>
        <ul className="list-disc list-inside space-y-2 text-gray-500 mt-5">
          {[
            "Redeem credits for exclusive discounts (1 credit = ₹5 off)",
            "Use credits to enhance and highlight your resume",
            "Boost your profile visibility to employers using credits",
            `Apply 40 credits → Get ₹${40 * 5} off in premium subscription`,
          ].map((item, index) => (
            <li key={index} className="font-light">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-8">
        <h1 className="text-3xl font-bold">
          Things You Can’t Do with DevCredits
        </h1>
        <ul className="list-disc list-inside space-y-2 text-gray-500 mt-5">
          {[
            "Can’t directly convert into real money",
            "Can’t transfer or gift to other users",
            "Can’t use outside our platform",
            "Can’t refund once redeemed",
          ].map((item, index) => (
            <li key={index} className="font-light">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-8">
        <h1 className="text-3xl font-bold">Ways to Earn DevCredits</h1>
        <ul className="list-disc list-inside space-y-2 text-gray-500 mt-5">
          {[
            "Earn up to 15 credits by completing an interview",
            "Get 10 credits when you share with friends",
          ].map((item, index) => (
            <li key={index} className="font-light">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-8">
        <button className="rounded-[50px] border-2 text-center border-[#152F56] p-5 text-xs w-44 hover:bg-[#152F56] transition-all duration-300 ease-in-out cursor-pointer capitalize flex items-center gap-2">
          <IoIosSend />
          Invite your friends
        </button>
      </div>
    </div>
  );
}

export default DevCredits;
