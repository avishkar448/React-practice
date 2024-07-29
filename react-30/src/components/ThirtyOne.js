import React, { useEffect, useState } from 'react'

const ThirtyOne = () => {

    const [color,setColor]=useState("red")

    useEffect(()=>{ 
       const intervel={ 
        red:5000,
        yellow:2000,
        green:4000
       }

       const changeColor=(currColor)=>{ 
        switch(currColor){ 
            case 'red':
                return 'green'
            case 'green':
                return 'yellow'
            case 'yellow':
                return 'red'
            default:
                return 'red'
        }
       }

       const timer=setTimeout(()=>{
        setColor((prev)=> changeColor(prev))
       },intervel[color])

       return ()=> clearTimeout(timer)
    },[color])

  return (
    <div>
        <h1 className='text-3xl font-bold'>Traffic Light </h1>
     <div className='flex justify-center items-center'>
     <div className={`m-2 ${color==='red' ? 'bg-red-600':''} rounded-full`} style={{width:"300px", height:"300px",border:"1px solid black"}}></div>
      <div className={`m-2 ${color==='yellow' ? 'bg-yellow-600':''} rounded-full`} style={{width:"300px", height:"300px",border:"1px solid black"}}></div>
      <div className={`m-2 ${color==='green' ? 'bg-green-600':''} rounded-full`} style={{width:"300px", height:"300px",border:"1px solid black"}}></div>
     </div>
    </div>
  )
}

export default ThirtyOne
