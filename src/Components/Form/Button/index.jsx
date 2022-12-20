import React from 'react'

const Button = ({ title, type = "submit",color="#1F5D6A",onClick }) => {
  return (
    <div className='button-wrap btn-wrap'>
      <button className='form-button btn'
      style={{backgroundColor:`${color}`}}
        type={type}
        onClick={()=>onClick && onClick()}
      >
        {title}
      </button>
    </div>
  )
}

export default Button
