<template>
  <!-- 
    本案例内容：
      1.自定义vue组件事件-创建事件
      2.自定义vue组件事件-解绑事件
   -->
  <div id="app">
    <p>{{ msg }}</p>
    <!-- 通过父组件向子组件传递函数类型的props实现：子组件向父组件传递数据 -->
    <Order :getOrderInfo="getOrderInfo" />

    <!-- 
      通过vue自定义组件事件实现：子组件向父组件传递数据
      创建事件：
        方式一：v-on:事件名称
        方式二：@事件名称
      触发事件：
        哪个组件标签绑定自定义事件，就到该组件去触发自定义事件
        vm.$emit( eventName, […args] )：触发当前实例上的事件。附加参数都会传给监听器回调。
     -->
    <!-- 通过父组件向子组件绑定自定义事件实现 -->
    <Item v-on:lookItem="getItemInfo" />
    <!-- 简写形式 @事件名称 -->
    <!-- <Item @lookItem="getItemInfo" /> -->

    <!-- 通过ref属性绑定事件 -->
    <Express ref="express" />

    <!-- 
      移除自定义事件
        vm.$off( [event, callback] )
        参数：

        {string | Array<string>} event (只在 2.2.2+ 支持数组)
        {Function} [callback]
        用法：

        移除自定义事件监听器。
        1.如果没有提供参数，则移除所有的事件监听器；
        2.如果只提供了事件，则移除该事件所有的监听器；
        3.如果同时提供了事件与回调，则只移除这个回调的监听器。
     -->
    <!-- 
        将原生事件绑定到组件, .native
        例如：v-on:focus.native="onFocus"
              @focus.native="onFocus"
      -->
    <Discount ref="discount" @click.native="showMsg" />

    <!-- 
      全局事件总线(globalEventBus):
      1.安装全局事件总线
      2.使用事件总线
      3.关闭当前组件所使用到的事件
     -->
  </div>
</template>

<script>
import Order from "./components/Order.vue";
import Item from "./components/Item.vue";
import Express from "./components/Express.vue";
import Discount from "./components/Discount.vue";

export default {
  name: "App",
  components: { Order, Item, Express, Discount },
  data() {
    return {
      msg: "欢迎来到速卖通电子商城",
    };
  },
  methods: {
    getOrderInfo(orderInfo) {
      console.log("获取订单信息.....");
      console.log(JSON.parse(JSON.stringify(orderInfo)));
    },
    getItemInfo(itemInfo) {
      console.log("获取商品信息.....");
      console.log(JSON.parse(JSON.stringify(itemInfo)));
    },
    getExpressInfo(expressInfos) {
      console.log("获取物流信息.....");
      console.log(JSON.parse(JSON.stringify(expressInfos)));
    },
    getDiscountPrice(value) {
      console.log("获取商品折扣价格.....");
      console.log(value);
    },
    showMsg() {
      alert("discount组件事件已触发....");
    },
  },
  mounted() {
    // express组件实例绑定事件
    this.$refs.express.$on("lookExpress", this.getExpressInfo);
    // discount组件实例绑定事件
    this.$refs.discount.$on("lookDiscountPrice", this.getDiscountPrice);
  },
};
</script>

<style scoped>
#app {
  background-color: rgb(216, 187, 149);
  width: 800px;
  padding: 5px;
  margin: 0 auto;
}

#app p {
  text-align: center;
  font-size: 22px;
  font-weight: bold;
}
</style>
