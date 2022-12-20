import React from 'react'

const DropdownItem = ({ text, color,src, onClick}) => {
    return (
        <span className="dropdownItem" onClick={()=>onClick && onClick()}>
            <div className="item" >
                <img src={src}/>
                <p style={{ color: color }} >{text}</p>
            </div>
        </span>
    )
}
export default DropdownItem