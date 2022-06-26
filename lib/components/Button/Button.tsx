import React from 'react'

interface ButtonProps {
  text: string
}

const Button = (props: ButtonProps) => {
  return <button>{props.text}</button>
}

export default Button
