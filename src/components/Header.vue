<template>
    <header class="header">
        <div class="container">
            <LogoLink />
            <SearchBox />
        </div>
    </header>
</template>

<script>
import LogoLink from "./LogoLink.vue";
import SearchBox from "./SearchBox.vue";

export default {
    name: 'Header',
    components: {
        LogoLink,
        SearchBox,
    }
}
</script>

<style scoped>
    .header {
        position: sticky;
        z-index: 5;
        top: 0;

        background: rgba(0, 0, 0, 0.8);
    }
    .header > .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 5rem;
    }
</style>