<template>
    <section class="w-full">

        <!-- Navigation Bar
        <header
            class="shadow-sm fixed w-full flex justify-between items-center py-2 px-4 c-dark-3 z-50"
            ref="navigationroot"
        >
            Navigation Bar 'EXPLORER' Text
            <button @click="toggleMenu">
                <p class="font-medium opacity-20 text-2xl">EXPLORER</p>
            </button>
            Navigation Bar Toggle Icon
            <button
                @click="toggleMenu"
                class="z-50 self-end mb-0.5"
            >
                <font-awesome-icon
                    class="fill-current transform-none t-white-0 text-xl"
                    :icon="['fas', 'ellipsis-h']"
                    ref="togglemenuicon"
                />
            </button>
        </header>
        Navigation Bar Dropdown Container
        <transition name="slide">
            <div
                ref="navdropdowncontainer"
                v-if="isMenuOpen"
                class="fixed w-full top-10 z-40"
            >
                <nav
                    class="px-4 pb-4 c-dark-3"
                    ref="navigation"
                >
                    'public' dropdown decoration
                    <div class="flex items-center pt-4">
                        <font-awesome-icon
                            class="currentColor t-white-1 text-lg"
                            :icon="['fas', 'chevron-down']"
                        />
                        <p class="text-lg p-2 t-white-1">public</p>
                    </div>

                    <ul class="flex flex-col pl-4">
                        <li
                            class="p-2"
                            @click="hideMenu"
                        >
                            <font-awesome-icon
                                class="currentColor t-white-1"
                                :icon="['fas', 'chevron-right']"
                            />
                            <router-link
                                class=""
                                to="/about"
                            >
                                about
                            </router-link>
                        </li>
                        <li class="p-2">
                            <button @click="toggleSubMenu">
                                <font-awesome-icon
                                    class="currentColor transform-none t-white-0"
                                    :icon="['fas', 'chevron-right']"
                                    ref="submenuicon"
                                />
                            </button>
                            <router-link
                                @click.native="hideMenu"
                                class="pl-2 t-white-0"
                                to="/"
                            >articles</router-link>

                            Article Sorting Submenu 
                            <div v-if="isSubMenuOpen">
                                <ul>
                                    <li class="p-2.5 pl-8 pt-1.5">
                                        <router-link
                                            @click.native="hideMenu"
                                            class="t-white-0"
                                            to="/recent"
                                        >
                                            recent
                                        </router-link>
                                    </li>

                                    <li class="p-2.5 pl-8 pt-1.5">
                                        <router-link
                                            @click.native="hideMenu"
                                            class="t-white-0"
                                            to="/popular"
                                        >
                                            popular
                                        </router-link>
                                    </li>

                                    <li class="p-2.5 pl-8 pt-1.5">
                                        <router-link
                                            @click.native="hideMenu"
                                            class="t-white-0"
                                            to="/archive/"
                                        >
                                            archive
                                        </router-link>
                                    </li>
                                    <li class="p-2.5 pl-8 pt-1.5">
                                        <router-link
                                            @click.native="hideMenu"
                                            class="t-white-0 opacity-40"
                                            to="/"
                                        >
                                            rss <span class="t-white-1">(coming soon)</span>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li
                            class="p-2"
                            @click="hideMenu"
                        >
                            <font-awesome-icon
                                class="currentColor t-white-1"
                                :icon="['fas', 'chevron-right']"
                            />
                            <router-link
                                class=""
                                to="/contact"
                            >
                                contact
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </transition> -->

        <header class="flex items-center flex-col mt-2">
            <div class="top-name">

            </div>
            <div class="bottom-name"></div>
            <transition name="slidein">
                <p class="heebo font-medium text-lg logo-text leading-6 mt-0.5">JERLENDS</p>
            </transition>
            <div class="bottom-name"></div>
            <div class="top-name"></div>
        </header>
    </section>
</template>

<script>
export default {
    name: "NavBar",

    data() {
        return {
            isMenuOpen: false,
            isSubMenuOpen: false,
        };
    },

    methods: {
        toggleMenu: function () {
            this.isMenuOpen = !this.isMenuOpen;
            this.isSubMenuOpen = false;
            this.$refs.togglemenuicon.classList.toggle("rotate");
        },

        toggleSubMenu: function () {
            this.isSubMenuOpen = !this.isSubMenuOpen;
            this.$refs.submenuicon.classList.toggle("rotate");
        },

        hideMenu: function () {
            console.log("hiding");
            this.isSubMenuOpen = false;
            this.isMenuOpen = false;
            this.$refs.submenuicon.classList.remove("rotate");
            this.$refs.togglemenuicon.classList.remove("rotate");
        },
    },
    mounted() {},
};
</script>

<style scoped>
.logo-text {
    color: #414040;
}

.top-name {
    display: block;
    width: 46px;
    height: 3px;
    background: #3c3939;
    margin: 1.5px 0 1.5px 0;
}

.bottom-name {
    display: block;
    width: 68px;
    height: 3px;
    background: #3c3939;
    margin: 1.5px 0 1.5px 0;
}

.transform-none {
    transform: none;
    transition: transform 0.1337s ease-out;
}
.rotate {
    transform: rotate(90deg) !important;
    transition: transform 0.1337s ease-in;
}
.slide-enter-active {
    transition: top 0.2s ease-out;
}
.slide-leave-active {
    transition: top 0.15s ease-in;
}
.slide-enter {
    top: -300px;
}
.slide-leave-to {
    top: 0px;
}
</style>