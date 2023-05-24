import React from "react";
import Winner from "./Winner";
import { useState } from "react";

const Home = () => {

  const initialState = ["", "", "", "", "", "", "", "", ""];
  const [state, setState] = useState(initialState);
  const [changeToggler, setChangeToggler] = useState(true);

  // aa banne state te button and teni value set karavva mate chhe
  const [StoreValues, setStoreValues] = useState([])
  const [startToggle, setStartToggle] = useState(false)

  // aa banne state nichena dynamic button matena chhe
  const [finalState, setFinalState] = useState(0);
  const [check, setcheck] = useState(false)
  let value = "";

  const handleClick = (index) => {
    // console.log(StoreValues)
    let copyState = [...state];
    console.log(copyState)
    if (check == true) {
      copyState[index] = changeToggler ? "X" : "O";
      setStoreValues(StoreValues?.slice(0, finalState));
      setState(copyState);
      setcheck(false)
    }else if (copyState[index] === "") {
      copyState[index] = changeToggler ? "X" : "O";
      setChangeToggler(!changeToggler);
      setState(copyState);
      // check === true ? setStoreValues([copyState]) : setcheck(false);
      startToggle === true ? setStoreValues([copyState]) : setStoreValues([...StoreValues, copyState]);
      setStartToggle(false);
    } else{
      alert("already selected");
      setStartToggle(false)
    }

  };


  const MultipleButtons = (val, i) => {
    setcheck(true)
    setState(val)
    setFinalState(i + 1)
  }

  const OnStartGame = () => {
    setState(initialState)
    setStartToggle(true)
  }

  const checkWinner = () => {
    const winnerCondition = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for (let logic of winnerCondition) {
      const [a, b, c] = logic;
      if (state[a] != "" && state[a] === state[b] && state[a] === state[c]) {
        value = state[a];
        return true
      } else {
        // console.log("else")
      }
    }
  };


  const isWinner = checkWinner();

  return (
    <>
      <div className="wrapper">
        <div className="container">
          {isWinner ? (
            <Winner value={value} />
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
        {
          StoreValues?.map((val, i) => <button key={i} onClick={() => MultipleButtons(val, i)} className="button-7" role="button">{i + 1}</button>)
        }
        <button id="restart" onClick={OnStartGame}>start</button>
      </div>
    </>
  );
};

export default Home;
