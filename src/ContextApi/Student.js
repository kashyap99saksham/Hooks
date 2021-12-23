import React from 'react'

const Student = ({name,studentClass,info}) => {
    return (
        <div>
            <div class="card text-white bg-info mb-3" style={{maxWidth: '18rem'}}>
                <div class="card-header">{name}</div>
                <div class="card-body">
                    <h5 class="card-title">{studentClass}</h5>
                    <p class="card-text">{info}</p>
                </div>
            </div>
        </div>
    )
}

export default Student
