import React from 'react'

const Looping = ({ t, x, callMe }) => {
    console.log(x)
    return (
        <div style={{ display: "grid", gridTemplateColumns: `${t}`, marginTop: "10px", width: "300px", height: "300px" }}>
            {
                x.map((val, X) => {
                    return val.map((ins, I) => {
                        return <button key={I} onClick={() => callMe(X, I)}>{ins}</button>
                    })
                })
            }
        </div>
    )
}

export default Looping