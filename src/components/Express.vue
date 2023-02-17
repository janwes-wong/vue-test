<template>
  <div class="express">
    <h3>物流信息</h3>
    <ul v-for="expressInfo in expressInfos" :key="expressInfo.time">
      <li>{{ expressInfo.time }} {{ expressInfo.palce }}</li>
    </ul>
    <button @click="sendExpressInfo()">向App发送物流信息</button>
    <button @click="sendExpressInfoToOrder()">
      向Order组件发送物流信息-消息订阅与发布
    </button>
  </div>
</template>

<script>
// 引入消息发布与订阅依赖
import pubsub from "pubsub-js";

export default {
  name: "Express",
  data() {
    return {
      expressInfos: [
        {
          time: "2022-12-01 11:00",
          palce: "已出库",
        },
        {
          time: "2022-12-01 12:00",
          palce: "上海",
        },
        {
          time: "2022-12-01 13:00",
          palce: "江西",
        },
        {
          time: "2022-12-01 14:00",
          palce: "广州",
        },
        {
          time: "2022-12-01 15:00",
          palce: "深圳",
        },
        {
          time: "2022-12-01 16:00",
          palce: "配送中",
        },
      ],
    };
  },
  methods: {
    sendExpressInfo() {
      // 触发事件
      this.$emit("lookExpress", this.expressInfos);
    },

    sendExpressInfoToOrder() {
      // 利用消息发布与订阅对象发布消息
      pubsub.publish("expressToOrder", this.expressInfos);
    },
  },
};
</script>

<style scoped>
.express {
  background-color: rgb(216, 207, 124);
  padding: 5px;
  margin-top: 5px;
  font-size: 14px;
}
</style>