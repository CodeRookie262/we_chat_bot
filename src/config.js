//配置文件
module.exports = {
  // 机器人名字
  name: "切图的靓仔",
  // 房间/群聊
  room: {
    // 管理群组列表
    roomList: ['前端切图交流群'],
    // 加入房间回复
    roomJoinReply: `\n 你好，欢迎你的加入，如果有什么问题可以在群里和各位小伙伴一起探讨哦～\n么么哒，最后，请向大家介绍你自己！😊`
  },
  // 私人
  personal: {
    // 好友验证自动通过关键字
    addFriendKeywords: ["加群", "前端"],
    // 是否开启加群
    addRoom: true
  }
}
