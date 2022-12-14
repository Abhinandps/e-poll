import { apiUrl } from "../Config/apiUrl";

const apiCall = async(url,method="GET",data)=>{
    const res = await fetch(`${apiUrl}${url}`, {
            method,
            headers:{
                "Content-Type": "application/json",
            },
            body: data ? JSON.stringify(data) : undefined,
        });
        const response = await res.json();
        return response;
};

export default apiCall;
