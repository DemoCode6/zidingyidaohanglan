//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgs: [
      {url: '/images/banner.png'},
      {url: '/images/banner.png'},
      {url: '/images/banner.png'}
    ],
    background: ['商城上线啦！快来抢好礼', '商城上线啦！快来抢好礼', '商城上线啦！快来抢好礼'],
    currentSwiper: 0,
    circular:true,
    indicatorDots: true,
    vertical: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    dianzanclick:false,
    activeindex:0,
    autoplay: true
  },
  swiperChange: function (e) {
    this.setData({
      currentSwiper: e.detail.current
    })
  },
  onLoad: function () {
    this.setNavSize()
  },
  back: function(e){
      // console.log(e.detail.back)
  },
  dianzanclick(e){
    const index = e.currentTarget.dataset.index
    this.setData({
      activeindex:index,
      dianzanclick : !this.data.dianzanclick
    })
  },

// demo
  setNavSize: function() {
    var that = this
        , sysinfo = wx.getSystemInfoSync()
        , statusHeight = sysinfo.statusBarHeight
        , isiOS = sysinfo.system.indexOf('iOS') > -1
        , navHeight;
    if (!isiOS) {
        navHeight = 48;
    } else {
        navHeight = 44;
    }
    that.setData({
        status: statusHeight,
        navHeight: navHeight
    })
},

})
