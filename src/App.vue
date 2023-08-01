<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <a href="" class="btn btn-primary">link</a>
  <router-view />
</template>

<style lang="scss">
@import "./assets/all.scss";
</style>
