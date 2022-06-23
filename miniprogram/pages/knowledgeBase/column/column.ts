// pages/knowledgeBase/column/column.ts
Page({
    data: {
        "columnId": "",
        "articles": [
            { "articleId": "", "articleTitle": "Title1", "articleIntro": "intro1intro1intro1intro1intro1intro1intro1intro1intro1" },
        ]
    },

    onLoad(option) {
        let columnId = option.column;
        this.setData({
            columnId: columnId,
        })
    },

    onShow() {
        let columnId = this.data.columnId;
        const app = getApp();
        let that = this;
        let url = "http://" + app.globalData.serverAddress + "/v1/knowledgeBase/getArticles?columnId=" + columnId;
        wx.request({
            url: url,
            header: {
                'content-type': 'application/json'
            },
            success(res) {
                that.setData({
                    articles: res.data["articles"],
                })
            }
        })
    },

    onClickArticle(event) {
        let value = event.currentTarget.dataset.value;
        let url = "article/article?article=" + value;
        console.log(url);
        wx.navigateTo({
            url: url,
        });
    }
})