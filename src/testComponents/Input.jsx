import React, { useState } from 'react'

const Input =() => {

const [text, setText] = useState('initial')

const handleInputChange = (e) => {
  const { text } = e.target
  // setText({...} )
}

  return (
    <div>
      <input />
    </div>
  )
}

export default Input
