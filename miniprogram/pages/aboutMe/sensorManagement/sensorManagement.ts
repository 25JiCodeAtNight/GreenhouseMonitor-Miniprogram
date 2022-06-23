// pages/aboutMe/sensorManagement/sensorManagement.ts
Page({
    data: {
        numOfSensors: 0,
        sensors: [],
    },

    onLoad() {
        const app = getApp();
        let that = this;
        const userID = wx.getStorageSync("userID");
        let url = "http://" + app.globalData.serverAddress + "/v1/user/getAllSensors";
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
                    sensors: res.data["responds"],
                })
            }
        })
        let numOfSensors = this.data.sensors.length;
        this.setData({
            numOfSensors: numOfSensors,
        })
    },

    addSensor() {
        let url = "addSensor/addSensor"
        wx.navigateTo({
            url: url,
        })
    },

    removeSensor(event) {
        const sensorID = event.currentTarget.dataset.value;
        const app = getApp();
        const userID = wx.getStorageSync("userID");
        let that = this;
        let url = "http://" + app.globalData.serverAddress + "/v1/sensor/cancel";
        let data = {
            "sensorID": sensorID,
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