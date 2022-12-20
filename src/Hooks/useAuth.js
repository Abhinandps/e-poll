import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = (type)=>{
    const navigate = useNavigate();
    useEffect(()=>{
        const token = localStorage.getItem("token");
        const userType = localStorage.getItem("userType");
        if(!token || userType !== type){
            navigate(`/${type}/sign-in`);
        }
       },[]);
       
}

export default useAuth