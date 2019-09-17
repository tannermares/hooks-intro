import React from 'react'
import Row from '../Row'

export default function HelloWorld(props) {
  return (
    <section>
      <Row label="Name">{props.name}</Row>
    </section>
  )
}
