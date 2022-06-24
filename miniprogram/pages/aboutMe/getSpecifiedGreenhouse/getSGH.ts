// pages/aboutMe/getSpecifiedGreenhouse/getSGH.ts
Page({
    data: {
        "numOfGH": 0,
    },

    getSG(e) {
        let that = this;
        const app = getApp();
        let minTemp = e.detail.value.minTemp;
        let maxTemp = e.detail.value.maxTemp;

        let url = "http://" + app.globalData.serverAddress + "/v1/greenhouse/getSG"
        wx.request({
            url: url,
            data: {
                "minTemp": minTemp,
                "maxTemp": maxTemp,
            },
            success(res) {
                that.setData({
                    numOfGH: res.data,
                })
            }
        })
    }
})