import { useEffect, useRef, useState } from 'react';
import { staticUrl } from '../../../Config/apiUrl';
import apiCall from '../../../Services/apiCall';

const FileUpload = ({ Label, value, onChange}) => {
    const [file,setFile] = useState(null);
    const ref = useRef();

    useEffect(()=>{
        if(!file)return;
        uploadFile();
    },[file])

    useEffect(()=>{
        if(!value)setFile(null)
    },[value])

    const uploadFile = async()=>{
         const formData = new FormData();
         formData.append("image",file);
        const res = await apiCall(
             "/utils/upload-image",                                                                                                                                                                                                                                                     
            "POST",
            formData,
            true
            );
        onChange(res.data.imageUrl);
    }   

    return(
        <div className ="form-field">
            <label>
                {Label}
            </label>
            <input 
                ref={ref}
                style={{
                    display: "none"
                }}
                type ="file"
            
                onChange={(e)=>{
                    setFile(e.target.files[0])
                }}
            />
            <div>
                <button
                     className='file-upload-button'
                     type='button'
                     onClick={()=>{
                        ref.current.click();
                     }}
                >
                   Select File
                </button>
                {file && <span>{file.name}</span>}
            </div>
            {value && <img src={
                staticUrl+value
                } alt="image" />}
        </div>
   )
}
 export default FileUpload
