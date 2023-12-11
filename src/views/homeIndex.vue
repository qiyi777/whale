<template>
  <div class="home">
    <div class="scroll" v-if="active === 0">
      <div class="banner">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img src="https://img01.yzcdn.cn/vant/apple-2.jpg" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="content">
        <h2>我的课程</h2>
        <div class="course-item">
          <img class="course-cover" src="https://img01.yzcdn.cn/vant/apple-2.jpg" alt="">
          <div class="course-box">
            <h4>jackson老师3合一精讲课</h4>
            <van-button class="my-btn" type="danger">去上课</van-button>
          </div>
        </div>
      </div>
    </div>
    <div class="scroll my" v-if="active === 1">
      <div class="info-title"></div>
      <div class="info-top">
        <div class="info-l">
          <img src="./../assets/logo.jpeg" alt="">
          <div class="info-box">
            <span class="name">鲸鱼老师</span>
            <span class="phone">手机号码：13444399921</span>
          </div>
        </div>
        <div class="info-r">退出</div>
      </div>
      <div class="info-content">
        <van-row gutter="20">
          <van-col span="8">
            <span>鲸鱼</span>
            <p>学员姓名</p>
          </van-col>
          <van-col span="8">
            <span>男</span>
            <p>学员性别</p>
          </van-col>
          <van-col span="8">
            <span>1990-4-5</span>
            <p>学员生日</p>
          </van-col>
        </van-row>
      </div>
      <div class="info-list">
        <van-cell title="我的订单" is-link to="/orderGoods">
          <template #icon>
            <van-icon color="#FB990D" class="custom" name="notes" />
          </template>
        </van-cell>
        <van-cell title="更换上课微信" is-link to="/switchChat">
          <template #icon>
            <van-icon color="#2BBD50" class="custom" name="wechat" />
          </template>
        </van-cell>
        <van-cell title="鲸鱼老师信箱" is-link to="/inputMessage">
          <template #icon>
            <van-icon color="#FD456D" class="custom" name="comment" />
          </template>
        </van-cell>
        <van-cell title="编辑资料" is-link to="/editInfo">
          <template #icon>
            <van-icon color="#FC6C2A" class="custom" name="records" />
          </template>
        </van-cell>
        <van-cell title="修改密码" is-link to="/editPassword">
          <template #icon>
            <van-icon color="#5354E2" class="custom" name="setting" />
          </template>
        </van-cell>
      </div>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item>
        <span>去学习</span>
        <template #icon="props">
          <van-icon :name="props.active ? 'send-gift' : 'send-gift-o'" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>我的</span>
        <template #icon="props">
          <van-icon name="" />
          <van-icon :name="props.active ? 'contact' : 'contact-o'" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 1,
      icon: {
        active: 'https://img01.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png',
      },
    }
  }
}

</script>

<style lang="less" scoped>
.home {
  height: 100%;
  background: #f7f7f7;
  .scroll {
    height: calc(100% - 44px);
    overflow-y: auto;
    overflow-x: hidden;
  }
  .my {
    .info-title {
      width: 250%;
      height: 800px;
      position: relative;
      top: -65%;
      left: -75%;
      border-radius: 50%;
      background: #F00723;
      background: linear-gradient(to bottom right, rgb(254, 130, 149), rgb(248, 31, 62));
    }
    .info-top {
      position: absolute;
      width: calc(100% - 40px);
      top: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
    }
    .info-content {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 130px;
      width: 75%;
      span {
        font-size: 16px;
        color: #fff;
      }
      p {
        font-size: 12px;
        color: #fff;
        padding-top: 5px;
      }
    }
    .info-list {
      padding: 20px 0;
      position: absolute;
      top: 200px;
      background: #fff;
      border-radius: 10px;
      width: calc(100% - 40px);
      margin: 0 20px;
      overflow: hidden;
      /deep/ .van-cell__title {
        text-align: left;
        font-size: 16px;
      }
      /deep/ .van-cell {
        padding: 15px 16px;
      }
      .custom {
        margin-right: 10px;
        font-size: 24px;
      }
    }
    .info-l {
      display: flex;
      align-items: center;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 15px;
        border: 2px solid #fff;
      }
      .info-box {
        display: flex;
        flex-direction: column;
        .name {
          text-align: left;
          color: #fff;
          font-size: 18px;
        }
        .phone {
          font-size: 14px;
          color: #fff;
        }
      }
    }
    .info-r {
      color: #fff;
      padding: 0px 12px;
      border: 1px solid #f5f5f5;
      border-radius: 13px;
      font-size: 12px;
      height: 24px;
      line-height: 24px;
    }
  }
  .van-tabbar-item--active {
    color: #F00723;
  }
  .banner {
    padding: 15px;
    .my-swipe {
      border-radius: 15px;
    }
     .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      height: 150px;
      text-align: center;
      // background-color: #39a9ed;
      img {
        width: 100%;
        height: 150px;
        object-fit: cover;
      }
  }
  }
  .content {
    h2 {
      padding-left: 15px;
      text-align: left;
      font-size: 16px;
    }
    .course-item {
      position: relative;
      display: flex;
      margin: 15px;
      background: #fff;
      padding: 15px;
      border-radius: 5px;
      img {
        width: 120px;
        height: 90px;
        border-radius: 10px;
        margin-right: 10px;
      }
      .course-box {
        h4 {
          font-size: 16px;
          font-weight: 700;
        }
        .my-btn {
          position: absolute;
          bottom: 15px;
          right: 15px;
          height: 24px;
          line-height: 24px;
          border-radius: 12px;
        }
      }
    }
  }
}

</style>