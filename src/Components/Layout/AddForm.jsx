import React from 'react'
import Button from '../Form/Button'
import InputField from '../Form/InputField'
import FormLayout from './FormLayout'
import edit from '../../Assets/Icons/edit.svg'
import deleteIcon from '../../Assets/Icons/delete.svg'

const AddForm = ({title,secondTitle, data,placeholder}) => {
    return (
        <div className="container-main">
            <FormLayout title={title}>
                <div className="title-section">
                    <h2>{placeholder}</h2>
                    <h2>Modify</h2>
                </div>

                <div className="list-container">
                    {data.map((list) => {
                        return (
                            <div className="list" key={list.id}>
                                <p>{list.name}</p>
                                <div className="icon-group">
                                    <img src={edit} />
                                    <img src={deleteIcon} />
                                </div>
                            </div>
                        )
                    })}

                </div>
            </FormLayout>

            <FormLayout title={secondTitle} height="10vh">
                <div className="form-input-section">
                    <InputField placeholder={placeholder} />
                    <Button type='button' title="Add" />
                </div>
            </FormLayout>
        </div>
    )
}

export default AddForm