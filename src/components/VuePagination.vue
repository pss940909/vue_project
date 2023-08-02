<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li
        class="page-item"
        :class="{ disabled: !pages.has_pre }"
        @click.prevent="changePage(pages.current_page - 1)"
      >
        <a class="page-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="page in pages.total_pages"
        :key="page"
        :class="{ active: pages.current_page == page }"
        @click.prevent="changePage(page)"
      >
        <a class="page-link">{{ page }}</a>
      </li>
      <li
        class="page-item"
        :class="{ disabled: !pages.has_next }"
        @click.prevent="changePage(pages.current_page + 1)"
      >
        <a class="page-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["pages"],
  methods: {
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
};
</script>
