<template>
    <div class="logoLink">
        <a href="#">MoviesDB</a>
    </div>
</template>

<script>
export default {
    name: 'LogoLink',
}
</script>

<style scoped>
    .logoLink {
        cursor: pointer;
        padding: 5px 5px 5px 0;
        width: min-content;
    }
    .logoLink > a {
        text-decoration: none;
        font-size: 24px;
        color: #ffffff;
    }
    .logoLink > a:visited {        
        color: #ffffff;
    }
</style>