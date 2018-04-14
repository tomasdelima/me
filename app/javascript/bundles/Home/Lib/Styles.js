import QuickStyles from 'react-quick-styles'

export default Object.assign({}, QuickStyles, {
  font:       ff => ({fontFamily: ff}),
  color:      cl => ({color: cl}),
  lineHeight: lh => ({lineHeight: lh + "px"}),

  row: {flexDirection: "row"},

  Height: window.innerHeight,
  Width: window.innerWidth,
})
