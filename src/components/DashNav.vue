<template>
  <vue-loading :active="isLoading"></vue-loading>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">管理者登入</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard/productlist"
              >產品管理</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard/orderlist"
              >訂單管理</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard/couponlist"
              >優惠卷管理</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="logout">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    logout() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/logout`;
      this.axios.post(url).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.$router.push("/login");
        }
      });
    },
  },
};
</script>
