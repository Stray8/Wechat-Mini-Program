// index.js
const app = getApp()

Page({
  data: {
    wording: 'girl',
    text: 'text'
  },
  onClick: function () {
    this.setData({
      wording: 'boy'
    })
  }
})
