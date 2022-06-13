<template>

  <div class="paypage" style="height:100%;margin-top:0px;">
<!--    <nut-navbar class="paytitle" :left-show="false" title="在线缴费" icon="more"></nut-navbar>-->
    <div style="overflow: auto;height:100%;padding-bottom: 30px;">
      <nut-form>
        <nut-signature
          @confirm="confirm"
          @clear="clear"
        ></nut-signature>
        <p class="demo-tips demo">Tips: 点击确认按钮,下方显示签名图片</p>
        <nut-form-item>
          <label @click="signname()" style="color: orangered">点击签名</label>
        </nut-form-item>
        <nut-overlay
          v-model:visible="vishow"
          :close-on-click-overlay="closeflag"
          :z-index="zindex"
          :overlay-style="laystyle"
        >
          <div class="wrapper">
            <div class="content" style="display: block;">
              <nut-signature
                @confirm="confirm"
                :line-width="1"
                :type="signtype"
              ></nut-signature>
              <p class="">请在虚线框内签名</p>
            </div>
          </div>
        </nut-overlay>
        <nut-button type="info" @click="subcompany()" :loading="isLoading" style="width: 80%;margin-top:3px;">提交</nut-button>
      </nut-form>
    </div>
  </div>
</template>

<script>

import { Toast,Dialog } from '@nutui/nutui';



//图片转PDF
export default {
  name: 'Paypage',
  props: {
    msg: String
  },
  created () {

  },
  setup() {
    const confirm = (canvas, data) => {
      let img = document.createElement('img');
      img.src = data;
      document.querySelector('.demo').appendChild(img);
    };
    const clear = () => {
      let img = document.querySelector('.demo img');
      if (img) {
        img.remove();
      }
    }
    return { confirm, clear };
  },
  data() {
    return {
      title: "签名测试",
      contentdisplay: "none",
      send: "",
      radioVal:"0",
      vishow: true,
      sign: "sign",
      signtype: "png",
      closeflag: false,
      zindex: "-1",
      // lockflag: false
      laystyle: {"filter":"opacity(1%)"},
      readmedisable: true,
      xyshow: false,
      signimg: "",
      code: "获取验证码",
      codeflag: false,
      showBasic: false,
      showbank: false,
      closeoverlay: false,
      textarea:'',
      company: {
        customerName: "",//名称
        customerTax: "",//税号
        contactPerson: "",
        moblePhone: "",
        moblecode: "",
        dzyx: "",
        radioreadme: false,
        currentPrice: "",
        product: "",
        xy: "",
        xyurl: "",
        chargeUuid: "",
        remark: "",
        skdisable: false,
        deptId: null,
        userId: null,
        invoiceAddress:null,
        invoicePhone:null,
        invoiceBank:null,
        invoiceBankNum:null
      },
      goods: null,
      datalist: [],
      isLoading: false,
      contentflag: false,
      initsearchflag: false,
    };
  },
  methods: {
    // confirm(canvas, data) {
    //   this.vishow=false;
    //   this.laystyle={"filter":"opacity(1%)"}
    //   console.log(data)
    //   this.$store.dispatch("Setsign", data).then(() => {
    //      console.log("本地缓存成功")
    //     this.signimg=data
    //     //将阅读按钮设置为能选择
    //     this.readmedisable=false
    //
    //   }).catch(() => {
    //    console.log("存储异常")
    //   });
    //
    // },
    //签名方法
    signname(){
      this.vishow=true;
      this.laystyle={"filter":"opacity(100%)"}
      this.closeflag=false;
      this.zindex=2000;

    },







  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.serachcompany{
  list-style-type:none;
  height:30px;
  margin-top:10px;
  color: black;
  background: #c4caca;
  cursor: pointer;
}
li{
  list-style-type:none;
  height:25px;
  color: black;
}
.searchcontentinput{
  position: relative;
}
.searchcontent{
  position: fixed;
  border-top: solid #edeef1 1px;
  padding: 1px;
  z-index: 1000;
  background: rgba(255,255,255,0.5);  /*#edeef1;*/
  width:65%;
  text-align: left;
}
.searchcontent li{
  height: 30px;
  line-height: 30px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 1px 7px #edeef1;
  color: black;
  font-weight: bold;
  margin-top: 5px;
}

>>> .nut-signature-inner canvas {
  border: dashed black 1px;
}
.content{
  width: 100%;
  display: flex;
  background: #fff;
  border-radius: 8px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: red;
}
.wrapper{
  display: flex;
  height: 100%;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.paytitle{
  text-align:center;
  background: linear-gradient(315deg,#498ff2 0%,#4965f2 100%);
  height: 60px;
  font-size: 18px;
  line-height: 60px;
  width: 100%;
  color: white;
  padding:3px 0px;
  z-index: 1000;
}
.payfooter {
  background: white;
  position: fixed;
  bottom: 0px;
  height: 45px;
  padding-bottom: 5px;
  line-height: 20px;
  width: 100%;
  text-align: center;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
}
</style>
