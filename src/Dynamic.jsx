import React, { useEffect, useMemo, useState } from 'react';

const Dynamic = () => {

    const refresh = () => {
        window.location.reload();
    }

    const [Input, setInputValue] = useState(Number());

    const [Blocks, setBlocks] = useState([]);

    const [player, setPlayer] = useState("X");
    const [storeValues, setStoreValues] = useState([]);

    useEffect(() => {
        setInputValue(3)
    }, [])


    const x = [];
    const calculation = useMemo(() => {
        for (let first = 0; first < Input; first++) {
            const devide = [];
            for (let second = 0; second < Input; second++) {
                devide.push("");
            }
            x.push(devide);
        }
        return x
    }, [Input]);
    

    useEffect(() => {
        setBlocks(calculation)
    }, [calculation?.length])

    
    
    const AddValues = (X, I) => {
        let copystate = ([...Blocks]);
        setBlocks(copystate);
        if (copystate[X][I] === "") {
            copystate[X][I] = player ? "X" : "O";
            setPlayer(!player);
            setStoreValues([...storeValues, copystate]);
            const winner = checkWinner(X, I);
            if (winner !== null) {
                alert(winner, "is winner")
            }
        } else {
            alert("already clicked");
        }
    }

    console.log(storeValues,"storevalues");

    const multiple_small_button = (val, ind) => {
        console.log(...val,ind)
    }

    const checkWinner = (X, I) => {
        const ForX = (currentValue) => currentValue == "X";
        const ForO = (currentValue) => currentValue == "O";
        let check = [];
        let RightDiagonal = [];
        let LeftDiagonal = [];
        let optVariable = 1;

        for (let m = 0; m < Input; m++) {
            let dec = Input - (optVariable)
            check.push(Blocks[m][I]);
            RightDiagonal.push(Blocks[m][m]);
            LeftDiagonal.push(Blocks[m][dec])
            ++optVariable;
        }

        let winner = null;
        if (Blocks[X].every(ForX) || check.every(ForX) || RightDiagonal.every(ForX) || LeftDiagonal.every(ForX)) {
            winner = 'X';
        } else if (Blocks[X].every(ForO) || check.every(ForO) || RightDiagonal.every(ForO) || LeftDiagonal.every(ForO)) {
            winner = 'O';
        }
        return winner;
    }

    const repeat = [];
    for (let r = 0; r < Input; r++) {
        repeat.push("auto")
    }

    const csss = repeat.toString();
    const t = csss.replaceAll(",", " ");

    return (
        <>
            <div className='centers' >
                <input type="number" value={Input || ""} id="fruits" onChange={(e) => setInputValue(e.target.value)} />
                <button className="button-29" onClick={refresh} role="button"> reset </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: `${t}`, marginTop: "50px", width: "400px", height: "400px", marginLeft: "auto", marginRight: "auto" }}>
                {
                    Blocks?.map((val, X) => {
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