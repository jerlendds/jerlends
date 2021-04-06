<template>
    <nav>
        <Footer />
    </nav>
</template>

<script>
import Footer from "@/components/navigation/Footer.vue";
import NavMenu from "@/components/navigation/NavMenu.vue";

export default {
    name: "NavigationOverlay",

    components: {
        footer: Footer,
        menu: NavMenu,
    },

    data() {
        return {
            footerLinks: {},
        };
    },

    mounted() {},
};
</script>