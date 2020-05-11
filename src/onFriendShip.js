
const { Friendship } = require("wechaty")
// 配置文件
const config = require("./config")
// 好友添加验证消息自动同意关键字数组
const addFriendKeywords = config.personal.addFriendKeywords
console.log('的提交帝国时代',Friendship)
// 好友添加监听回调
module.exports = async function onFriendShip(friendship) {
  let logMsg
  try {
    logMsg = "添加好友" + friendship.contact().name()
    console.log('添加好友',logMsg)
    switch (friendship.type()) {
      /**
       * 1. 新的好友请求
       * 设置请求后，我们可以从request.hello中获得验证消息,
       * 并通过`request.accept（）`接受此请求
       */
      case Friendship.Type.Receive:
        // 判断配置信息中是否存在该验证消息
        if (addFriendKeywords.some(v => v == friendship.hello())) {
          logMsg = `自动通过验证，因为验证消息是"${friendship.hello()}"`
          // 通过验证
          console.log('有人加我了')
          await friendship.accept()
          friendship.add(friendship.contact(), `
          你好，我是切图的靓仔，很高兴认识你\n
          回复［加群］，拉你进前端交流群，一起学习进步\n
          如果有什么问题可以留言，我会尽快回复～么么哒`) 
        } else {
          logMsg = "不自动通过，因为验证消息是: " + friendship.hello()
        }
        break

      /**
       * 2. 友谊确认
       */
      case Friendship.Type.Confirm:
        logMsg = "friend ship confirmed with " + friendship.contact().name()
        break
    }
    console.log(logMsg)
  } catch (e) {
    logMsg = e.message
  }
}
