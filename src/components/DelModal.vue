<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="delModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            確定刪除{{ product.title }}?
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          確定要刪除{{ product.title }}嗎？(刪除後無法恢復)
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="hideModal"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="confirmDel">
            確定刪除
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
    };
  },
  props: ["product"],
  mixins: [modalMixin],
  methods: {
    confirmDel() {
      this.$emit("delProduct", this.product);
    },
  },
};
</script>
