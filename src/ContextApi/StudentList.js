import React,{ useState } from 'react'
import { useContext } from 'react/cjs/react.development';
import Student from './Student';
import { StudentContext } from './StudenContext';

const StudentList = () => {

    const [students,setStudents] = useContext(StudentContext)

    return (
        <div className='d-flex justiy-content-around'>
            {
                students.map( (student) => <Student name={student.Name} studentClass={student.Class} info={student.Info}/> )

            }

            
        </div>
    )
}

export default StudentList
