import React from 'react'

const CheckBox = ({ label, checked, onChange }) => {
    return (
        <div className="checkbox-wrapper">
            <label>
                <input className="box" type="checkbox" checked={checked} onClick={() => onChange(!checked)} 
                onChange={()=>{}}
                />
                <span>{label}</span>
            </label>
        </div>

    )
}

export default CheckBox
