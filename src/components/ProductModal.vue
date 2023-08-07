<template>
  <div class="modal" ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="image" class="form-label">輸入主要圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  placeholder="請輸入圖片連結"
                  v-model.trim="tempProduct.imageUrl"
                />
              </div>
              <div class="mb-3">
                <label for="customFile" class="form-label"
                  >或 上傳主要圖片
                  <i class="fas fa-spinner fa-spin"></i>
                </label>
                <input
                  type="file"
                  id="customFile"
                  class="form-control"
                  ref="fileInput"
                  name="file-to-upload"
                  @change="uploadFile"
                />
              </div>
              <img
                class="img-fluid"
                :src="tempProduct.imageUrl"
                :alt="tempProduct.title"
              />
              <div class="mt-5" v-if="tempProduct.imagesUrl">
                <div
                  class="mb-3 input-group"
                  v-for="(imageUrl, key) in tempProduct.imagesUrl"
                  :key="key"
                >
                  <input
                    type="url"
                    class="form-control form-control"
                    placeholder="請輸入連結"
                    v-model="tempProduct.imagesUrl[key]"
                  />
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    @click="tempProduct.imagesUrl.splice(key, 1)"
                  >
                    移除
                  </button>
                </div>
                <div v-if="canAddMoreImages">
                  <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="tempProduct.imagesUrl.push('')"
                  >
                    新增圖片
                  </button>
                </div>
                <div v-else-if="this.tempProduct.imagesUrl.length == 5">
                  <small class="text-danger">最多限上傳5張產品副圖</small>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="請輸入標題"
                  v-model.trim="tempProduct.title"
                  @blur="checkRequired('title')"
                />
                <small v-if="errors.title" class="text-danger"
                  >標題為必填的項目</small
                >
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input
                    type="text"
                    class="form-control"
                    id="category"
                    placeholder="請輸入分類"
                    v-model.trim="tempProduct.category"
                    @blur="checkRequired('category')"
                  />
                  <small v-if="errors.category" class="text-danger"
                    >分類為必填的項目</small
                  >
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input
                    type="text"
                    class="form-control"
                    id="unit"
                    placeholder="請輸入單位"
                    v-model.trim="tempProduct.unit"
                    @blur="checkRequired('unit')"
                  />
                  <small v-if="errors.unit" class="text-danger"
                    >單位為必填的項目</small
                  >
                </div>
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="origin_price"
                    placeholder="請輸入原價"
                    v-model.number="tempProduct.origin_price"
                    @blur="checkRequired('origin_price')"
                  />
                  <small v-if="errors.origin_price" class="text-danger"
                    >原價為必填的項目</small
                  >
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="price"
                    placeholder="請輸入售價"
                    v-model.number="tempProduct.price"
                    @blur="checkRequired('price')"
                  />
                  <small v-if="errors.price" class="text-danger"
                    >售價為必填的項目</small
                  >
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="description"
                  placeholder="請輸入產品描述"
                  v-model="tempProduct.description"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="content"
                  placeholder="請輸入產品說明內容"
                  v-model="tempProduct.content"
                ></textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    id="is_enabled"
                    v-model.trim="tempProduct.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="submit"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
            @click.prevent="hideModal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="updateProduct">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from "@/mixins/modalMixin";

export default {
  data() {
    return {
      modal: {},
      tempProduct: {},
      errors: {
        title: null,
        category: null,
        unit: null,
        origin_price: null,
        price: null,
      },
    };
  },
  mixins: [modalMixin],
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
    isNew: {
      type: Boolean,
    },
  },
  computed: {
    canAddMoreImages() {
      if (this.tempProduct.imagesUrl.length == 0) {
        return true;
      } else if (this.tempProduct.imagesUrl.length == 5) {
        return false;
      } else if (
        this.tempProduct.imagesUrl[this.tempProduct.imagesUrl.length - 1]
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    product() {
      this.tempProduct = this.product;
      if (!this.tempProduct.imagesUrl) {
        this.tempProduct.imagesUrl = [];
      }
    },
    isNew: {
      handler(newVal) {
        if (!newVal) {
          this.errors = {
            title: false,
            category: false,
            unit: false,
            origin_price: false,
            price: false,
          };
        } else {
          this.errors = {
            title: null,
            category: null,
            unit: null,
            origin_price: null,
            price: null,
          };
        }
      },
      immediate: true, // 立即执行一次 watch 侦听器
    },
    errors: {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal);
      },
      immediate: true, // 立即执行一次 watch 侦听器
      deep: true, // 开启深度监听
    },
  },
  methods: {
    updateProduct() {
      if (Object.values(this.errors).every((error) => error == false)) {
        this.$emit("updateProduct", this.tempProduct);
      } else {
        alert("表單未完整填寫，請重新確認");
      }
    },
    // 驗證必填欄位
    checkRequired(field) {
      if (!this.tempProduct[field]) {
        this.errors[field] = true;
      } else {
        this.errors[field] = false;
      }
    },
    uploadFile() {
      console.dir(this.$refs.fileInput.files[0].name);
      const uploadedFile = this.$refs.fileInput.files[0];
      const formData = new FormData();
      formData.append("file-to-upload", uploadedFile);
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.axios.post(url, formData).then((res) => {
        console.log(res.data.imageUrl);
        if (res.data.success) {
          this.tempProduct.imageUrl = res.data.imageUrl;
        }
      });
    },
  },
};
</script>
