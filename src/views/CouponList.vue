<template>
  <vue-loading :active="isLoading"></vue-loading>
  <div class="text-end mt-4">
    <button class="btn btn-primary text-white" @click="openModal(true)">
      新增優惠卷
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="200">優惠活動名稱</th>
        <th>優惠卷代碼</th>
        <th width="200">折扣方案</th>
        <th width="200">到期日</th>
        <th width="150">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="coupon in coupons" :key="coupon.id">
        <td>{{ coupon.title }}</td>
        <td>{{ coupon.code }}</td>
        <td class="text-right">
          <span class="text-danger fw-bold"> {{ coupon.percent }}%</span>
          off
        </td>
        <td class="text-right">
          {{ $filters.date(coupon.due_date) }}
        </td>
        <td>
          <span class="text-success" v-if="coupon.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModal(false, coupon)"
            >
              編輯
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="openDelModal(coupon)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <coupon-modal
    ref="couponModal"
    @createCoupon="createCoupon"
    :coupon="tempCoupon"
  ></coupon-modal>
  <del-coupon
    ref="delModal"
    :coupon="tempCoupon"
    @delCoupon="delCoupon"
  ></del-coupon>
</template>

<script>
import CouponModal from "@/components/CouponModal.vue";
import DelCoupon from "@/components/DelCoupon.vue";
export default {
  components: {
    CouponModal,
    DelCoupon,
  },
  data() {
    return {
      isLoading: false,
      coupons: [],
      pagination: {},
      tempCoupon: {},
      isNew: null,
    };
  },
  methods: {
    getCouponList(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.axios.get(url).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          this.coupons = res.data.coupons;
          this.pagination = res.data.pagination;
          console.log(this.coupons);
        }
      });
    },
    openModal(isNew, coupon) {
      this.isNew = isNew;
      if (!this.isNew) {
        this.tempCoupon = coupon;
      } else {
        this.tempCoupon = {};
      }
      this.$refs.couponModal.showModal();
    },
    openDelModal(coupon) {
      this.tempCoupon = coupon;
      this.$refs.delModal.showModal();
    },
    createCoupon(couponInfo) {
      // 新增優惠卷
      if (this.isNew) {
        const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`;
        this.axios.post(url, { data: couponInfo }).then((res) => {
          console.log(res.data);
          if (res.data.success) {
            this.$refs.couponModal.hideModal();
            this.getCouponList();
          }
        });
      } // 修改優惠卷
      else {
        const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${couponInfo.id}`;
        this.axios
          .put(url, {
            data: couponInfo,
          })
          .then((res) => {
            if (res.data.success) {
              this.$refs.couponModal.hideModal();
              this.getCouponList();
            }
          });
      }
    },
    delCoupon(couponId) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${couponId}`;
      this.axios.delete(url).then((res) => {
        if (res.data.success) {
          this.$refs.delModal.hideModal();
          this.getCouponList();
        }
      });
    },
  },
  computed: {},
  created() {
    this.getCouponList();
  },
};
</script>
