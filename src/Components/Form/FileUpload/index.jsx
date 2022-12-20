import React from 'react'

const FileUpload = ({ Label, type = "text" }) => {
    return (
        <div className="form-field">
            <label>
                {Label}
            </label>
            <input style={{backgroundColor:"transparent", border:"none"}}
                type={type}
            />

        </div>
    )
}

export default FileUpload
