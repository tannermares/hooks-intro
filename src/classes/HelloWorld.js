import React from 'react'
import Row from '../Row'
import { ThemeContext, LocaleContext } from '../context'

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Han Solo',
      job: 'Smuggler',
      width: window.innerWidth,
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleJobChange = this.handleJobChange.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount() {
    document.title = this.state.name + ' ' + this.state.job
    window.addEventListener('resize', this.handleResize)
  }

  componentDidUpdate() {
    document.title = this.state.name + ' ' + this.state.job
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize() {
    this.setState({ width: window.innerWidth })
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }

  handleJobChange(e) {
    this.setState({ job: e.target.value })
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {theme => {
          return (
            <section className={theme}>
              <Row label="Name">
                <input
                  value={this.state.name}
                  onChange={this.handleNameChange}
                />
              </Row>

              <Row label="Job">
                <input value={this.state.job} onChange={this.handleJobChange} />
              </Row>
              <LocaleContext.Consumer>
                {locale => {
                  return <Row label="Locale">{locale}</Row>
                }}
              </LocaleContext.Consumer>

              <Row label="Width">{this.state.width}</Row>
            </section>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
