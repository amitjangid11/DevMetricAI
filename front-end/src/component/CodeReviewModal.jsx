function CodeReviewModal({
  selectedQuestion,
  setIsModalOpen,
  selectedEvaluation,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/20 z-50 p-4">
      <div className="bg-gray-900 p-4 md:p-6 rounded-lg shadow-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold">
            {selectedQuestion.title} - Review Details
          </h2>
          <button
            className="text-white text-3xl md:text-2xl font-bold leading-none"
            onClick={() => setIsModalOpen(false)}
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        {/* User Code */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Your Code:</h3>
          <pre className="bg-black p-4 rounded text-xs md:text-sm overflow-x-auto whitespace-pre-wrap max-w-full">
            {selectedEvaluation?.userCode || "No code available"}
          </pre>
        </div>

        {/* Score & Feedback */}
        <div className="mb-4">
          <h3 className="font-semibold">Score:</h3>
          <p>{selectedEvaluation?.score ?? "N/A"}</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Capability:</h3>
          <p className="font-semibold">
            {selectedEvaluation?.capability ?? "N/A"}
          </p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Potential Errors:</h3>
          <p className="font-semibold">
            {selectedEvaluation?.potentialErrors ?? "N/A"}
          </p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Feedback:</h3>
          <p>{selectedEvaluation?.feedback || "No comments provided."}</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Improvement:</h3>
          <p>
            {selectedEvaluation?.improvements || "No improvements provided."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CodeReviewModal;
