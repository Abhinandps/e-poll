import { useEffect,useRef, useState } from "react";
import apiCall from "../../../Services/apiCall";

const fileUpload = ({ Label,value,onChange }) => {
const [file,setFile] = useState(null);
const ref = useRef();
const [value,setValue] = useState("")
useEffect(()=>{
    if(!file)return;
    uploadFile();
   
   },[file])

    const uploadFile = async()=>{
         const formData = new FormData();
         formData.append("image",file);
        const res = await apiCall(
             "/utils/upload-image",                                                                                                                                                                                                                                                     
            "POST",
            formData,
            true
            );
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
                setFile(e.target.files([0]))
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
            {value && <img onScroll={
                staticUrl+value
            } alt="image" />}
    </div>
   )
}
 export default fileUpload
