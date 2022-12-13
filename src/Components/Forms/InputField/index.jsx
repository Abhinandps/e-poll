import React from 'react'

const InputField = ({label,placeholder,type="text",onChange,value}) => {
  return (
    <div className='form-field'>
        <label>
          {label}
        </label>  
        <input
        value={value} 
        type={type}
        placeholder={placeholder}
        onChange = {e=>onChange(e.target.value)}
        />
    </div>
    )
}

export default InputField