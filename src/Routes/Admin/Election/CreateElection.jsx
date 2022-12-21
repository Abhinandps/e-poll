import React, { useState } from 'react'
import AddCandidates from './AddCandidates';
import CreateElectionForm from './Components/CreateElectionForm';



const CreateElection = () => {

  const positionList = [
    "Chairman",
    "Vice-Chairman",
    "General Secratary",
    "Magazine Editor",
    "Arts club secretary",
    "Ladies Representative"
  ].map((name, index) => ({ name, id: index + 1 }))


  const [data, setData] = useState({
    currentPage:1,
    name: "",
    positions: [
      
    ],
    candidatesList:[
      
    ]
  })

  const {name,positions} = data;


  const positionsChange = (value, id) => {
    if (value) {
      setData(prev => ({
        ...prev,
        positions: [...prev.positions, id],
        candidatesList: [...prev.candidatesList, {
          id: id,
          candidates:[]
        }]
      }))
      return
    }
    setData(prev => ({
      ...prev,
      positions: prev.positions.filter(i => i !== id),
      candidatesList: prev.candidatesList.filter(data => data.id !== id)
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
    <AddCandidates 
      goBack={goBack}
      {...data}
      candidatesList = {data.candidatesList.map(
        (data)=>(
          {...data,name:positionList.find(({id})=>id===data.id).name
          }
        ))
        }
    />
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