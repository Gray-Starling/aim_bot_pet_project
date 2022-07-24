import './Button.scss'
import React from 'react'

export const Button = ({ btnType, children, onClick }) => {
  return (
    <div onClick={onClick} className={btnType}>
      {children}
    </div>
  )
}
