import React from 'react'
import AddForm from '../../Components/Layout/AddForm'

const Branches = () => {
  const data = [
    {
      id:1,
      name:'ELS'
    },
    {
      id:2,
      name:'CHE'
    },
    {
      id:3,
      name:'CSE'
    }
  ]


  return (
    <AddForm
    title="Available Branches"
    secondTitle="Add Branch"
    data={data}
    placeholder="branch name"
    />
  )
}

export default Branches
