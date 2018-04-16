import React from 'react'
import Optimized from '../Lib/Optimized'

export default class Terminal extends Optimized {
  initialize () {
    // this.bind = ['newLine', 'writeFragments', 'writeFragment', 'writeCharacters', 'writeCharacter']
    this.state = {lines: []}

    this.animate = 1
  }

  componentDidMount () {
    // this.state = {lines: [
    //   {fragments: [{text: 'linha'}, {text: '1', style: {color: 'red'}}], cursor: false},
    //   {fragments: [{text: 'linha'}, {text: '2', wait: 1000}], cursor: true},
    // ]}

    this.indexes = {lines: 0}
    this.newLine()
  }

  newLine () {
    if (this.indexes.lines == this.props.lines.length) return
    if (this.indexes.lines > 0) this.state.lines[this.indexes.lines - 1].cursor = false

    this.state.lines.push({fragments: [], cursor: true})
    this.indexes.fragments = 0
    this.writeFragments()
  }

  writeFragments () {
    var fragments = this.props.lines[this.state.lines.length - 1]

    if (this.indexes.fragments < fragments.length) {
      this.writeFragment(fragments[this.indexes.fragments])
    } else {
      this.indexes.lines += 1
      this.newLine()
    }
  }

  writeFragment (fragment) {
    this.state.lines[this.indexes.lines].fragments.push(Object.assign({}, fragment, {text: ''}))
    this.indexes.characters = 0
    this.writeCharacters(fragment.text)
  }

  writeCharacters (characters='') {
    if (this.indexes.characters < characters.length) {
      setTimeout(() => {
        this.writeCharacter(characters[this.indexes.characters])
        this.indexes.characters += 1
        this.writeCharacters(characters)
      }, this.throttle())
    } else {
      this.forceUpdate()
      setTimeout(() => {
        this.indexes.fragments += 1
        this.writeFragments()
      }, this.props.lines[this.indexes.lines][this.indexes.fragments].wait)
    }
  }

  writeCharacter (character) {
    this.state.lines[this.indexes.lines].fragments[this.indexes.fragments].text += character
    this.forceUpdate()
  }

  throttle (fragment) {
    var baseThrottle = this.props.lines[this.indexes.lines][this.indexes.fragments].text[this.indexes.characters] == " " ? 100 : 0
    return !this.animate ? 0 : this.props.lines[this.indexes.lines][this.indexes.fragments].throttle || baseThrottle + Math.random() * 200
  }

  render() {
    return <Flex lineHeight={20} font="monospace" start1 start2 column BG="#002B36" color="#D5E1E2" padding={10} high={s.Height}>
      {this.state.lines.map((line, i) => <TerminalLine key={i} line={line} />)}
    </Flex>
  }
}
