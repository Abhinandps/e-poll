import React from 'react'

const Button = ({ title, type = "submit",onClick }) => {
  return (
    <div className='button-wrap'>
      <button className='form-button'
        type={type}
        onClick={()=>onClick && onClick()}
      >
        {title}
      </button>
    </div>
  )
}

export default Button
