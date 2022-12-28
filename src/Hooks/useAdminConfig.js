import { useEffect, useState } from "react"
import apiCall from "../Services/apiCall"

const useAdminConfig = (key,dataKey)=>{
    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(false)
  
    const add = async (value) => {
      if(!value) return
      await apiCall(`/admin/add-${key}`, "POST", { name: value })
      setRefresh(prev => !prev)
    }
  
    const remove = async(id)=>{
      await apiCall(`/admin/remove-${key}`,"POST",{_id:id})
      setRefresh(prev => !prev)
    }
  
  
    const getProfile = async () => {
      const res = await apiCall("/admin/profile")
      setData(res.data.college[dataKey].map(d => ({ ...d, id: d._id })))
    }
  
    useEffect(() => {
      getProfile()
    }, [refresh])
    
    return {
        data,
        add,
        remove,
    }

}

export default useAdminConfig;