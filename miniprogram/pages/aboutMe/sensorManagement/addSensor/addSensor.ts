// pages/aboutMe/sensorManagement/addSensor/addSensor.ts
Page({
    data: {
    },

    addSensor(e) {
        let name = e.detail.value.sensorName;
        let greenhouseID = e.detail.value.greenhouseID;
        let data = {
            "name": name,
            "greenhouseID": greenhouseID
        };
        let url = "";

    }

})