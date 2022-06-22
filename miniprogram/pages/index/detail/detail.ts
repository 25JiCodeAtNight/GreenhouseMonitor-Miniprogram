// pages/index/detail/detail.ts
Page({
    data: {
        "greenhouseid": "123abc",
        "greenhouseInfo": {
            "name": "name",
            "temp": 26.5,
            "humi": 80.0,
            "weather": "阴天",
            "cloud": 80,
            "windspeed": 7,
            "pressure": 1006,
        },
        "sensorInfo": [
            {
                "time": "2022-06-22 13:58",
                "temp": 37.5,
                "humi": 12.0,
            },
            {
                "time": "2022-06-22 13:59",
                "temp": 37.4,
                "humi": 12.0,
            },
        ]
    },

    onLoad(option) {
        this.setData({
            "greenhouseid": option.greenhouseid,
        })
    },

})