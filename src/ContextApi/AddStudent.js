import React, { useState } from 'react'
import { useContext } from 'react/cjs/react.development'
import { StudentContext } from './StudenContext'

const AddStudent = () => {

    const [Name, setName] = useState('')
    const [Class, setClass] = useState('')
    const [Info, setInfo] = useState('')

    const [students,setStudents] = useContext(StudentContext)


    const handleAddClick = () => {

        setStudents( [ ...students , 
            { 
                Name:Name, Class:Class,Info:Info 
            } 
        
        ] )
    }

    //       [ ...students , { } ]

    return (


        <div className='jumbotron jumbotron-fluid '>
            <div class="form-group">
                <label >Name</label>
                <input type='text' class="form-control"  value={Name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div class="form-group">
                <label >Class</label>
                <input type='text' class="form-control" value={Class} onChange={(e) => setClass(e.target.value)} />
            </div>
            <div class="form-group">
            <label >Information</label>
            <input  class="form-control" type='text' value={Info} onChange={(e) => setInfo(e.target.value)} />
            </div>
            <button onClick={handleAddClick} class="btn btn-success">Submit</button>
        </div>


    )
}

export default AddStudent
