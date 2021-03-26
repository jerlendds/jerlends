<template>
    <div id="app">
        <navbar />
        <router-view class="pt-12" />
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
    name: "App",
    components: {
        navbar: NavBar,
    },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap");
:root {
    --purple-0: #9e81b6; // c-purple
    --orange-0: #f3863d; // c-orange
    --yellow-0: #f2b25c; // c-yellow
    --blue-0: #528fd1; // c-blue
    --green-0: #59bea0; // c-green
    --green-2: #337561;
    --dark-0: radial-gradient(
        circle,
        rgb(230, 232, 232) 0%,
        rgb(234, 240, 242) 100%
    ); // c-dark-0
    --dark-1: #27282b; // c-dark-1
    --dark-2: #27292b; // c-dark-2
    --dark-3: #1d1f21; // c-dark-3
    --dark-4: #1d1d1f;

    --white-0: #dfdfdf; // c-white-0
    --white-1: #c5c5c5; // c-white-1

    --white-3: #707070;
    --white-4: #585a59; //
    --grad-1: linear-gradient(
        0deg,
        rgb(168, 221, 169) 0%,
        rgb(52, 214, 192) 100%
    );
}

.heebo {
    font-family: "Heebo";
}

.grad-1 {
    background: var(--grad-1);
}

body {
    background-color: #f3f4f5;
    color: var(--dark-1);
}
.gradient-dark-1 {
    background: linear-gradient(
        90deg,
        rgba(12, 14, 13, 1) 0%,
        rgba(33, 36, 36, 1) 100%
    );
}

.gradient-dark {
    background: radial-gradient(
        circle,
        rgb(36, 38, 38) 0%,
        rgb(27, 28, 28) 100%
    );
}

#app {
    font-family: "Merriweather", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.c-purple {
    background: var(--purple-0);
}

.c-orange {
    background: var(--orange-0);
}
.c-yellow {
    background: var(--yellow-0);
}
.c-blue {
    background: var(--blue-0);
}
.c-green {
    background: var(--green-0);
}
.c-green-1 {
    background: var(--green-2);
}
.c-dark-0 {
    background: var(--dark-0);
}
.c-dark-1 {
    background: var(--dark-1);
}

.c-dark-2 {
    background: var(--dark-2);
}

.c-dark-3 {
    background: var(--dark-3);
}
.c-dark-4 {
    background: var(--dark-4);
}

.c-white-0 {
    background: var(--white-0);
}
.c-white-1 {
    background: var(--white-1);
}
.t-white-0 {
    color: var(--white-1);
}
.t-white-1 {
    color: var(--white-4);
}
.t-white-2 {
    color: var(--white-3);
}
.t-green {
    color: var(--green-2);
}

///////////////////////
// TODO CHANGE FOCUS ACCESSIBILITY FOR KEYBOARD USERS WITH CUSTOM
//////////////////////
::-moz-focus-inner {
    border: 0 !important;
}

:focus {
    outline: none !important;
}
</style>

