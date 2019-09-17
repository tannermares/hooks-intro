import React from 'react'

export default props => {
  return (
    <div style={{ padding: '10px' }}>
      <span
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: 'gray',
          marginBottom: '10px',
        }}
      >
        {props.label}
      </span>
      <hr style={{ width: '80%' }} />
      <span style={{ fontSize: 32, fontWeight: 'bold' }}>{props.children}</span>
    </div>
  )
}
