import React, { useState, useEffect } from 'react'
import Row from '../Row'

export default function HelloWorld(props) {
  const [name, setName] = useState('Han Solo')
  const [job, setJob] = useState('Smuggler')
  const width = useWindowWidth()

  useEffect(() => {
    document.title = name + ' ' + job
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

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })
  return width
}
