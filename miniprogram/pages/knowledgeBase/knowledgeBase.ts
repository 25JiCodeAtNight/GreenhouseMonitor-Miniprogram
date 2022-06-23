// pages/knowledgeBase/knowledgeBase.ts
Page({
    data: {
        columns: {}
    },

    onShow() {
        const app = getApp();
        let that = this;
        let url = "http://" + app.globalData.serverAddress + "/v1/knowledgeBase/getColumns";
        wx.request({
            url: url,
            header: {
                'content-type': 'application/json'
            },
            success(res) {
                that.setData({
                    columns: res.data["columns"],
                })
            }
        })
    },

    onClickColumn(event) {
        let value = event.currentTarget.dataset.value;
        let url = "column/column?column=" + value;
        console.log(url);
        wx.navigateTo({
            url: url,
        });
    }
})