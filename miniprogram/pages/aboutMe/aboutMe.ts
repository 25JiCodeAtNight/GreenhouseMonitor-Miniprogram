// pages/aboutMe/aboutMe.ts
Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
    },
    onLoad() {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

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
                    key: "hasUserProfile",
                    data: "true"
                })
                wx.setStorage({
                    key: "userName",
                    data: res.userInfo.nickName
              })
                wx.setStorage({
                    key: "userAvatar",
                    data: res.userInfo.avatarUrl
                })
            }
        })
    }
})