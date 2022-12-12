import React from 'react'

const Select = ({label,placeholder,options}) => {
  return (
    <div className='form-field'>
        <label>
          {label}
        </label>  
        
    <select name="" id="">
          <option value="">{placeholder}</option>
            {options.map ((data)=>
              <option value={data.id}
              key = {data.id}
            >{data.name}</option>
              )
            }
        </select>
    </div>    
  )
}

export default Select