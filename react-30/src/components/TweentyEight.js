//Work with multiple state in single state object. The component should display the following information
// A count value initially set 0
// A text value initially set to 'Hello World!'
// An "Active" status initially set true

import React, { useState } from 'react'

const TweentyEight = () => {
    const[states,setStates]=useState({ 
        count:0,
        text:"Hello World!!",
        isActive:true
    })

    const addCount=()=>{ 
        setStates({...states,count: states.count +1})
    }

    const changeText=()=>{ 
        setStates({...states,text:"Welcome Avishkar"})
    }

    const changeStatus=()=>{ 
        setStates({...states,isActive:!states.isActive})
    }
  return (
    <div>
        <h3 className='text-2xl font-bold m-1'>Count:{states.count}</h3>
        <h3 className='text-2xl font-bold m-1'>Text:{states.text}</h3>
        <h3 className='text-2xl font-bold m-1'>isActive:{states.isActive ? "Yes":"No"}</h3>

        <button className='bg-blue-600 text-white p-1 m-2'
        onClick={addCount}
        >count-add</button>
        <button className='bg-yellow-600 text-white p-1 m-2'
        onClick={changeText}
        >change-text</button>
        <button className='bg-green-600 text-white p-1 m-2'
        onClick={changeStatus}
        >change-active</button>
    </div>
  )
}

export default TweentyEight
