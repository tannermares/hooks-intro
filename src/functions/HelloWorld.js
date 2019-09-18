import React, { useState, useEffect } from 'react'
import Row from '../Row'

export default function HelloWorld(props) {
  const [name, setName] = useState('Han Solo')
  const [job, setJob] = useState('Smuggler')

  useEffect(() => {
    document.title = name + ' ' + job
  })

  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

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
        <Row label="Width">{width}</Row>
      </section>
    </section>
  )
}
