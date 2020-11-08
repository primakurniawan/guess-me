import React from "react";
import "./Gender.css";

const Gender = ({ gender }) => {
  return (
    <div className="gender">
      <span>Your Gender : {gender.gender}</span>
    </div>
  );
};

export default Gender;
