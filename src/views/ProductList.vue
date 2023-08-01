<template>
  <vue-loading :active="isLoading"></vue-loading>
  <div class="text-end mt-4">
    <button class="btn btn-primary" @click="showProductModal">新增產品</button>
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
            <button class="btn btn-outline-primary btn-sm">編輯</button>
            <button class="btn btn-outline-danger btn-sm">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <product-modal ref="productModal" :product="tempProduct"></product-modal>
</template>

<script>
import ProductModal from "../components/ProductModal.vue";
export default {
  components: { ProductModal },
  data() {
    return {
      isLoading: false,
      products: [],
      pagination: {},
      tempProduct: {},
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products`;
      this.axios.get(url).then((res) => {
        console.log(res.data);
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
    showProductModal() {
      this.$refs.productModal.showModal();
      this.tempProduct = {};
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
