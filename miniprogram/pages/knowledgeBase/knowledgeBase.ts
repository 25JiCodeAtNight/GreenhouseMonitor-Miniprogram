// pages/knowledgeBase/knowledgeBase.ts
Page({
    data: {
        columnNames: [
            "name1",
            "name2",
            "name3",
            "name4",
            "name4",
            "name4",
            "name4",
            "name4",
        ]
    },

    onClickColumn(event) {
        let value = event.currentTarget.dataset.value;
        let url = "column/column?column=" + value;
        wx.navigateTo({
            url: url,
        });
    }
})