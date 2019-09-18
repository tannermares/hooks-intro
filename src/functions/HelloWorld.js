import React, { useState, useEffect } from 'react'
import Row from '../Row'

export default function HelloWorld(props) {
  const name = useFormInput('Han Solo')
  const job = useFormInput('Smuggler')
  const width = useWindowWidth()
  useDocumentTitle(name.value + ' ' + job.value)

  return (
    <section>
      <section>
        <Row label="Name">
          <input {...name} />
        </Row>
        <Row label="Job">
          <input {...job} />
        </Row>
        <Row label="Width">{width}</Row>
      </section>
    </section>
  )
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  function handleChange(e) {
    setValue(e.target.value)
  }

  return { value, onChange: handleChange }
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
  })
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
