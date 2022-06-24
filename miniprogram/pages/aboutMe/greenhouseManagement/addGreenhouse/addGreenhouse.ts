// pages/aboutMe/greenhouseManagement/addGreenhouse/addGreenhouse.ts
Page({
    data: {
        "hasPositionInfo": false,
        "latitude": 0,
        "longitude" : 0,
    },

    getPositionInfo() {
        let that = this;
        wx.getLocation({
            success(res) {
                that.setData({
                    latitude: res.latitude,
                    longitude: res.longitude,
                    hasPositionInfo: true
                })
            }
        })
    },

    addGreenhouse(e) {
        let that = this;
        const app = getApp();
        let name = e.detail.value.name;
        let userID = wx.getStorageSync("userID");
        let data = {
            "name": name,
            "userID": userID,
            "position": {
                "latitude": this.data.latitude,
                "longitude": this.data.longitude
            }
        };
        let url = "http://" + app.globalData.serverAddress + "/v1/greenhouse/register";
        wx.request({
            url: url,
            header: {
                'content-type': 'application/json'
            },
            method: "POST",
            data: data,
            success(res) {
                console.log(res.data);
            }
        })
    }

})