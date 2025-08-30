import { useState } from "react";
import axios from "../axios";
import toast from "react-hot-toast";

function ReviewModal({ setIsReviewModalOpen }) {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleSubmitReview = async () => {
    console.log("Review submitted:", { rating, reviewText });
    setIsReviewModalOpen(false);

    const response = await axios.post("/api/review", {
      rating,
      reviewText,
    });

    if (response.status === 200) {
      toast.success("☑️ Review Submitted Successfully");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/20 z-50 p-4">
      <div className="bg-[#0F0F0F] p-6 rounded-lg shadow-lg max-w-md w-full border border-[#152F56]">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Rate your experiences</h2>
          <button
            className="text-white text-2xl font-bold leading-none cursor-pointer"
            onClick={() => setIsReviewModalOpen(false)}
          >
            &times;
          </button>
        </div>

        {/* Stars */}
        <div className="flex gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              className={`cursor-pointer text-2xl ${
                rating >= star ? "text-yellow-400" : "text-gray-500"
              }`}
            >
              ★
            </span>
          ))}
        </div>

        {/* Textarea */}
        <textarea
          placeholder="Write your thought here"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          className="w-full p-3 border border-[#152F56] rounded-[10px] bg-transparent text-[#413F3F] mb-4"
        />

        {/* Submit */}
        <button
          onClick={handleSubmitReview}
          className="border-2 border-[#152F56] rounded-lg px-4 py-2 hover:bg-[#152F56] text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ReviewModal;
