import React, { useEffect, useState } from 'react'

const Dynamic = () => {

    const refresh = () => {
        window.location.reload();
    }

    const [data, setData] = useState([]);
    const [state, setstate] = useState();
    const [player, setPlayer] = useState("X");
    const [storeValues, setStoreValues] = useState([])
    let x = [];

    useEffect(() => {
        setstate(3)
    }, [])

    useEffect(() => {
        for (let j = 0; j < state; j++) {
            let devide = [];
            for (let k = 0; k < state; k++) {
                devide.push("")
            }
            x.push(devide)
            setData(x)
        }
    }, [state])

    let copystate = [];
    const AddValues = (X, I) => {
        // copystate = [...data]
        // console.log(copystate)
        // setData(copystate)
        // if (copystate[X][I] === "") {
        //     copystate[X][I] = player ? "X" : "O"
        //     setPlayer(!player)
        //     const winner = checkWinner(X, I);
        //     if (winner !== null) {
        //         alert(winner + " is the winner.");
        //     }
        // } else {
        //     alert("already clicked");
        // }

        data[X][I] = "2"
        copystate = [...data]
        setStoreValues([...storeValues, copystate]);
    }
    console.log(storeValues)

    // console.log(storeValues)

    const multiple_small_button = (val, ind) => {
        console.log(val, ind)
    }

    const checkWinner = (X, I) => {
        const ForX = (currentValue) => currentValue == "X";
        const ForO = (currentValue) => currentValue == "O";
        let check = [];
        let RightDiagonal = [];
        let LeftDiagonal = [];
        let optVariable = 1;

        for (let m = 0; m < state; m++) {
            let dec = state - (optVariable)
            check.push(data[m][I]);
            RightDiagonal.push(data[m][m]);
            LeftDiagonal.push(data[m][dec])
            ++optVariable;
        }

        let winner = null;
        if (data[X].every(ForX) || check.every(ForX) || RightDiagonal.every(ForX) || LeftDiagonal.every(ForX)) {
            winner = 'X';
        } else if (data[X].every(ForO) || check.every(ForO) || RightDiagonal.every(ForO) || LeftDiagonal.every(ForO)) {
            winner = 'O';
        }
        return winner;
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
                <input type="number" value={state || ""} id="fruits" onChange={(e) => setstate(e.target.value)} />
                <button className="button-29" onClick={refresh} role="button"> reset </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: `${t}`, marginTop: "50px", width: "400px", height: "400px", marginLeft: "auto", marginRight: "auto" }}>
                {
                    data?.map((val, X) => {
                        return val?.map((ins, I) => {
                            return <button key={I} onClick={() => AddValues(X, I)}>{ins}</button>
                        })
                    })
                }
            </div>
            {
                storeValues?.map((val, ind) => {
                    return <button key={ind} onClick={() => multiple_small_button(val, ind)}>{ind}</button>
                })
            }

        </>
    )
}

export default Dynamic
