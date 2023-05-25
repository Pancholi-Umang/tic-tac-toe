import React, { useEffect, useState } from 'react'

const Dynamic = () => {

    const refresh = () => {
        window.location.reload();
    }

    const [data, setData] = useState([]);
    const [state, setstate] = useState();
    const [player, setPlayer] = useState("X");

    let x = [];
    let gameOver = false;

    const handleChange = (e) => {
        setstate(e.target.value);
    }

    useEffect(() => {
        setstate(3)
    }, [])

    useEffect(() => {
        for (let j = 0; j < state; j++) {
            let devide = [];
            for (let k = 0; k < state; k++) {
                devide.push("-")
            }
            x.push(devide)
            setData(x)
        }
    }, [state])

    const callMe = (X, I) => {
        console.log(data)
        do{
            data[X][I] = player;
            checkWinner(X, I, data)
            setPlayer(player == "X" ? "O" : "X");
            break;
        }while(!gameOver)
    }

    const checkWinner = (X, I) => {
        const ForX = (currentValue) => currentValue == "X";
        const ForO = (currentValue) => currentValue == "O";
        let check = [];
        let RightDiagonal = [];
        let LeftDiagonal = [];
        let optVariable = 1;
        // ahiya optional variable atle levo pade chhe because left diagonal ma second value set karavvani chhe
        for (let m = 0; m < state; m++) {
            let dec = state - (optVariable)
            check.push(data[m][I]);
            RightDiagonal.push(data[m][m]);
            LeftDiagonal.push(data[m][dec])
            ++optVariable;
        }

        if (data[X].every(ForX) == true) {
            alert("Winner is X")
        } else if (data[X].every(ForO) == true) {
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
                <input type="number" value={state} id="fruits" onChange={handleChange} />
                <button className="button-29" onClick={refresh} role="button"> reset </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: `${t}`, marginTop: "10px", width: "300px", height: "300px" }}>
                {
                    data?.map((val, X) => {
                        console.log(data)
                        return val?.map((ins, I) => {
                            return <button key={I} onClick={() => callMe(X, I)}>{ins}</button>
                        })
                    })
                }
            </div>
        </>
    )
}

export default Dynamic
