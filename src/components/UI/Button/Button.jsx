import './Button.scss'
import React from 'react'

export const Button = ({ btnType, children }) => {
  return <div className={btnType}>{children}</div>
}
