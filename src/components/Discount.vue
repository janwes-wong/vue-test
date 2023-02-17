<template>
  <div class="discount">
    <h3>商品折扣信息</h3>
    <p>
      小米14 Pro手机: ¥{{ discountPrice }}
      <span>¥{{ originPrice }}</span>
    </p>
    <button @click="sendDiscountInfo()">向App发送商品折扣价格</button>
    <button @click="removeEvent()">移除自定义事件</button>
  </div>
</template>

<script>
export default {
  name: "Discount",
  data() {
    return {
      originPrice: 3999,
      discountPrice: 1999,
    };
  },
  methods: {
    sendDiscountInfo() {
      this.$emit("lookDiscountPrice", this.discountPrice);
    },
    removeEvent() {
      console.log("'向App发送商品折扣价格'事件已移除......");
      this.$off("lookDiscountPrice");
    },
  },
};
</script>

<style scoped>
.discount {
  background-color: rgb(186, 243, 215);
  padding: 5px;
  margin-top: 5px;
  font-size: 14px;
}

.discount span {
  text-decoration: line-through;
  color: red;
}
</style>