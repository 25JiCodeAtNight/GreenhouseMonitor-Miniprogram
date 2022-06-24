// pages/aboutMe/sensorManagement/addSensor/addSensor.ts
Page({
    data: {
    },

    addSensor(e) {
        let that = this;
        const app = getApp();
        let name = e.detail.value.sensorName;
        let greenhouseID = e.detail.value.greenhouseID;
        let data = {
            "name": name,
            "greenhouseID": greenhouseID,
        };
        let url = "http://" + app.globalData.serverAddress + "/v1/sensor/sensorRegister";
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