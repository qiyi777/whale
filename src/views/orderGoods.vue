<template>
  <div class="order-goods">
    <div class="goods-item">
      <div class="goods-top">
        <div class="left">
          <p>视频号订单</p>
          <span>订单号：291378237589237498</span>
        </div>
        <div class="right">支付成功</div>
      </div>
      <div class="goods-center">
        <img src="https://img01.yzcdn.cn/vant/apple-2.jpg" alt="">
        <div class="info">
          <h4>鲸鱼老师三合一公开课</h4>
          <span>￥398</span>
        </div>
      </div>
      <div class="goods-bottom">
        <div class="money">
          <span>实付款：</span>
          <p>￥398</p>
        </div>
        <van-button type="danger">去上课</van-button>
      </div>
    </div>
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

<style scoped lang="less">
.order-goods {
  height: 100%;
  overflow-y: auto;
  padding: 20px;
  background: #f8f8f8;
  .goods-item {
    background: #fff;
    padding: 15px;
    border-radius: 10px;
    .goods-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 15px;
      border-bottom: 1px solid #f8f8f8;
      .left {
        display: flex;
        flex-direction: column;
        p {
          text-align: left;
          font-size: 16px;
          color: #333;
        }
        span {
          font-size: 12px;
          color: #ccc;
        }
      }
      .right {
        color: #E57200;
      }
    }
    .goods-center {
      display: flex;
      align-items: center;
      padding: 15px 0;
      border-bottom: 1px solid #f8f8f8;
      img {
        width: 100px;
        height: 100px;
        margin-right: 10px;
      }
      .info {
        flex: 1;
        h4, span {
          display: block;
          text-align: left;
        }
        span {
          color: #D94B00;
          padding-top: 5px;
        }
      }
    }
    .goods-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 15px;
      .money {
        display: flex;
        align-items: center;
        p {
          font-size: 18px;
          font-weight: bold;
          color: #F10005;
        }
      }
      /deep/ button {
        height: 30px;
        border-radius: 15px;
      }
    }
  } 
}
</style>