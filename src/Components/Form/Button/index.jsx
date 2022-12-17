import React from 'react'

const Button = ({title}) => {
  return (
    <div className='button-wrap'>
    <button className='form-button'
      type='submit'
    >
        {title}
    </button>
    </div>
  )
}

export default Button
