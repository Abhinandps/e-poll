import React from 'react'
import Button from '../../../../Components/Form/Button'
import CheckBox from '../../../../Components/Form/CheckBox'
import InputField from '../../../../Components/Form/InputField'
import FormLayout from '../../../../Components/Layout/FormLayout'

const CreateElectionForm = ({submit,name,positions,positionList,onChange,positionsChange}) => {
    return (
        <FormLayout title={"Create Election"}>
            <form onSubmit={submit}>
                <InputField
                    Label="Election Name"
                    placeholder="Enter election name"
                    value={name}
                    onChange={(v) => onChange( "name",v )}
                />
                <h2>Select Available Positions</h2>
                <div className='wrap'>
                    {positionList.map(({ name, id }) =>
                        <CheckBox label={name} key={id} checked={positions
                            .map(({id})=>id)
                            .includes(id)}
                            onChange={(v) => positionsChange(v, id)}
                        />
                    )}

                </div>
                <div className='button-section'>
                    <Button type='submit' color="#66BCCF" title="Next" />
                </div>
            </form>
        </FormLayout>
    )
}

export default CreateElectionForm
