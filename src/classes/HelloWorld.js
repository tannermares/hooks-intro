import React from 'react'
import Row from '../Row'

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Han Solo',
      job: 'Smuggler',
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleJobChange = this.handleJobChange.bind(this)
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }

  handleJobChange(e) {
    this.setState({ job: e.target.value })
  }

  render() {
    return (
      <section>
        <Row label="Name">
          <input value={this.state.name} onChange={this.handleNameChange} />
        </Row>
        <Row label="Job">
          <input value={this.state.job} onChange={this.handleJobChange} />
        </Row>
      </section>
    )
  }
}
