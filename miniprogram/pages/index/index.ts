// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
    data: {
        "cards": [],
        "greenhouses": [],
        "warnings": [],
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
                wx.setStorage({
                    key: "greenhouses",
                    data: res.data["responds"],
                })
            }
        })
        // 获取每个大棚的信息
        let greenhouses = [];
        greenhouses = wx.getStorageSync("greenhouses");
        for (let index = 0; index < greenhouses.length; index++) {
            const greenhouse = greenhouses[index];
            const greenhouseID = greenhouse.greenhouseID;
            let url = "http://" + app.globalData.serverAddress + "/v1/greenhouse/status?greenhouseid=" + greenhouseID;
            wx.request({
                url: url,
                header: {
                    'content-type': 'application/json'
                },
                success(res) {
                    let cards = that.data.cards;
                    cards.push({
                        "name": res.data["name"],
                        "temp": res.data["temp"],
                        "humi": res.data["humidity"],
                        "stat": res.data["stat"],
                        "greenhouseID": res.data["greenhouseID"],
                    })
                    that.setData({
                        cards: cards,
                    })
                }
            })
            // 获取警告信息
            
            url = "http://" + app.globalData.serverAddress + "/v1/greenhouse/warning";
            wx.request({
                url: url,
                header: {
                    'content-type': 'application/json'
                },
                success(res) {
                    let cards = that.data.cards;
                    let warnings = [];
                    warnings.push({
                        "name": res.data["name"],
                        "id": res.data["id"],
                    })
                    that.setData({
                        warngings: warnings,
                    })
                }
            })
        }
    },

    onShow() { 
    },

    onClickCard(event) {
        let value = event.currentTarget.dataset.value;
        let url = "detail/detail?greenhouseid=" + value;
        console.log(url);
        wx.navigateTo({
            url: url,
        });
    }
})
