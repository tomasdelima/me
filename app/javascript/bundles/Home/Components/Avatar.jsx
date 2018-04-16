import React from 'react'
import Optimized from '../Lib/Optimized'

export default class Avatar extends Optimized {
  initialize () {
    this.style = [
      s.absolute,
      s.circle('0px'),
      s.top(140),
      s.left('calc(50%)'),
      s.circle('0px'),
      s.animate('all', 1000),
      {objectFit: "cover", objectPosition: 0},
    ].merge()
  }

  showImage () {
    setTimeout(() => {
      this.style.width = 200
      this.style.height = 200
      this.style.top = 40
      this.style.left = 'calc(50% - 100px)'
      this.style.objectPosition = -50
      this.forceUpdate()
    }, 100)
  }

  render() {
    return <img onLoad={this.showImage.bind(this)} src={this.props.image} style={[this.props.style, this.style].merge()} />
  }
}
