import React from 'react'
import Optimized from '../Lib/Optimized'

require('../Lib/Import')
require('../Lib/Theme')

global.log = function () {console.log(arguments)}

export default class Home extends Optimized {
  initialize () {
    log((s.Width/2 - 100)/7.83)
    this.lines = [
      {text1: "Oi, eu sou o ", text2: "Tomás!", text2Color: t.red, wait: 1000},
      {text1: "Bem vindo à minha página", wait: 600},
      {text1: "Permita-me uma breve apresentação"},
      {text1: "Esse daqui sou eu"},
      {text1: "-".repeat((s.Width/2 - 100)/7.83) + ">", time: 50},
    ]
  }

  componentDidMount () {
    document.getElementsByTagName("body")[0].style.margin = 0
  }

  render() {
    return <Terminal lines={this.lines}/>
  }
}
