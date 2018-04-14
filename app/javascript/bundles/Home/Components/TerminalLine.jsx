import React from 'react'
import Optimized from '../Lib/Optimized'

export default class TerminalLine extends Optimized {
  initialize () {
    this.bind = ['toogleCursor']
    this.state = {}
  }

  componentDidMount () {
    this.toogleCursor()
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.cursor != this.props.cursor) {
      this.setState({showCursor: nextProps.cursor})
    }
  }

  toogleCursor () {
    if (!this.props.cursor) {
      this.setState({showCursor: false})
    } else {
      this.setState({showCursor: !this.state.showCursor})
      setTimeout(this.toogleCursor, 500)
    }
  }

  render() {
    return <Flex>
      <Flex color={this.props.text1Color || "white"}>{this.props.text1}</Flex>
      {!!this.props.text1 && !!this.props.text2 && (this.props.text1[this.props.text1.length - 1] == ' ') && <Flex>&nbsp;</Flex>}
      <Flex color={this.props.text2Color || "white"}>{this.props.text2}</Flex>
      {this.state.showCursor && "|"}
    </Flex>
  }
}
