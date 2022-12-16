import React from 'react'
import { Link } from 'react-router-dom'

const DropdownItem = ({ text, color,src }) => {
    return (
        <span className="dropdownItem">
            <Link className="item" >
                <img src={src}/>
                <p style={{ color: color }} >{text}</p>
            </Link>
        </span>
    )
}
export default DropdownItem