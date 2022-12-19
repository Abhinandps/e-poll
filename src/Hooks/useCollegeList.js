import { useEffect, useState } from 'react'
import apiCall from '../Services/apiCall';

const useCollegeList = () => {
  const [collegeList, setCollegeList] = useState([]);

  const getCollageList = async () => {
    const response = await apiCall("/utils/colleges");
    setCollegeList(response.data.map(({ _id, name, batches }) => ({
      name,
      id: _id,
      batches: batches.map(({ _id, name }) => ({ name, id: _id })),
    })))
  };


  useEffect(() => {
    getCollageList();
  }, [])

  return collegeList;
};

export default useCollegeList
