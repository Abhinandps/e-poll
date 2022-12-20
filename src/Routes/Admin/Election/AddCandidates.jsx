import React from 'react'
import PositionCard from './Components/PositionCard'
import Button from '../../../Components/Form/Button'
import FileUpload from '../../../Components/Form/FileUpload'
import InputField from '../../../Components/Form/InputField'
import Select from '../../../Components/Form/Select'
import FormLayout from '../../../Components/Layout/FormLayout'
import "../../../Styles/AddCandidate.css"

const AddCandidates = ({ title }) => {
    const data = [
        {
            position: 'Chairman',
            candidates: [
                {
                    name: "Joshua Dyer",
                    department: "cs",
                    semester: "6",
                    rollno: "10"
                },
                {
                    name: "Jhon",
                    department: "cs",
                    semester: "6",
                    rollno: "10"
                }

            ]
        },

        {
            position: 'Vice-Chairman',
            candidates: [
                {
                    name: "Joshua Dyer",
                    department: "cs",
                    semester: "6",
                    rollno: "10"
                },
                {
                    name: "Jhon",
                    department: "cs",
                    semester: "6",
                    rollno: "10"
                },
                {
                    name: "Joshua Dyer",
                    department: "cs",
                    semester: "6",
                    rollno: "10"
                },
                {
                    name: "Jhon",
                    department: "cs",
                    semester: "6",
                    rollno: "10"
                }

            ]
        },
        {
            position: 'General Secretary',
            candidates: [
                {
                    name: "Joshua Dyer",
                    department: "cs",
                    semester: "6",
                    rollno: "10"
                },
                {
                    name: "Jhon",
                    department: "cs",
                    semester: "6",
                    rollno: "10"
                },
                {
                    name: "Joshua Dyer",
                    department: "cs",
                    semester: "6",
                    rollno: "10"
                },
                {
                    name: "Jhon",
                    department: "cs",
                    semester: "6",
                    rollno: "10"
                }

            ]
        }

    ]

    return (
        <>
            <FormLayout title={title}>

                <div className="candidate-form-container">
                    <div className="form-left-section">
                        <div className="form-input-section">
                            <InputField
                                Label="Search Candidate"
                                placeholder="Reg.No"
                            />
                            <Button type='submit' title="search" />
                        </div>

                        <InputField
                            Label="Department"
                            placeholder="department"
                        />

                        <Select
                            Label="Select Position"
                            placeholder="choose one"
                            options={[]}
                        />

                    </div>
                    <div className="form-right-section">
                        <InputField
                            Label="Full Name"
                            placeholder="name"
                        />

                        <InputField
                            Label="Branch"
                            placeholder="branch"
                        />

                        <FileUpload
                            Label="Select Avatar"
                            type='file'
                        />
                    </div>
                </div>
                <div className="button-section">
                    <Button type='button' color="#66BCCF" title="Add" />
                    <Button type='button' title="Clear" />
                </div>
            </FormLayout>


            <div className="election-view-section candidate-view-section">
                {data.map(position =>
                    <PositionCard {...position} key={position.position} />
                )
                }
            </div>

            <div className='btn-draft-section'>
                <Button type='button' color="#9592A6" title="Save Draft" />
            </div>
            <div className="button-section">

                <Button type='button' title="Prev" />
                <Button type='button' color="#2d7feb" title="Publish" />
            </div>


        </>
    )
}

export default AddCandidates