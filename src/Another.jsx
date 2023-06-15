import React, { forwardRef, useEffect, useState } from 'react'
import Winner from './Winner';

const Another = () => {

    const [Input, setinput] = useState(Number(3))

    const initialState = Array(Input * Input).fill("")
    const [Blocks, setBlocks] = useState(initialState);
    const [changeToggler, setChangeToggler] = useState(true);
    const [StoreValues, setStoreValues] = useState([]);
    const [clickStartButtonToToggle, setClickStartButtonToToggle] = useState(false)

    const [finalState, setFinalState] = useState(0);
    const [check, setcheck] = useState(false)
    const [BoolToChangeXandO, setBoolToChangeXandO] = useState([])

    let value = "";


    useEffect(() => {
        setBlocks(Array(Input * Input).fill(""))
    }, [Input])

    const repeat = [];
    for (let r = 0; r < Input; r++) {
        repeat.push("auto")
    }

    const csss = repeat.toString();
    const t = csss.replaceAll(",", " ");

    const handleClick = (index) => {
        let copyState = [...Blocks];
        setBlocks(copyState)

        if (copyState[index] === "") {
            setBoolToChangeXandO([...BoolToChangeXandO, changeToggler])
            copyState[index] = changeToggler ? "X" : "O";
            setChangeToggler(!changeToggler);
            clickStartButtonToToggle === true ? setStoreValues([copyState]) : setStoreValues([...StoreValues, copyState]);
            setClickStartButtonToToggle(false);
            if (check === true) {
                setStoreValues([...StoreValues?.slice(0, finalState), copyState])
              }
        } else {
            alert("already selected");
            setClickStartButtonToToggle(false);
        }
        setcheck(false)
    };


    const MultipleButtons = (val, i) => {
        setcheck(true)
        setBlocks(val)
        setFinalState(i + 1)
        if (changeToggler === BoolToChangeXandO[i]) {
            setChangeToggler(!changeToggler)
        }
    }

    const OnStartGame = () => {
        setBlocks(initialState);
        setClickStartButtonToToggle(true);
    }

    function checkWinner(dimensions) {
        const winnerCondition = [];

        // Rows
        for (let i = 0; i < dimensions; i++) {
            const row = [];
            for (let j = 0; j < dimensions; j++) {
                row.push(i * dimensions + j);
            }
            winnerCondition.push(row);
        }

        // Columns
        for (let i = 0; i < dimensions; i++) {
            const column = [];
            for (let j = 0; j < dimensions; j++) {
                column.push(j * dimensions + i);
            }
            winnerCondition.push(column);
        }

        // Diagonal from top-left to bottom-right
        const diagonal1 = [];
        for (let i = 0; i < dimensions; i++) {
            diagonal1.push(i * dimensions + i);
        }
        winnerCondition.push(diagonal1);

        // Diagonal from top-right to bottom-left
        const diagonal2 = [];
        for (let i = 0; i < dimensions; i++) {
            diagonal2.push(i * dimensions + (dimensions - 1 - i));
        }
        winnerCondition.push(diagonal2);

        for (let logic of winnerCondition) {
            let match = true;
            for (let index of logic) {
                if (Blocks[index] === "") {
                    match = false;
                    break;
                }
                if (Blocks[index] !== Blocks[logic[0]]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                value = Blocks[logic[0]];
                return true;
            }
        }
    }

    const isWinner = checkWinner(Input);

    return (
        <div>
            <div className='centers '>
                <input type="number" value={Input || ""} id="fruits" onChange={(e) => setinput(e.target.value)} />
                <button className="button-29" onClick={OnStartGame} role="button"> reset </button>
            </div>

            <div className="wrapper mt-5">
                <div className="container">
                    {
                        isWinner ? <Winner value={value} /> : <div style={{ display: "grid", gridTemplateColumns: `${t}`, marginTop: "50px", width: "400px", height: "400px", marginLeft: "auto", marginRight: "auto" }}>
                            {
                                Blocks?.map((val, index) => {
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
                            }
                        </div>
                    }

                </div>

            </div>
            {
                StoreValues?.map((vals, i) => <button key={i} onClick={() => MultipleButtons(vals, i)} className="button-7" role="button">{i + 1}</button>)
            }
        </div>
    )
}

export default Another