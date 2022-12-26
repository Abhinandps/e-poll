import React from 'react'
import AddForm from '../../Components/Layout/AddForm'


const Posts = () => {
  const data = [
    {
      id:1,
      name:'chariman'
    },
    {
      id:2,
      name:'vice chariman'
    },
    {
      id:3,
      name:'general secratary'
    }
  ]
  return (

    <AddForm
    title="Available Posts"
    secondTitle="Add Post"
    data={data}
    placeholder="post name"
    />
  )
}

export default Posts