<template>
  <div class="order">
    <h3>订单信息</h3>
    <p><span>订单ID:</span> {{ orderInfo.orderId }}</p>
    <p><span>订单名称:</span> {{ orderInfo.orderName }}</p>
    <button @click="sendOrderInfo()">向App发送订单信息</button>
    <button @click="kill()">kill</button>
    <button @click="requestItem()">请求服务器获取商品信息</button>
  </div>
</template>

<script>
// 引入axios
import axios from "axios";
// 引入消息发布与订阅依赖
import pubsub from "pubsub-js";

export default {
  name: "Order",
  props: ["getOrderInfo"],
  data() {
    return {
      orderInfo: {
        orderId: "CBD20230209161622",
        orderName: "苹果14手机订单",
      },
    };
  },
  methods: {
    sendOrderInfo() {
      this.getOrderInfo(this.orderInfo);
    },

    requestItem() {
      axios.get("http://localhost:8080/test/getItemInfo").then(
        (response) => {
          console.log("请求成功!!!", response.data);
        },
        (error) => {
          console.log("请求失败!!!", error);
        }
      );
    },
  },
  mounted() {
    /* 
    接收该组件所绑定的事件的数据
      this.$bus.$on("事件名称",(数据) =>{})
    */
    this.$bus.$on("msgToOrder", (data) => {
      console.log("Order组件接收到Item组件的数据......");
      console.log(JSON.parse(JSON.stringify(data)));
    });

    // 利用消息发布与订阅对象订阅消息
    this.pubId = pubsub.subscribe("expressToOrder", (sourceName, options) => {
      console.log("Order组件接收到Express组件的数据");
      console.log(JSON.parse(JSON.stringify(options)));
    });
  },
  beforeDestroy() {
    // 关闭该组件所对应的事件
    this.$bus.$off("msgToOrder");

    // 取消消息订阅
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style scoped>
.order {
  background-color: rgb(114, 207, 219);
  padding: 5px;
  margin-top: 5px;
  font-size: 14px;
}

.order span {
  font-size: 16px;
  font-weight: bold;
}
</style>