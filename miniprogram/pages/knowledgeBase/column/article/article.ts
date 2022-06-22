// pages/knowledgeBase/column/tip/tip.ts
Page({
    data: {
        "article" : { "articleTitle": "title", "articleContent": "content" },
        "articleName" : "",
    },

    onLoad(option) {
        this.setData({
            "articleName": option.article,
        })
    },

})