import { RxCross1 } from "react-icons/rx";

function SidebarCodindQuestion({
  setOpenAnswer,
  questions,
  selectedQuestion,
  setSelectedQuestion,
  setIsModalOpen,
}) {
  return (
    <div className="fixed md:absolute top-0 right-0 h-full md:w-1/2 w-full bg-slate-900 z-50">
      <div
        className="flex justify-end p-4"
        onClick={() => setOpenAnswer(false)}
      >
        <RxCross1 className="text-3xl cursor-pointer" />
      </div>

      <div className="p-3 h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">
          Detailed Review Of Your Answers
        </h2>
        <div className="space-y-4">
          {questions?.map((q) => (
            <div
              key={q.id}
              className={`p-4 rounded-lg cursor-pointer transition hover:bg-slate-800 ${
                selectedQuestion?.id === q.id && "border-[#0C1A31] bg-slate-800"
              }`}
              onClick={() => setSelectedQuestion(q)}
            >
              <h3 className="text-lg font-semibold">{q.title}</h3>
              <p className="text-sm text-gray-300">{q.description}</p>
              <button
                className="mt-2 text-[#2d7af5] hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                  setSelectedQuestion(q);
                }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SidebarCodindQuestion;
