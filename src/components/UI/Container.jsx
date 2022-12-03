import React from 'react'
import './style.css'

export default function Container({children, className}) {
  return (
    <div className={className ? ["container", className].join(" ") : "container"}>{children}</div>
  )
}
