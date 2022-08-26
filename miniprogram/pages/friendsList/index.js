const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        friendsList: [{
            avatarUrl: '../../images/picture.jpg',
            nickName: '用户名',
        },
            {
                avatarUrl: '../../images/picture.jpg',
                nickName: '用户名'
            },{
                avatarUrl: '../../images/picture.jpg',
                nickName: '用户名',
            },
            {
                avatarUrl: '../../images/picture.jpg',
                nickName: '用户名'
            }],
        userInfo: null
    },

    onClickLogin(e) {
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.setData({
            userInfo: app.globalData.userInfo,
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})