import React from 'react'

const Button = ({ title, type = "submit",color="#1F5D6A",onClick,width }) => {
  return (
    <div className='button-wrap btn-wrap'>
      <button className='form-button btn'
      style={{backgroundColor:`${color}`,width:`${width}`,cursor:"pointer"}}
        type={type}
        onClick={()=>onClick && onClick()}
      >
        {title}
      </button>
    </div>
  )
}

export default Button
