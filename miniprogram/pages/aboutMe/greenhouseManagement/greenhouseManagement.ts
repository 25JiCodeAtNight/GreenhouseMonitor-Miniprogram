// pages/aboutMe/greenhouseManagement/greenhouseManagement.ts
Page({
    data: {
        numOfGreenhouses: 0,
        greenhouses: []
    },

    onLoad() {
        const app = getApp();
        let that = this;
        const userID = wx.getStorageSync("userID");
        let url = "http://" + app.globalData.serverAddress + "/v1/user/getAllGreenhouses";
        wx.request({
            url: url,
            header: {
                'content-type': 'application/json'
            },
            data: {
                "userID": userID,
            },
            success(res) {
                that.setData({
                    greenhouses: res.data["responds"],
                })
            }
        })
        let numOfGreenhouses = this.data.greenhouses.length;
        this.setData({
            numOfGreenhouses: numOfGreenhouses,
        })
        // 获取大棚数量
        let data = wx.getStorageSync("userID");
        url = "http://" + app.globalData.serverAddress + "/v1/greenhouse/countGH";
        wx.request({
            url: url,
            data: {
                "userID": data,
            },
            success(res) {
                that.setData({
                    numOfGreenhouses: res.data,
                })
            }
        })
    },

    addGreenhouse() {
        let url = "addGreenhouse/addGreenhouse"
        wx.navigateTo({
            url: url,
        })
    },

    removeGreenhouse(event) {
        const app = getApp();
        const greenhouseID = event.currentTarget.dataset.value;
        const userID = wx.getStorageSync("userID");
        let that = this;
        let url = "http://" + app.globalData.serverAddress + "/v1/greenhouse/cancel";
        let data = {
            "greenhouseID": greenhouseID,
            "userID": userID,
        }
        wx.request({
            url: url,
            data: data,
            method: "POST",
            success(res) {
                that.onLoad();
            }
        })
    }
    
})