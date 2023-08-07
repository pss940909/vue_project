<template>
  <dash-nav></dash-nav>
  <div class="container-fluid position-relative">
    <toast-list></toast-list>
    <router-view />
  </div>
</template>

<script>
import emitter from "@/methods/emitter";
import DashNav from "../components/DashNav.vue";
import ToastList from "../components/ToastList.vue";

export default {
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    DashNav,
    ToastList,
  },
  provide() {
    return {
      emitter,
    };
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
      // 未驗證身份 => 導回登入頁面
      if (!res.data.success) {
        this.$router.push("/login");
      }
    });
  },
};
</script>
