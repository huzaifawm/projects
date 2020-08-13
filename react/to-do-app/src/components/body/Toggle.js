import React from 'react'

function Toggle() {
  return (
    <div className="toggleDiv">
      <div className="toggleText">Show Completed Tasks</div>
      <div className="toggle">
        <input type="checkbox" className="check" />
        <b className="b switch"></b>
        <b className="b track"></b>
      </div>
    </div>
  )
}

export default Toggle