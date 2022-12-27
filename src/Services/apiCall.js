import { apiUrl } from "../Config/apiUrl";

const apiCall = async(url,method="GET",data,isFile = false)=>{
    const res = await fetch(`${apiUrl}${url}`, {
            method,
            headers: !isFile
            ? {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}`,
            }
            : {},
            body:isFile ? data: data ? JSON.stringify(data) : undefined,
        });
        const response = await res.json();
        return response;
};

export default apiCall;
