// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
    data: {
        "cards": [
            {
                "greenhouseid": "123abc",
                "name": "name1",
                "temp": "26",
                "humi": "80",
                "stat": "正常",
            },
            {
                "name": "name2",
                "temp": "28",
                "humi": "89",
                "stat": "正常",
            },
            {
                "name": "name2",
                "temp": "28",
                "humi": "89",
                "stat": "正常",
            },
            {
                "name": "name2",
                "temp": "28",
                "humi": "89",
                "stat": "正常",
            },

            {
                "name": "name2",
                "temp": "28",
                "humi": "89",
                "stat": "正常",
            },
        ]
    },
    onLoad() {
    },

    onClickCard(event) {
        let value = event.currentTarget.dataset.value;
        let url = "detail/detail?greenhouseid=" + value;
        wx.navigateTo({
            url: url,
        });
    }
})
