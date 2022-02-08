<template>
    <div @click.self="closeModal" :class="{active: isModalOpen}" class="modal__wrapper">
        <div class="modal">
            <svg @click="closeModal" class="modal__close" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.2482 9.16663L21.9998 19.415L11.7515 9.16663L9.1665 11.7516L19.4148 22L9.1665 32.2483L11.7515 34.8333L21.9998 24.585L32.2482 34.8333L34.8332 32.2483L24.5848 22L34.8332 11.7516L32.2482 9.16663Z" fill="#181818"></path>
            </svg>
            
            <slot name="movie-info"></slot>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
    }),
    props: {
        isModalOpen: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeModal() {
            this.$emit("closeModal")
        }
    },
}
</script>

<style scoped>
    .modal__wrapper {
        cursor: default;

        transition: all .5s;
        opacity: 0;
        visibility: hidden;
        position: fixed;
        inset: 0;
        z-index: 1005;
        display: grid;
        place-content: center;
        background: rgba(0,0,0,.7);
    }
    .modal__wrapper.active {
        opacity: 1;
        visibility: visible;
    }

    .modal {
        position: relative;
        z-index: 2;

        padding: 25px 45px 35px;

        display: flex;
        flex-direction: column;
        max-width: 900px;
        width: 100vw;
        min-height: 40vw;
        max-height: 80vh;

        overflow-y: auto;
        background: #fff;
        border-radius: 22px;
    }

    .modal__close {
        cursor: pointer;
        position: absolute;
        z-index: 1;
        top: 40px;
        right: 30px;
        width: 44px;
        height: auto;
    }
</style>