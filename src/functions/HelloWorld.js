import React, { useState } from 'react'
import Row from '../Row'

export default function HelloWorld(props) {
  const [name, setName] = useState('Han Solo')
  const [job, setJob] = useState('Smuggler')

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleJobChange(e) {
    setJob(e.target.value)
  }

  return (
    <section>
      <section>
        <Row label="Name">
          <input value={name} onChange={handleNameChange} />
        </Row>
        <Row label="Job">
          <input value={job} onChange={handleJobChange} />
        </Row>
      </section>
    </section>
  )
}
