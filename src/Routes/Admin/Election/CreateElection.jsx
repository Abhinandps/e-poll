import React, { useEffect, useState } from 'react'
import apiCall from '../../../Services/apiCall';
import AddCandidates from './Components/AddCandidates';
import CreateElectionForm from './Components/CreateElectionForm';



const CreateElection = () => {

  const [positionList,setPositionList] = useState([])
    
  const getProfile = async () => {
    const res = await apiCall("/admin/profile")
    setPositionList(res.data.college.positions.map(d => ({ ...d, id: d._id })))
    const elections = await apiCall("/admin/get-elections");
    if(!elections.data?.length)return
    const election = elections.data.filter(({status})=>status === 'draft')?.[0];
    if(!election)return
    setData({
      ...data,
      name: election.name,
      id: election._id,
      positions: election.positions.map(p=>({
        id:p.position._id,
        candidates:p.candidates.map(c=>({
          image:c.image,
          ...c.student,
          id:c.student._id,
          position: p.position._id
        }))
      }))
    })
  }

  useEffect(() => {
    getProfile()
  }, [])

  const [data, setData] = useState({
    currentPage: 1,
    name: "",
    positions: [

    ]

  })

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

      return data
    })
  }

  const submit = (e) => {
    e.preventDefault();
    onChange("currentPage", 2)
  }

  const onChange = (key, value) => {
    setData(prev => ({
      ...prev,
      [key]: value
    }))
  }
  
  const saveToDraft = async (status)=>{
    const payload = {
      name: data.name,
      status,
      positions: data.positions.map(d=>({
        position: d.id,
        candidates: d.candidates.map(c=>({
          student: c._id,
          image: c.image
        }))
      }))
    }
    if(data.id){
      await apiCall(
        "/admin/update-election",
        "POST",
        {
          ...payload,
          id: data.id
        }
        )
        return;
    }
    
    const res = await apiCall(
      "/admin/create-election",
      "POST",
      payload
      )
    onChange("id",res.data._id);

  }

  const goBack = () => {
    onChange("currentPage", 1)
  }
  if (data.currentPage === 2) return (
    <AddCandidates
      goBack={goBack}
      addCandidate={addCandidate}
      removeCandidate={removeCandidate}
      saveToDraft={saveToDraft}
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