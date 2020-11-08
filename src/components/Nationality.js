import React from "react";
import "./Nationality.css";

const Nationality = ({ nationality }) => {
  return (
    <div className="nationality">
      Your Nationality :
      <ul>
        {nationality.map((e) => (
          <li>
            {e.name}
            <img src={e.flag} alt={e.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nationality;
