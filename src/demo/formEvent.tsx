import React, { useState } from 'react'

function MyInput() {
  const [value, setValue] = useState('')

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  return <input value={value} onChange={onChange} id="input-example" />
}

export default MyInput
