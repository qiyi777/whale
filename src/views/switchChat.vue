<template>
  <div class="switch-chat">
    <div class="tips">
      <h4>更换微信</h4>
      <p>更换课程微信，原微信号将解绑所有的课程权益，学习记录也会清空哦，请核对无误后更换</p>
    </div>
    <div class="wechat">
      <p>您的上课微信：</p>
      <div class="wechat-info">
        <img src="./../assets/logo.jpeg" alt="">
        <p>鲸鱼老师</p>
      </div>
    </div>
    <van-button type="danger">更换</van-button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
.switch-chat {
  height: 100%;
  overflow-y: auto;
  padding: 30px 20px;
  background: #fafafa;
  .tips {
    text-align: left;
    h4 {
      font-size: 18px;
      color: #333;
      font-weight: 400;
    }
    p {
      font-size: 12px;
      color: #aaa;
      padding-top: 5px;
    }
  }
  .wechat {
    margin-top: 30px;
    p {
      text-align: left;
    }
    .wechat-info {
      background: #fff;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      padding: 20px; 
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 20px;
      }
      p {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
  /deep/ button {
    width: 60%;
    margin-top: 40px;
    border-radius: 22px;
  }
}
</style>