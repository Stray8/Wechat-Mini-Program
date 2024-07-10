// index.js
const app = getApp()

Page({
  data:{
    title:"ESP32 + Wechat",
    welcome:"欢迎欢迎，今天的天气是",
    location:"浙江省 杭州市",
    temperature:15,
    value:11111,

    isConnect:false, //
    mqttConnectDialog:false, //
  },
  //打开连接弹窗
  openDialog(){
    this.setData({mqttConnectDialog: true});
  },
  onClose(){
    this.setData({mqttConnectDialog: false});

  }

})
