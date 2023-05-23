import React, { useState } from 'react'
import Looping from './Looping';

const Dynamic = () => {
    const [state, setstate] = useState(3);
    const [xs,setXs] = useState([])
    let x = [];
    let gameOver = false;
    let player = "X";

    // setXs(devide)
    for (let j = 0; j < state; j++) {
        let devide = [];
        for (let k = 0; k < state; k++) {
            devide.push("-")
        }
        x.push(devide)
    }

    console.log(xs)

    const callMe = (X, I) => {
        do {
            x[X][I] = player;
            checkWinner(X, I, x)
            player = (player == "X") ? "O" : "X";
            break;
        } while (!gameOver)
    }
    const checkWinner = (X, I, x) => {
        const ForX = (currentValue) => currentValue == "X";
        const ForO = (currentValue) => currentValue == "O";
        let check = [];
        let RightDiagonal = [];
        let LeftDiagonal = [];
        let optVariable = 1;
        // ahiya optional variable atle levo pade chhe because left diagonal ma second value set karavvani chhe
        for (let m = 0; m < state; m++) {
            let dec = state - (optVariable)
            check.push(x[m][I]);
            RightDiagonal.push(x[m][m]);
            LeftDiagonal.push(x[m][dec])
            ++optVariable;
        }

        if (x[X].every(ForX) == true) {
            alert("Winner is X")
        } else if (x[X].every(ForO) == true) {
            alert("winner is O")
        } else if (check.every(ForX) == true) {
            alert("Winner is X")
        } else if (check.every(ForO) == true) {
            alert("Winner is O")
        } else if (RightDiagonal.every(ForX) == true) {
            alert("Winner is X")
        } else if (RightDiagonal.every(ForO) == true) {
            alert("Winner is O")
        } else if (LeftDiagonal.every(ForX) == true) {
            alert("Winner is X")
        } else if (LeftDiagonal.every(ForO) == true) {
            alert("Winner is O")
        }
    }

    const repeat = [];
    for (let r = 0; r < state; r++) {
        repeat.push("auto")
    }

    const csss = repeat.toString();
    const t = csss.replaceAll(",", " ");

    return (
        <>
            <div className='centers' >
                <input type="number" value={state} id="fruits" onChange={e => setstate(e.target.value)} />
                <button className="button-29" role="button">submit  </button>
            </div>
           <Looping t={t} x={x} callMe={callMe} />
        </>
    )
}

export default Dynamic
