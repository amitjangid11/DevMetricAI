import React from "react";
import { Link } from "react-router-dom";

function CandidatesCard({ item }) {
  return (
    <div className="bg-black border border-white/10  shadow-gray-500 rounded-xl p-4 w-72 flex flex-col gap-3 text-white shadow-md">
      {/* Top Section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 rounded-full object-cover border border-white/20"
          />
          <h2 className="text-lg font-bold">{item.name}</h2>
        </div>
        <span className="bg-blue-900 text-white text-xs px-3 py-1 rounded-full">
          {item.matchType}
        </span>
      </div>

      {/* Role + Experience */}
      <p className="font-semibold mb-8">
        {item.role} • {item.experience}+ years
      </p>

      {/* Location + Preferred Location */}
      <p className="text-sm text-gray-300">
        📍 {item.location} ({item.preferredLocation})
      </p>

      {/* Skills */}
      <p className="text-sm text-gray-300">💡 {item.skills.join(", ")}</p>

      {/* Score */}
      <p className="text-sm font-medium">🏆 Score: {item.score}/100</p>

      {/* Profile Link */}
      <Link
        to={`${item.name}`}
        className="text-blue-400 text-sm hover:underline mt-2 inline-flex items-center mt-5"
      >
        View Profile →
      </Link>
    </div>
  );
}

export default CandidatesCard;
