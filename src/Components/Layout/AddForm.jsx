import React, { useState } from 'react'
import Button from '../Form/Button'
import InputField from '../Form/InputField'
import FormLayout from './FormLayout'
import edit from '../../Assets/Icons/edit.svg'
import deleteIcon from '../../Assets/Icons/delete.svg'

const AddForm = ({title,secondTitle, data,placeholder,add,remove}) => {

    const [value,setValue] = useState("")
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
                                    <img src={deleteIcon} onClick={()=>remove(list.id)} />
                                </div>
                            </div>
                        )
                    })}

                </div>
            </FormLayout>

            <FormLayout title={secondTitle} height="10vh">
                <div className="form-input-section">
                    <InputField placeholder={placeholder} value={value} onChange={(v)=>setValue(v)} />
                    <Button type='button' title="Add"
                     onClick={()=>
                   {  add(value)
                     setValue("")}
                     } />
                </div>
            </FormLayout>
        </div>
    )
}

export default AddForm