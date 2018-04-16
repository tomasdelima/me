import React from 'react'
import Optimized from '../Lib/Optimized'

require('../Lib/Import')
require('../Lib/Theme')

global.log = console.log.bind(console)
Array.prototype.merge = function () { var obj = {}; this.map(function(i) {obj = Object.merge(obj, i)}); return obj }

export default class Home extends Optimized {
  initialize () {
    this.lines = [
      [{wait: 1000}, {text: "Oi, eu sou o "}, {text: "Tomás!", style: s.color(t.red)}],
      [{wait: 1000}, {text: "Bem vindo à minha página", wait: 600}],
      [{text: "Permita-me uma breve apresentação"}],
      [{text: "Esse daqui sou eu"}],
      [{wait: 300}],
      [{wait: 300}],
      [{text: "-", wait: 600}, {text: "-".repeat((s.Width/2 - 150)/7.83) + ">", throttle: 50}],
      {image: images.face},
    ]
  }

  componentDidMount () {
    document.getElementsByTagName("body")[0].style.margin = 0
  }

  render() {
    return <Terminal lines={this.lines}/>
  }
}
