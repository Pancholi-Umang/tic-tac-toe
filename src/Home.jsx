import React from "react";
import Winner from "./Winner";
import { useState } from "react";

const Home = () => {
  const [state, setState] = useState(["", "", "", "", "", "", "", "", ""]);
  const [changeToggler, setChangeToggler] = useState(true);
  let value = "";

  const handleClick = (index) => {
    let copyState = [...state];
    if (copyState[index] === "") {
      copyState[index] = changeToggler ? "X" : "O";
      setChangeToggler(!changeToggler);
      setState(copyState);
    } else {
      alert("already selected");
    }

  };
    const checkWinner = () => {
      const winnerCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let logic of winnerCondition) {
        const [a, b, c] = logic;
        if (state[a] != "" && state[a] === state[b] && state[a] === state[c]) {
          value = state[a];
            return true
        }else{
          console.log("else")
        }
      }
    };

  const isWinner = checkWinner();

  return (
    <>
      <div className="wrapper">
        <div className="container">
          {isWinner ? (
            <Winner value={value}/>
          ) : (
            state?.map((val, index) => {
              return (
                <button
                  key={index}
                  className="button-option"
                  onClick={() => handleClick(index)}
                >
                  {val}
                </button>
              );
            })
          )}
        </div>
        <button id="restart">Restart</button>
      </div>
    </>
  );
};

export default Home;
