import React from 'react'

function Task(props) {
  return (
    <div className="postit">
      {props.task}
    </div>
  )
}

export default Task