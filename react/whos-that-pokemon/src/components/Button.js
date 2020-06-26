import React from "react"

function Button(props) {
  return (
    <div className={props.styling}>
    <button
      name={props.task}
      onClick={props.handleClick}
    >{props.msg}</button>
    </div>
  )
}

export default Button