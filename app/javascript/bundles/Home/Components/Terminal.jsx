import React from 'react'
import Optimized from '../Lib/Optimized'

export default class Terminal extends Optimized {
  initialize () {
    this.bind = ['newLine', 'writeLine', 'writeChar', 'writingTime', 'finishedWritingText']
    this.state = {lines: [], currentLine: {}, text1Index: 0, text2Index: 0}

    this.animate = 0
  }

  componentDidMount () {
    this.newLine()
  }

  newLine () {
    var s = this.state

    if (s.lines.length == this.props.lines.length) return
    if (s.lines.length > 0) this.state.lines[s.lines.length - 1].cursor = false

    var line = this.props.lines[s.lines.length]

    this.state.lines.push({text1: '', text2: '', text1Color: this.props.lines[s.lines.length].text1Color, text2Color: this.props.lines[s.lines.length].text2Color, cursor: true})
    this.setState({text1Index: 0, text2Index: 0, currentLine: this.props.lines[s.lines.length - 1]}, () => {
      setTimeout(this.writeLine, s.currentLine.wait || this.writingTime() * 3)
    })
  }

  writeLine () {
    var s = this.state

    if (s.text1Index < s.currentLine.text1.length) {
      this.writeChar(1)
    } else {
      this.writeChar(2)
    }

    if (this.finishedWritingText(1) && this.finishedWritingText(2)) {
      setTimeout(this.newLine, this.writingTime())
    } else {
      setTimeout(this.writeLine, this.writingTime())
    }
  }

  finishedWritingText (index) {
    var text = 'text' + index
    return !this.state.currentLine[text] || this.state[text + 'Index'] > this.state.currentLine[text].length - 1
  }

  writeChar (index) {
    var text = 'text' + index
    this.state.lines[this.state.lines.length - 1][text] += this.state.currentLine[text][this.state[text + 'Index']]
    this.setState({[text + 'Index']: this.state[text + 'Index'] + 1})
  }

  writingTime () {
    var text = this.state.currentLine.text1 + this.state.currentLine.text2
    var baseTime = text[text.length - 1] == " " ? 300 : 0
    return !this.animate ? 0 : this.state.currentLine.time || baseTime + Math.random() * 300
  }

  setTextIndex (index) {
    var textIndex = 'text' + index + 'Index'
    this.setState({[textIndex]: this.state[textIndex] + 1})
  }

  render() {
    return <Flex lineHeight={20} font="monospace" start1 start2 column BG="#002B36" color="#D5E1E2" padding={10} high={s.Height}>
      {this.state.lines.map((line, i) => <TerminalLine key={i} cursor={line.cursor} text1={line.text1} text2={line.text2} text1Color={line.text1Color} text2Color={line.text2Color} />)}
    </Flex>
  }
}
