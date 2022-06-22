// pages/knowledgeBase/column/column.ts
Page({
    data: {
        "columnName": "",
        "articles": [
            { "articleTitle": "Title1", "articleIntro": "intro1intro1intro1intro1intro1intro1intro1intro1intro1" },
            { "articleTitle": "Title2", "articleIntro": "intro2" },
            { "articleTitle": "Title3", "articleIntro": "intro3" },
            { "articleTitle": "Title4", "articleIntro": "intro4" },
            { "articleTitle": "Title5", "articleIntro": "intro5" },
        ]
    },

    onLoad(option) {
        this.setData({
            "columnName": option.column
        })
    },

    onClickArticle(event) {
        let value = event.currentTarget.dataset.value;
        let url = "article/article?artile=" + value;
        wx.navigateTo({
            url: url,
        });
    }
})