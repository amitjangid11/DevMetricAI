import React from "react";
import { useParams } from "react-router-dom";

function FilteredCandidateProfile() {
  const { name } = useParams();
  return <div>{name}</div>;
}

export default FilteredCandidateProfile;
