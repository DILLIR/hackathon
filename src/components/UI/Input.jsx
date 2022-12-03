import React from 'react';

export default function Input({handler, value, placeholder, className}) {

  return (
    <div className={className}>
        <input  type="text" placeholder={placeholder} value={value} onChange={(e)=>{handler(e.target.value)}}/>
    </div>
  )
}
