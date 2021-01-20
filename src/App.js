import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [birthDate, setBirthDate] = useState("");
  var [luckyNumber, setLuckyNumber] = useState("");
  var [luckyResult, setLuckyResult] = useState("");
  var [imageURL, setImageURL] = useState("");
  var [error, setError] = useState("");

  function inputLuckyHandler(event) {
    luckyNumber = event.target.value;
    setLuckyNumber(luckyNumber);
  }
  function inputBirthHandler(event) {
    birthDate = event.target.value;
    setBirthDate(birthDate);
  }

  function clickHandler() {
    var sum = birthDate
      .toString()
      .replace(/[-/]/g, "")
      .split("")
      .map(Number)
      .reduce(function (a, b) {
        return a + b;
      }, 0);
    var luckyValue = sum % luckyNumber;

    if (luckyValue === 0) {
      setImageURL("images/lucky-gif.gif");
      setLuckyResult("Yep! you have lucky birthday");
    } else {
      setImageURL("images/monkey-nope.gif");
      setLuckyResult("Nope! your birthday is not lucky one");
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Lucky Birthday</h1>
      </header>
      <div className="intro-para">
        <p>Is your birthday is lucky birthday or not?</p>
        <p>enter your birthday to know</p>
      </div>

      <div className="main-div">
        <input
          className="birth-input"
          type="date"
          onChange={inputBirthHandler}
          placeholder="Enter your birthday"
          required
        />
        <input
          onChange={inputLuckyHandler}
          type="number"
          placeholder="Enter your lucky number"
          required
        />
        <button onClick={clickHandler} type="submit">
          Check{" "}
        </button>
      </div>

      <div className="result-div">
        <h3>{luckyResult}</h3>
        <h3>{error}</h3>
      </div>
      <div className="image-div">
        <img src={imageURL} alt="" />
      </div>
      <footer>
        <p>
          Made by{" "}
          <a href="https://rishiportfolio.netlify.app/">Rishi Srivastava </a>
        </p>
      </footer>
    </div>
  );
}
