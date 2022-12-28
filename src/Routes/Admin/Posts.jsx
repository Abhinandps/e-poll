import React from 'react'
import AddForm from '../../Components/Layout/AddForm'
import useAdminConfig from '../../Hooks/useAdminConfig'


const Posts = () => {

  const {
    data,
    add,
    remove
  } = useAdminConfig("position","positions");

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