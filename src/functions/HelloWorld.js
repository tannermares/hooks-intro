import React, { useState } from 'react'
import Row from '../Row'

export default function HelloWorld(props) {
  const [name, setName] = useState('Han')

  function handleNameChange(e) {
    setName(e.target.value)
  }

  return (
    <section>
      <section>
        <Row label="Name">
          <input value={name} onChange={handleNameChange} />
        </Row>
      </section>
    </section>
  )
}
