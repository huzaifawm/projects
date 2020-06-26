import React from "react"

function Image(props) {
  return (
    <img
      src={props.url}
      alt=""
      className={props.style}
    />
  )
}

export default Image