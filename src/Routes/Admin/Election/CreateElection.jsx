import React, { useState } from 'react'
import Button from '../../../Components/Form/Button';
import InputField from '../../../Components/Form/InputField'
import FormLayout from '../../../Components/Layout/FormLayout'
import AddCandidates from './AddCandidates';
import CreateElectionForm from './Components/CreateElectionForm';



const CreateElection = () => {

  const positionList = [
    "Chairman",
    "Vice-Chairman",
    "General Secratary"
  ].map((name, index) => ({ name, id: index + 1 }))


  const [data, setData] = useState({
    currentPage:1,
    name: "",
    positions: [
      1, 3
    ]
  })

  const {name,positions} = data;


  const positionsChange = (value, id) => {
    if (value) {
      setData(prev => ({
        ...prev,
        positions: [...prev.positions, id]
      }))
      return
    }
    setData(prev => ({
      ...prev,
      positions: prev.positions.filter(i => i !== id)
    }))
  }

  const submit = (e)=>{
    e.preventDefault();
    onChange("currentPage",2)
    console.log(data);
  }

  const onChange = (key,value)=>{
    setData(prev=>({
      ...prev,
      [key]:value
    }))
  }


  const goBack = ()=>{
    onChange("currentPage",1)
  }
  if(data.currentPage === 2)return(
    <AddCandidates goBack={goBack}/>
  )
  
  
  return (
    <CreateElectionForm  
    submit={submit}
    {...data}
    positionsChange={positionsChange}
    positionList={positionList}
   
    onChange={onChange}
    />
  )
}

export default CreateElection