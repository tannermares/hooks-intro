import React, { useState, useEffect, useContext } from 'react'
import Row from '../Row'
import { ThemeContext, LocaleContext } from '../context'

export default function HelloWorld(props) {
  const name = useFormInput('Han Solo')
  const job = useFormInput('Smuggler')
  const width = useWindowWidth()
  const theme = useContext(ThemeContext)
  const locale = useContext(LocaleContext)
  useDocumentTitle(name.value + ' ' + job.value)

  return (
    <section className={theme}>
      <Row label="Name">
        <input {...name} />
      </Row>
      <Row label="Job">
        <input {...job} />
      </Row>
      <Row label="Width">{width}</Row>
      <Row label="Locale">{locale}</Row>
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
