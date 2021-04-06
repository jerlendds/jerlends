<template>
    <section class="flex items-center justify-center">

        <!-- <div
            v-for="article in articles"
            :key="article.id"
            class=""
        >
            <div class="">
                <h2 class="heebo">{{ article.title }}</h2>
                <p class="heebo">{{ article.datePosted }} &#8226; {{ article.readTime }} min read</p>
                <p class="heebo">{{ article.postPreview }}...</p>

                <router-link
                    :to="'articles/' + String(article.id)"
                    class="rounded flex"
                >
                    <div class="flex items-center grad-1">
                        <p class="t-white-0 pl-4 heebo font-bold">Read more</p>
                        <font-awesome-icon
                            class="t-white-0 text-lg fill-current"
                            :icon="['fas', 'chevron-right']"
                        />
                    </div>

                </router-link>
            </div>
        </div> -->

    </section>
</template>

<script>
export default {
    name: "Articles",

    components: {},

    data() {
        return {};
    },

    methods: {},
};
</script>

<style>
</style>