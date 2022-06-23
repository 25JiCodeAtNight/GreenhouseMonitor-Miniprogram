// pages/aboutMe/sensorManagement/sensorManagement.ts
Page({
    data: {
        numOfSensors: 5,
        sensors: [
            {"sensorName": "name1", "sensorID" : "123"},
            {"sensorName": "name2", "sensorID" : "123"},
            {"sensorName": "name3", "sensorID" : "123"},
        ]
    },

    addSensor() {
        let url = "addSensor/addSensor"
        wx.navigateTo({
            url: url,
        })
    },

    removeSensor(event) {
        let sensorID = event.currentTarget.dataset.value;
        let url = "";
    }
})