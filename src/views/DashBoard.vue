<template>dashboard</template>

<script>
export default {
  data() {
    return {};
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
