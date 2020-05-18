import React from 'react'

function MemeImg( props ) {
  return (
    <img
      src={props.memeImageURL}
      width="50px"
      height="50px"
      alt=""
      onClick={() => props.imgClick(props.memeImageURL)}
      className={props.memeClass}
    />
  )
}

export default MemeImg