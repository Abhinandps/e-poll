import React, { useState } from 'react'
import AddCandidates from './Components/AddCandidates';
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
    currentPage: 1,
    name: "",
    positions: [

    ]

  })

  const { name, positions } = data;


  const positionsChange = (value, id) => {
    if (value) {
      setData(prev => ({
        ...prev,
        positions: [...prev.positions, {
          id: id,
          candidates: []
        }]
      }))
      return
    }
    setData(prev => ({
      ...prev,
      positions: prev.positions.filter(data => data.id !== id)
    }))
  }

  const addCandidate = (candidate) => {
    console.log(candidate);
    setData(prev => {
      const data = { ...prev }
      const positions = [...data.positions]
      const index = positions.map((({ id }) => id + "")).indexOf(candidate.position)

      if (index < 0) return data
      const position = {
        ...positions[index],
        candidates: [...positions[index].candidates, candidate]
      }

      positions[index] = position
      data.positions = positions


      // data.positions[0].candidates = [...data.positions[0].candidates,candidate]
      return data
    })
  }

  const removeCandidate = (candidate) => {
    setData(prev => {
      const data = { ...prev }
      const positions = [...data.positions]
      const index = positions.map((({ id }) => id + "")).indexOf(candidate.position)
      if (index < 0) return data
      const position = {
        ...positions[index],
        candidates: positions[index].candidates.filter(({ _id }) => candidate._id !== _id)
      }

      positions[index] = position
      data.positions = positions

      // data.positions[0].candidates = [...data.positions[0].candidates,candidate]
      return data
    })
  }

  const submit = (e) => {
    e.preventDefault();
    onChange("currentPage", 2)
    console.log(data);
  }

  const onChange = (key, value) => {
    setData(prev => ({
      ...prev,
      [key]: value
    }))
  }


  const goBack = () => {
    onChange("currentPage", 1)
  }
  if (data.currentPage === 2) return (
    <AddCandidates
      goBack={goBack}
      addCandidate={addCandidate}
      removeCandidate={removeCandidate}
      {...data}
      candidatesList={data.positions.map(
        (data) => (
          {
            ...data, name: positionList.find(({ id }) => id === data.id).name
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