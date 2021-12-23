import React, {useState, useEffect} from 'react'
import ClassCounterOne from './ClassCounterOne';
import HooksUnmount from './HooksUnmount';

const HooksCounterOne = () => {

    const [isVisible, setIsVisible] = useState(false);

    
    return (
        <div>
            <button onClick={()=>setIsVisible(!isVisible)} > visible ? </button>

            {isVisible && <HooksUnmount /> }
            
        </div>
    )
}

export default HooksCounterOne








