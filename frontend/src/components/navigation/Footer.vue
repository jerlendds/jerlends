<template>
    <footer>
        <nav v-for="link in links">

        </nav>
    </footer>
</template>

<script>
export default {
    name: "Footer",

    props: [links],

    methods: {},

    mounted() {},
};
</script>