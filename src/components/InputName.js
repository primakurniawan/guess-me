import React, { useState } from "react";
import "./InputName.css";

const InputName = ({ changeName }) => {
  const [nameInput, setNameInput] = useState("");

  const onChange = (e) => {
    setNameInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    changeName(nameInput);
    setNameInput("");
  };

  return (
    <div className="inputName">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Put The Name"
          value={nameInput}
          onChange={onChange}
        />
        <input type="submit" placeholder="Guess Me" />
      </form>
    </div>
  );
};

export default InputName;
