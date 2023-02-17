<template>
  <div class="item">
    <h3>商品信息</h3>
    <p><span>商品ID:</span> {{ itemInfo.itemId }}</p>
    <p><span>商品名称:</span> {{ itemInfo.itemName }}</p>
    <p><span>商品价格:</span> {{ itemInfo.price }}</p>
    <p><span>商品生产日期:</span> {{ itemInfo.produceTime }}</p>
    <p><span>商品生产地:</span> {{ itemInfo.place }}</p>
    <button @click="sendItemInfo()">向App发送商品信息</button>
    <button @click="sendItemInfoToOrder()">向Order组件发送商品信息</button>
  </div>
</template>

<script>
export default {
  name: "Item",
  data() {
    return {
      itemInfo: {
        itemId: "SN2023000325847",
        itemName: "Apple iPhone 14 Pro max",
        price: 5999,
        produceTime: "2022-9-1",
        place: "CHN-ZhengZhou",
      },
    };
  },
  methods: {
    sendItemInfo() {
      // vm.$emit( eventName, […args] ) 触发当前实例上的事件。附加参数都会传给监听器回调。
      this.$emit("lookItem", this.itemInfo);
    },
    sendItemInfoToOrder() {
      // 触发事件总线格式：this.$bus.$emit("事件名称", 数据);
      this.$bus.$emit("msgToOrder", this.itemInfo);
    },
  },
};
</script>

<style scoped>
.item {
  background-color: rgb(130, 194, 137);
  padding: 5px;
  margin-top: 5px;
  font-size: 14px;
}

.item span {
  font-size: 16px;
  font-weight: bold;
}
</style>