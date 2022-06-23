// pages/aboutMe/aboutMe.ts
Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
        openID: "",
        hasOpenID: false,
    },
    
    onReady() {
    },

    onShow() {
        var hasUserInfo = wx.getStorageSync("hasUserInfo");
        var hasOpenID = wx.getStorageSync("hasOpenID");
        this.setData({
            hasUserInfo: hasUserInfo,
            hasOpenID: hasOpenID
        })
        // Load User Profile
        if (this.data.hasUserInfo) {
            wx.getStorage({
                key: "userInfo",
                success: (res) => {
                    this.setData({
                        userInfo: res.data
                    })
                }
            })
        }
        // Load OpenID
        if (this.data.hasOpenID) {
            wx.getStorage({
                key: "openID",
                success: (res) => {
                    this.setData({
                        openID: res.data
                    })
                }
            })
        }
    },

    getOpenID() {
        let that = this;
        const app = getApp();
        wx.login({
            success (res) {
              if (res.code) {
                //发起网络请求
                wx.request({
                  url: "http://" + app.globalData.serverAddress + "/wechat/login?code=",
                  data: {
                    code: res.code
                  },
                  success: (res) => {
                      that.setData({
                          hasOpenID: true,
                          openID: res.data.toString()
                      })
                      wx.setStorage({
                          key: "hasOpenID",
                          data: true
                      })
                      wx.setStorage({
                          key: "openID",
                          data: res.data.toString()
                      })
                  }
                })
              } else {
                console.log('登录失败！' + res.errMsg)
              }
            }
          })
    },

    register() {
        wx.getUserProfile({
            desc: '用于展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
                wx.setStorage({
                    key: "hasUserInfo",
                    data: true
                })
                wx.setStorage({
                    key: "userInfo",
                    data: res.userInfo
                })
            }
        })
        // 连接后端注册 API
    },

    navigateTo(event) {
        let value = event.currentTarget.dataset.value;
        let url = value + "Management/" + value + "Management";
        wx.navigateTo({
            "url": url,
        })
    }
})