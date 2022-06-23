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
        let name = e.detail.value.greenhouseName;
        let userID = "";
        wx.getStorage({
            key: "userID",
            success(res) {
                userID = res.data
            }
        })
        let data = {
            "name": name,
            "userID": userID,
            "position": {
                "latitude": this.data.latitude,
                "longitude": this.data.longitude
            }
        };
        let url = "";

    }

})