import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { StudentContext } from './StudenContext'

const StudentStatus = () => {

    const [students,setStudents] = useContext(StudentContext);
    
    return (
        <div className="jumbotron jumbotron-fluid text-info">
            <div className='container'>
                <h1>Total Student : {students.length}</h1>
                <p>Deserunt ea labore reprehenderit laboris irure quis incididunt.</p>
            </div>
        </div>
    )
}

export default StudentStatus
