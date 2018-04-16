import React from 'react'
import Optimized from '../Lib/Optimized'

require('../Lib/Import')
require('../Lib/Theme')

global.log = console.log.bind(console)

export default class Home extends Optimized {
  initialize () {
    this.lines = [
      [{wait: 1000}, {text: "Oi, eu sou o "}, {text: "Tomás!", style: s.color(t.red)}],
      [{wait: 1000}, {text: "Bem vindo à minha página", wait: 600}],
      [{text: "Permita-me uma breve apresentação"}],
      [{text: "Esse daqui sou eu"}],
      [{text: "-", wait: 600}, {text: "-".repeat((s.Width/2 - 100)/7.83) + ">", throttle: 50}],
    ]
  }

  componentDidMount () {
    document.getElementsByTagName("body")[0].style.margin = 0
  }

  render() {
    return <Terminal lines={this.lines}/>
  }
}
