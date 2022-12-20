import React from 'react'
import "../../Styles/FormLayout.css"
import Button from '../Form/Button'

const FormLayout = ({ title, children }) => {
    return (
        <>
            <div className="form-container">
                <div className="form-header">
                    <h2>{title}</h2>
                </div>
                <div className="form-content">
                    {children}
                </div>
            </div>
        </>
    )
}

export default FormLayout