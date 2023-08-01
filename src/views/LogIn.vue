<template>
  <vue-loading :active="isLoading"></vue-loading>
  <div class="container mt-5">
    <form class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
            v-model="user.username"
          />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
            v-model="user.password"
          />
        </div>

        <div class="text-end mt-4">
          <button
            class="btn btn-lg btn-primary btn-block"
            type="submit"
            @click="login"
          >
            登入
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/admin/signin`;
      this.axios.post(url, this.user).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          const { token, expired } = res.data;
          document.cookie = `loginToken=${token}; expires=${new Date(expired)}`;
          this.$router.push("/dashboard/productlist");
        } else {
          this.isLoading = false;
          alert(`${res.data.message}`);
        }
      });
    },
  },
  created() {},
};
</script>
