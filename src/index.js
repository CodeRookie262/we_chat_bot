
const { Wechaty } = require("wechaty") // Wechaty核心包
const config = require("./config") // 配置文件

const onScan = require("./onScan") // 机器人需要扫描二维码时监听回调
const onRoomJoin = require("./onRoomJoin") // 加入房间监听回调
const onMessage = require("./onMessage") // 消息监听回调
const onFriendShip = require("./onFriendShip") // 好友添加监听回调

// 初始化
const bot = new Wechaty({
  name: config.name
})

bot
  .on("scan", onScan) // 机器人需要扫描二维码时监听
  .on("room-join", onRoomJoin) // 加入房间监听
  .on('friendship', async friendship => {
    try {
      console.log(`received friend event.`)
      switch (friendship.type()) {
  
      // 1. New Friend Request
  
      case Friendship.Type.Receive:
        await friendship.accept()
        console.log('过大可视电话卡技术')
        break
  
      // 2. Friend Ship Confirmed
  
      case Friendship.Type.Confirm:
        console.log(`friend ship confirmed`)
        break
      }
    } catch (e) {
      console.error(e)
    }
  })
  .on("message", onMessage(bot)) // 消息监听
  
  // .on("friendship", (() => {console.log('有人加我啦啦啦')})||onFriendShip) // 好友添加监听
  .start()
