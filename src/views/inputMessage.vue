<template>
  <div class="input-message">
    <div class="title">
      <img src="./../assets/logo.jpeg" alt="">
      <div class="text">
        <div class="arrow"></div>
        <div class="info">Hi,我是鲸鱼老师～如果你对我的课程有任何的建议或者在学习过程中遇到问题，都欢迎你留言给我。</div>
      </div>
    </div>
    <div class="input-box">
      <h2>To: 鲸鱼老师</h2>
      <van-field
        v-model="message"
        rows="6"
        autosize
        type="textarea"
        maxlength="200"
        placeholder="请输入您的想法"
        show-word-limit
      />
      <van-button type="danger" block>立即送出</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  }
}
</script>

<style lang="less" scoped>
.input-message {
  height: 100%;
  overflow-y: auto;
  background: #fafafa;
  .title {
    display: flex;
    align-items: center;
    padding: 20px 16px;
  }
  .title img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .text {
    position: relative;
  }
  .text .info {
    background: #fff;
    border-radius: 10px;
    padding: 10px;
    font-size: 14px;
    color: #333;
    font-weight: normal;
    text-align: left;
  }
  .text .arrow {
    position: absolute;
    left: -3px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border: 10px solid;
    border-color: transparent #fff transparent transparent;
  }
  .info {
    padding: 12px 15px;
    background: #fff;
    margin: 10px 16px;
    border-radius: 20px;
  }
  .input-box {
    padding: 0 16px;
    h2 {
      font-size: 14px;
      color: #333;
      font-weight: 700;
      text-align: left;
      margin-bottom: 10px;
    }
    /deep/ .van-field {
      border-radius: 10px;
    }
    /deep/ button {
      margin-top: 35px;
      border-radius: 22px;
    }
  }
}
</style>