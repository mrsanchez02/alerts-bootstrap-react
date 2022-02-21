import React from 'react'

const Button = ({btnClass, btnMsg, btnAction}) => {

  return (
    <div>
      <button type='button' onClick={btnAction} className={`btn btn-${btnClass}`}>{btnMsg}</button>
    </div>
  )
}

export default Button
