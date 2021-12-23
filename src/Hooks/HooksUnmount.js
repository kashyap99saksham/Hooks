import React from 'react'
import { useEffect } from 'react/cjs/react.development'

const HooksUnmount = () => {
    
    useEffect(
        ()=>{
            return () => {
                alert('Kahan Gya jalwaa!!!')
            }
        }
    )

    return (
        <div>
            <h1>Jalwa hai humara yaha </h1>
        </div>
    )
}

export default HooksUnmount

