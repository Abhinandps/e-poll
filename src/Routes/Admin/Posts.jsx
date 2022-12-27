import React, { useEffect, useState } from 'react'
import AddForm from '../../Components/Layout/AddForm'
import apiCall from '../../Services/apiCall'


const Posts = () => {

  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(false)

  const add = async (value) => {
    if(!value) return
    await apiCall("/admin/add-position", "POST", { name: value })
    setRefresh(prev => !prev)
  }

  const remove = async(id)=>{
    await apiCall("/admin/remove-position","POST",{_id:id})
    setRefresh(prev => !prev)
  }


  const getProfile = async () => {
    const res = await apiCall("/admin/profile")
    setData(res.data.college.positions.map(d => ({ ...d, id: d._id })))
  }

  useEffect(() => {
    getProfile()
  }, [refresh])

  return (

    <AddForm
      title="Available Posts"
      secondTitle="Add Post"
      data={data}
      placeholder="post name"
      add={add}
      remove={remove}
    />
  )
}

export default Posts