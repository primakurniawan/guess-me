import React, { useState, useEffect } from "react";
import "./App.css";
import Age from "./components/Age";
import Gender from "./components/Gender";
import InputName from "./components/InputName";
import Nationality from "./components/Nationality";

function App() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState({});
  const [age, setAge] = useState({});
  const [nationality, setNationality] = useState([]);

  const fetchingData = (name) => {
    fetch(`https://api.agify.io/?name=${name}`)
      .then((res) => res.json())
      .then((data) => setAge({ ...data }))
      .catch((err) => console.error(err));

    fetch(`https://api.genderize.io/?name=${name}`)
      .then((res) => res.json())
      .then((data) => {
        setGender(data);
      })
      .catch((err) => console.error(err));

    fetch(`https://api.nationalize.io/?name=${name}`)
      .then((res) => res.json())
      .then((data) =>
        data.country.forEach((e) => {
          fetch(`https://restcountries.eu/rest/v2/alpha/${e.country_id}`)
            .then((res) => res.json())
            .then((data) =>
              setNationality((nationality) => [...nationality, data])
            )
            .catch((err) => console.error(err));
        })
      )
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (name !== "") {
      fetchingData(name);
    }
    return () => {
      setNationality([]);
    };
  }, [name]);

  const changeName = (nameInput) => {
    setName(nameInput);
  };

  return (
    <div className="app">
      <div className="row">
        <h1>Welcome To Guess You</h1>
      </div>
      <div className="row">
        <InputName changeName={changeName} />
        <div className="name">Your Name : {name}</div>
      </div>
      <div className="row">
        <Gender gender={gender} />
        <Age age={age} />
        <Nationality nationality={nationality} />
      </div>
    </div>
  );
}

export default App;
