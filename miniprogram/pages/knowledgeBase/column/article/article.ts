// pages/knowledgeBase/column/tip/tip.ts
Page({
    data: {
        "articleId": "",
        "articleTitle": "", 
        "articleText": "",
    },

    onLoad(option) {
        this.setData({
            "articleId": option.article,
        })
    },

    onShow() {
        let articleId = this.data.articleId;
        const app = new getApp();
        let that = this;
        let url = "http://" + app.globalData.serverAddress + "/v1/knowledgeBase/getArticleContent?articleId=" + articleId;
        wx.request({
            url: url,
            header: {
                'content-type': 'application/json'
            },
            success(res) {
                that.setData({
                    articleId: res.data["articleId"],
                    articleTitle: res.data["articleTitle"],
                    articleText: res.data["articleText"],
                })
            }
        })
    }

})