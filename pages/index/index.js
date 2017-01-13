//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    movies: [],
        tags: ["不限", "爱情", "喜剧", "动画", "剧情", "科幻", "动作", "经典", "悬疑", "青春", "电视剧", "犯罪", "惊悚", "文艺", "搞笑", "纪录片", "励志", "恐怖", "战争", "短片", "黑色幽默", "魔幻", "传记", "情色", "感人", "暴力", "动画短片", "家庭", "音乐", "童年", "浪漫", "黑帮", "女性", "同志", "史诗", "童话", "烂片", "cult"],
    imgs: [],
    tagIndex: 0,
    mirIndex: 8,
    marIndex: 10,
    mirnIndex: 3,
    marnIndex: 11,
    start: 0,
    stopload: false,
    loading: false,
    order: [{"name": "rating", "sub": "评分"},
            {"name": "rated", "sub": "人数"}],
    orderIndex: 0,
    showingmovie: null,
    rs: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    ns: [0, 20000, 50000, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000],
  },
  //事件处理函数
  bindTagChange: function(e) {
    this.setData({
      tagIndex: e.detail.value
    })
  },
  bindMirChange: function(e) {
    this.setData({
      mirIndex: e.detail.value
    })
  },
  bindMarChange: function(e) {
    this.setData({
      marIndex: e.detail.value
    })
  },
  bindMirnChange: function(e) {
    this.setData({
      mirnIndex: e.detail.value
    })
  },
  bindMarnChange: function(e) {
    this.setData({
      marnIndex: e.detail.value
    })
  },
  bindOrderChange: function(e) {
    this.setData({
      orderIndex: e.detail.value
    })
  },
  getMovies: function() {
    var tag
    if (this.data.tagIndex == 0) {
      tag = ""
    } else {
      tag = this.data.tags[this.data.tagIndex]
    }
    var url = "https://imliyan.com/watchmovie/"
                + "tag=" + tag
                + "/mir=" + this.data.mirIndex
                + "/mar=" + this.data.marIndex
                + "/mirn=" + this.data.ns[this.data.mirnIndex]
                + "/marn=" + this.data.ns[this.data.marnIndex]
                + "/od=" + this.data.order[this.data.orderIndex].name
                + "/start=" + this.data.start + "/";
    var that = this
    wx.request({
      url: url,
      success: function(res) {
        that.setData({
          movies: res.data
        })
      }
    })
  },
  onLoad: function () {
    this.getMovies()
  }
})
