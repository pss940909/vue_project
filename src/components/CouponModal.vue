<template>
  <div class="modal" ref="modal">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增優惠卷</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title" class="form-label">優惠活動名稱</label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="請輸入優惠活動名稱"
              v-model.trim="tempCoupon.title"
            />
          </div>

          <div class="row gx-2">
            <div class="mb-3 col-sm-6">
              <label for="code" class="form-label">優惠卷代碼</label>
              <input
                type="text"
                class="form-control"
                id="code"
                placeholder="請輸入優惠卷代碼"
                v-model.trim="tempCoupon.code"
              />
            </div>
            <div class="mb-3 col-sm-6">
              <label for="percent" class="form-label">折扣方案</label>
              <input
                type="number"
                class="form-control"
                id="percent"
                min="0"
                max="100"
                placeholder="請輸入折扣方案"
                v-model.number="tempCoupon.percent"
              />
            </div>
          </div>

          <div class="mb-3">
            <label for="due_date" class="form-label">到期日</label>
            <input
              type="date"
              class="form-control"
              id="due_date"
              placeholder="請輸入到期日"
              v-model="tempCoupon.due_date"
              min="2023-08-07"
              max="2033-12-31"
            />
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                :true-value="1"
                :false-value="0"
                id="is_enabled"
                v-model="tempCoupon.is_enabled"
              />
              <label class="form-check-label" for="is_enabled">
                是否啟用
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
            @click.prevent="hideModal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click.prevent="createCoupon"
          >
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
      tempCoupon: {},
    };
  },
  props: {
    coupon: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    coupon: {
      handler(newVal) {
        this.tempCoupon = newVal;
        this.tempCoupon.due_date = this.$filters.date(newVal);
      },
    },
  },
  computed: {
    // 轉成 unix timestamp格式
    due_date() {
      return Math.floor(new Date(this.tempCoupon.due_date).getTime() / 1000);
    },
  },
  methods: {
    createCoupon() {
      this.tempCoupon.due_date = this.due_date;
      this.$emit("createCoupon", this.tempCoupon);
    },
  },
  mixins: [modalMixin],
};
</script>
