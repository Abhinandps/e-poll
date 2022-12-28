import React from 'react'
import AddForm from '../../Components/Layout/AddForm'
import useAdminConfig from '../../Hooks/useAdminConfig';

const Branches = () => {
 
  const {
    data,
    add,
    remove
  } = useAdminConfig("batch","batches");


  return (
    <AddForm
    title="Available Branches"
    secondTitle="Add Branch"
    data={data}
    placeholder="branch name"
    add={add}
    remove={remove}
    />
  )
}

export default Branches
