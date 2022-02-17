<template>
  <router-link :to="{ name: 'main' }" class="logoLink"> MoviesDB </router-link>
</template>

<script>
export default {
  name: "LogoLink",
};
</script>

<style scoped>
.logoLink {
  cursor: pointer;
  padding: 20px 20px 20px 0;
  text-decoration: none;
  font-size: 24px;
  color: #ffffff;
}
.logoLink:visited {
  color: #ffffff;
}
</style>
