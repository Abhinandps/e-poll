import React from 'react'
import Button from '../../../Components/Form/Button';
import InputField from '../../../Components/Form/InputField'
import FormLayout from '../../../Components/Layout/FormLayout'

const Checkbox = ({ label }) => {
  return (
    <div className="checkbox-wrapper">
      <label>
        <input className="box" type="checkbox"  />
        <span>{label}</span>
      </label>
    </div>
  );
};

const CreateElection = ({title}) => {
  return (
    <>
    <FormLayout title={title}>
    <form>
    <InputField
     Label="Election Name"
     placeholder="Enter election name"
     />
    <h2>Select Available Positions</h2> 
    <div className='wrap'>
    <Checkbox label="Chairman" />
    <Checkbox label="Vice-Chairman" />
    <Checkbox label="General Secratary" />
    <Checkbox label="Magazine Editor" />
    <Checkbox label="Arts club Secratary" />
    <Checkbox label="Secratary of Sports" />
    <Checkbox label="Ladies Representative" />
    </div>
    </form>
    </FormLayout>
    <div className='button-section'>
    <Button type='button' color="#66BCCF" title="Next"/>
    </div>
    </>
  )
}

export default CreateElection