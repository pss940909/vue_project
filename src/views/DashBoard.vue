<template>
  <dash-nav></dash-nav>
  <div class="container-fluid">
    <router-view />
  </div>
</template>

<script>
import DashNav from "../components/DashNav.vue";

export default {
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    DashNav,
  },
  created() {
    // 取出存入的token
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)loginToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    // 放入headers => 驗證用
    this.axios.defaults.headers.common["Authorization"] = token;
    const url = `${process.env.VUE_APP_API}/api/user/check`;
    this.axios.post(url).then((res) => {
      if (!res.data.success) {
        this.$router.back("/login");
      }
    });
  },
};
</script>
