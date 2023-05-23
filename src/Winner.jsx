import React from 'react'

const Winner = ({value}) => {
    const refresh = () => {
        window.location.reload();
    }
  return (
    <div className="popup">
    <p id="message">{value + " is winner"}</p>
    <button id="new-game" onClick={refresh} >New Game</button>
  </div>
  )
}

export default Winner