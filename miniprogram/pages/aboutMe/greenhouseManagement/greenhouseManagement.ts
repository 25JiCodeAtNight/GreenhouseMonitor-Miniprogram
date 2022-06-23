// pages/aboutMe/greenhouseManagement/greenhouseManagement.ts
Page({
    data: {
        numOfGreenhouses: 3,
        greenhouses: [
            {"greenhouseName": "name1", "greenhouseID" : "123"},
            {"greenhouseName": "name2", "greenhouseID" : "123"},
            {"greenhouseName": "name3", "greenhouseID" : "123"},
        ]
    },

    addGreenhouse() {
        let url = "addGreenhouse/addGreenhouse"
        wx.navigateTo({
            url: url,
        })
    },

    removeGreenhouse(event) {
        let greenhouseID = event.currentTarget.dataset.value;
        let url = "";
    }
    
})