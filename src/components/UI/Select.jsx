import React from 'react'

export default function Select({children, hendler, values}) {
  return (
    <div className="select__block">
        <select className='select' onChange={(e)=>{hendler(e.target.value); window.k = values}} value={values}>
            {children}
        </select>
    </div>
   
  )
}
