<template>
  <div class="info-config">
    <div class="title">
      <img src="./../assets/logo.jpeg" alt="">
      <div class="text">
        <div class="arrow"></div>
        <div class="info">同学你好！欢迎加入我的英语学习大家庭！请填写一下信息，让我认识一下你吧~</div>
      </div>
    </div>
    <div class="header">
      <div class="header-info">
        <span></span>
        <p>您是:</p>
      </div>
      <div class="header-select">
        <van-radio-group class="select" v-model="radio">
          <van-radio name="1">
            学员本人
          </van-radio>
          <van-radio name="2">
            学员家长
          </van-radio>
        </van-radio-group>
      </div>
    </div>
    <div class="info" style="margin-top: 20px;">
      <div class="info-info">
        <span></span>
        <p>请补充学员信息哦:</p>
      </div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="学员姓名"
          label="学员姓名"
          placeholder="请输入学员姓名"
          :rules="[{ required: true, message: '请填写学员姓名' }]"
        />
        <van-field

          name="学员性别"
          label="学员性别"
        >
          <template #button>
            <div class="select-gender">
              <div @click="selectGender('1')" :class="{'current': gender === '1'}" class="gender" style="margin-right: 20px;">
                <svg t="1698642479857" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4236" width="12" height="12">
                  <path :fill="gender === '1' ? '#F00723' : '#999'" d="M394.927119 361.941356c-65.98176 0-128.025838 25.692149-174.679391 72.346725-96.296183 96.311533-96.296183 253.015527 0.01535 349.310687 46.653553 46.654576 108.682281 72.332399 174.647669 72.332399 65.965387 0 127.994116-25.693172 174.664042-72.346725 96.29516-96.296183 96.29516-252.984828 0-349.295338C522.936585 387.634528 460.90888 361.941356 394.927119 361.941356zM535.774985 749.783615c-37.627992 37.627992-87.658456 58.341756-140.863215 58.341756-53.204759 0-103.220896-20.712741-140.847865-58.325383-77.667917-77.667917-77.667917-204.043163-0.016373-281.712103 37.627992-37.619806 87.659479-58.33971 140.879588-58.33971 53.204759 0 103.219873 20.719904 140.847865 58.33971C613.427552 545.755802 613.427552 672.131047 535.774985 749.783615z" p-id="4237"></path>
                  <path :fill="gender === '1' ? '#F00723' : '#999'" d="M868.171444 135.676076c-4.482081-4.481058-10.565636-7.002484-16.899902-7.002484l-329.066621 0.01535c-13.196557 0-23.902386 10.706853-23.902386 23.902386 0 13.20372 10.706853 23.902386 23.902386 23.902386l305.164235-0.016373 0 305.179584c0 13.204743 10.705829 23.902386 23.902386 23.902386 13.196557 0 23.902386-10.698666 23.902386-23.902386L875.173928 152.575977C875.174951 146.234549 872.653525 140.158157 868.171444 135.676076z" p-id="4238"></path>
                </svg>
                <span>男</span>
              </div>
              <div @click="selectGender('2')"  :class="{'current': gender === '2'}" class="gender">
                <svg t="1698643004155" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5175" width="12" height="12">
                  <path :fill="gender === '2' ? '#F00723' : '#999'" d="M519.658935 673.068396c81.129762 0 157.397796-31.572066 214.762295-88.937588 118.423133-118.421087 118.423133-311.085084 0-429.507194C677.057755 97.259114 600.788697 65.668629 519.658935 65.668629c-81.128739 0-157.39882 31.590486-214.744899 88.954985-118.402667 118.42211-118.402667 311.086108 0 429.507194C362.279558 641.496329 438.548616 673.068396 519.658935 673.068396zM346.474594 196.183148c46.267766-46.266743 107.764376-71.734788 173.184341-71.734788 65.419965 0 126.937041 25.468045 173.203784 71.734788 95.499028 95.500051 95.499028 250.889097 0 346.389148-46.266743 46.245254-107.765399 71.713298-173.203784 71.713298-65.420989 0-126.916575-25.468045-173.184341-71.713298C250.995009 447.072245 250.995009 291.682175 346.474594 196.183148z" p-id="5176"></path>
                  <path :fill="gender === '2' ? '#F00723' : '#999'" d="M793.986861 800.462854 549.061592 800.462854l0.008186-71.2743c0-16.22452-13.164834-29.389354-29.391401-29.389354s-29.389354 13.163811-29.389354 29.389354l-0.007163 71.2743L245.349429 800.462854c-16.225543 0-29.389354 13.163811-29.389354 29.390377s13.163811 29.392424 29.389354 29.392424l244.925269 0-0.00614 71.236438c0 16.22452 13.163811 29.389354 29.390377 29.389354s29.391401-13.163811 29.391401-29.389354l0.007163-71.236438L793.986861 859.245655c16.225543 0 29.391401-13.165858 29.391401-29.392424S810.213427 800.462854 793.986861 800.462854z" p-id="5177"></path>
                </svg>
                <span>女</span>
              </div>
            </div>
          </template>
        </van-field>
        <van-field
          readonly
          clickable
          label="学员生日"
          :value="value"
          placeholder="选择学员生日"
          @click="showPicker = true"
        />
      </van-form>

      <van-popup v-model="showPicker" round position="bottom">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
        />
      </van-popup>
    </div>

    <div class="fixed-bottom" style="padding: 16px;">
      <van-button round type="info" native-type="submit">确认并提交</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '1',
      username: '',
      value: '',
      gender: '1',
      showPicker: false,
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(2100, 11, 31),
      currentDate: new Date(2000, 0, 1),
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    selectGender (value) {
      this.gender = value
    }
  }
}
</script>

<style scoped lang="less">
.info-config {
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #FFE1C6, #FEFCF6);
}
.title {
  display: flex;
  align-items: center;
  padding: 25px 16px;
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
  font-size: 16px;
  color: #333;
  font-weight: 700;
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
.header, .info {
  padding: 12px 15px;
  background: #fff;
  margin: 10px 16px;
  border-radius: 20px;
}
.header .header-info, 
.info .info-info {
  display: flex;
  align-items: center;
}
.header .header-info span,
.info .info-info span {
  width: 5px;
  height: 16px;
  background: #F00723;
  border-radius: 2.5px;
  margin-right: 5px;
}
.header .header-info p,
.info .info-info p {
  font-size: 15px;
  color: #333;
  font-weight: bold;
}
.header .header-select {
  margin: 20px 0 40px;
}
.header .select {
  position: relative;
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.header .van-radio {
  flex-direction: column;
  font-size: 14px;
  background-image: url('./../assets/student.png');
  background-size: 60px 60px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin: 0 20px;
}
.header .van-radio:last-child {
  background-image: url('./../assets/adult.png');
}
.header /deep/ .van-radio__label {
  position: absolute;
  top: 70px;
  margin: 0;
}
.header /deep/ .van-radio__icon .van-icon {
  position: absolute;
  margin-left: 10px;
  top: 40px;
  background: #fff;
  color: #c8c9cc;
}
.header /deep/ .van-radio__icon--checked .van-icon {
  background-color: #F00723;
  border-color: #F00723;
  color: #fff;
}
.van-form {
  margin: 20px 0;
}
.van-cell {
  padding-left: 0;
  padding-right: 0;
}
.van-field {
  position: relative;
}
.select-gender {
  position: absolute;
  left: 0;
  top: 0;
  width: 58vw;
  display: flex;
  .gender {
    padding: 3px 7px;
    border: 0.5px solid #999;
    background: #fff;
    font-size: 12px;
    line-height: 12px;
    border-radius: 10px;
    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin-right: 3px;
      color: #999 !important;
    }
    &.current {
      border: 0.5px solid #F00723;
      color: #F00723;
      background: rgba(240,7,35, 0.1);
    }
  }
}
.fixed-bottom {
  width: 100%;
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  box-shadow: 1px -5px 10px rgba(5, 5, 5, 0.1);
  background: #fff;
}
.fixed-bottom button {
  width: calc(100% - 32px);
  background-color: #F00723;
  border-color: #F00723;
}
</style>