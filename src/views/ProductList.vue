<template>
  <vue-loading :active="isLoading"></vue-loading>
  <div class="text-end mt-4">
    <button class="btn btn-primary" @click="showProductModal(true)">
      新增產品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.category }}</td>
        <td>{{ product.title }}</td>
        <td class="text-right">{{ product.origin_price }}</td>
        <td class="text-right">{{ product.price }}</td>
        <td>
          <span class="text-success" v-if="product.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
              @click="showProductModal(false, product)"
            >
              編輯
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="showDelModal(product)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <product-modal
    ref="productModal"
    :product="tempProduct"
    :isNew="isNew"
    @updateProduct="updateProduct"
  ></product-modal>
  <del-modal
    ref="delModal"
    :product="tempProduct"
    @delProduct="delProduct"
  ></del-modal>
</template>

<script>
import ProductModal from "../components/ProductModal.vue";
import DelModal from "../components/DelModal.vue";
export default {
  components: { ProductModal, DelModal },
  data() {
    return {
      isLoading: false,
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: true,
    };
  },
  inject: ["emitter"],
  methods: {
    getProducts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products`;
      this.axios.get(url).then((res) => {
        console.log(res.data);
        if (res.data.success) {
          this.isLoading = false;
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
    showProductModal(isNew, product) {
      this.$refs.productModal.showModal();
      this.isNew = isNew;
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = product;
      }
    },
    showDelModal(product) {
      this.tempProduct = product;
      this.$refs.delModal.showModal();
    },
    updateProduct(product) {
      this.tempProduct = product;
      if (this.isNew) {
        const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
        this.axios
          .post(url, {
            data: this.tempProduct,
          })
          .then((res) => {
            if (res.data.success) {
              this.$refs.productModal.hideModal();
              this.emitter.emit("push-message", {
                style: "success",
                title: "更新成功",
              });
              this.getProducts();
            } else {
              this.emitter.emit("push-message", {
                style: "danger",
                title: "更新失敗",
                content: res.data.message.join("、"),
              });
            }
          });
      } else {
        const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
        this.axios.put(url, { data: this.tempProduct }).then((res) => {
          console.log(res.data);
          this.$refs.productModal.hideModal();
          this.getProducts();
        });
      }
    },
    delProduct(product) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${product.id}`;
      this.axios.delete(url).then((res) => {
        console.log(res.data);
        if (res.data.success) {
          this.$refs.delModal.hideModal();
          this.getProducts();
        }
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
