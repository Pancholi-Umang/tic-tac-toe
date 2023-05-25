import React from "react";
import Winner from "./Winner";
import { useState } from "react";

const Home = () => {

  const initialState = ["", "", "", "", "", "", "", "", ""];
  const [state, setState] = useState(initialState);
  const [changeToggler, setChangeToggler] = useState(true);

  const [StoreValues, setStoreValues] = useState([])
  const [startToggle, setStartToggle] = useState(false)

  const [finalState, setFinalState] = useState(0);
  const [check, setcheck] = useState(false)
  const [stateee, setStateee] = useState([])
  let value = "";
  let copyState;
  
  const handleClick = (index) => {
    copyState = [...state];
    setState(copyState);
    
    if (copyState[index] === "") {
      setStateee([...stateee,changeToggler])
      copyState[index] = changeToggler ? "X" : "O";
      setChangeToggler(!changeToggler);
      startToggle === true ? setStoreValues([copyState]) : setStoreValues([...StoreValues, copyState]);
      setStartToggle(false);
      if (check === true) {
        console.log(stateee)
        setStoreValues([...StoreValues?.slice(0, finalState), copyState])
      }
    } else {
      alert("already selected");
      setStartToggle(false)
    }
    setcheck(false)
  };
  
  const MultipleButtons = (val, i) => {
    setcheck(true)
    setState(val)
    setFinalState(i + 1)
    if(changeToggler === stateee[i]){
      setChangeToggler(!changeToggler)
    }
  
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
          StoreValues?.map((vals, i) => <button key={i} onClick={() => MultipleButtons(vals, i)} className="button-7" role="button">{i + 1}</button>)
        }
        <button id="restart" onClick={OnStartGame}>start</button>
      </div>
    </>
  );
};

export default Home;

// import React from "react";
// import Winner from "./Winner";
// import { useState } from "react";

// const Home = () => {

//   const initialState = ["", "", "", "", "", "", "", "", ""];
//   const [state, setState] = useState(initialState);
//   const [changeToggler, setChangeToggler] = useState(true);

//   const [StoreValues, setStoreValues] = useState([])
//   const [startToggle, setStartToggle] = useState(false)

//   const [finalState, setFinalState] = useState(0);
//   const [check, setcheck] = useState(false)
//   let value = "";
//   let copyState;
  
//   const handleClick = (index) => {
//     copyState = [...state];
//     setState(copyState);
  
//     if (copyState[index] === "") {
//       copyState[index] = changeToggler ? "X" : "O";
//       setChangeToggler(!changeToggler);
//       startToggle === true ? setStoreValues([copyState]) : setStoreValues([...StoreValues, copyState]);
//       setStartToggle(false);
//       if (check === true) {
//         setStoreValues([...StoreValues?.slice(0, finalState), copyState])
//       }
//     } else {
//       alert("already selected");
//       setStartToggle(false)
//     }
//     setcheck(false)
//   };
  
  
//   const MultipleButtons = (val, i) => {
//     setcheck(true)
//     setState(val)
//     setFinalState(i + 1)
//   }
  
//   const OnStartGame = () => {
//     setState(initialState)
//     setStartToggle(true)
//   }

//   const checkWinner = () => {
//     const winnerCondition = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

//     for (let logic of winnerCondition) {
//       const [a, b, c] = logic;
//       if (state[a] != "" && state[a] === state[b] && state[a] === state[c]) {
//         value = state[a];
//         return true
//       } else {
//         // console.log("else")
//       }
//     }
//   };


//   const isWinner = checkWinner();

//   return (
//     <>
//       <div className="wrapper">
//         <div className="container">
//           {isWinner ? (
//             <Winner value={value} />
//           ) : (
//             state?.map((val, index) => {
//               return (
//                 <button
//                   key={index}
//                   className="button-option"
//                   onClick={() => handleClick(index)}
//                 >
//                   {val}
//                 </button>
//               );
//             })
//           )}
//         </div>
//         {
//           StoreValues?.map((vals, i) => <button key={i} onClick={() => MultipleButtons(vals, i)} className="button-7" role="button">{i + 1}</button>)
//         }
//         <button id="restart" onClick={OnStartGame}>start</button>
//       </div>
//     </>
//   );
// };

// export default Home;
