import React from 'react'
import HelloWorld from './classes/HelloWorld'
import HelloWorldFunc from './functions/HelloWorld'

function App() {
  return document.location.search.split('?')[1] === 'c' ? (
    <div className="container">
      <HelloWorld name="Han Solo" />
    </div>
  ) : document.location.search.split('?')[1] === 'f' ? (
    <div className="container">
      <div className="func">
        <HelloWorldFunc name="Han Solo" />
      </div>
    </div>
  ) : (
    <div className="container">
      <div style={{ display: 'inline-block' }}>
        <HelloWorld name="Han Solo" />
      </div>
      <div style={{ display: 'inline-block', marginRight: '20%' }}></div>
      <div style={{ display: 'inline-block' }} className="func">
        <HelloWorldFunc name="Han Solo" />
      </div>
    </div>
  )
}

export default App
