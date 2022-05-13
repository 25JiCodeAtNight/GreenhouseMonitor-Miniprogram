// pages/aboutMe/aboutMe.ts
Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
    },

    onShow() {
        var hasUserInfo = wx.getStorageSync("hasUserInfo");
        this.setData({
            hasUserInfo: hasUserInfo
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
    },

    getProfile() {
        wx.getUserProfile({
            desc: '用于展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
                wx.setStorage({
                    key: "hasUserInfo",
                    data: "true"
                })
                wx.setStorage({
                    key: "userInfo",
                    data: res.userInfo
                })
            }
        })
    }
})