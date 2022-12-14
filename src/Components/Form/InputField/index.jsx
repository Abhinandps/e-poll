import React from 'react'

const InputField = ({Label,placeholder,type="text",onChange,value,error}) => {
  return (
    <div className="form-field">
          <label>
            {Label}
          </label>
          <input 
          value={value}
            type={type} 
            placeholder={placeholder}
            onChange ={e=>onChange(e.target.value)}
          />
          <div className='error-field'>{error}</div>
    </div>
  )
}

export default InputField
