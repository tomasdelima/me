import React from 'react'
import Optimized from '../Lib/Optimized'

export default class TerminalLine extends Optimized {
  initialize () {
    this.bind = ['toogleCursor']
  }

  componentDidMount () {
    this.toogleCursor()
  }

  toogleCursor () {
    if (!this.props.line.cursor) {
      this.setState({showCursor: false})
    } else {
      this.setState({showCursor: !this.state.showCursor})
      setTimeout(this.toogleCursor, 500)
    }
  }

  shouldComponentUpdate () {return true}

  render() {
    return <Flex>
      {this.props.line.fragments.map((fragment, i) => <Flex key={i} style={fragment.style} dangerouslySetInnerHTML={{__html: fragment.text.replace(/ /g, '&nbsp;')}} />)}
      {this.props.line.cursor && this.state.showCursor && "|"}
      &nbsp;
    </Flex>
  }
}
