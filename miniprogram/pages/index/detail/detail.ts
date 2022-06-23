// pages/index/detail/detail.ts
Page({
    data: {
        "greenhouseid": "",
        "greenhouseInfo": {},
        "sensorInfo": [],
    },

    onLoad(option) {
        let that = this;
        const app = getApp();
        this.setData({
            "greenhouseid": option.greenhouseid,
        })
        // 获取大棚详细信息
        let url = "http://" + app.globalData.serverAddress + "/v1/greenhouse/detail";
        let greenhouseid = option.greenhouseid;
        wx.request({
            url: url,
            header: {
                'content-type': 'application/json'
            },
            data: {
                "greenhouseid": greenhouseid,
            },
            success(res) {
                that.setData({
                    greenhouseInfo: res.data,
                })
            }
        })
        // 获得传感器数据
        url = "http://" + app.globalData.serverAddress + "/v1/sensor/detail";
        wx.request({
            url: url,
            header: {
                'content-type': 'application/json'
            },
            data: {
                "greenhouseid": greenhouseid,
            },
            success(res) {
                that.setData({
                    sensorInfo: res.data["details"],
                })
            }
        })
    },

})