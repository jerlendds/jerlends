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
        <fade> </fade>
    </section>
</template>

<script>
import Fade from "@/components/Fade";

export default {
    name: "Articles",
    components: {
        fade: Fade,
    },
    data() {
        return {
            articles: [
                {
                    id: 0,
                    title: "Botnets and Covert Communication",
                    datePosted: this.currentDate(),
                    readTime: 15,
                    postPreview:
                        "Lorem ipsum dolor sit amet. Doloremque voluptas, officiis omnis est quo officia fugiat delectus? Iste, inventore ducimus",
                },
                {
                    id: 1,
                    title: "The time I Installed Gentoo",
                    datePosted: this.currentDate(),
                    readTime: 8,
                    postPreview:
                        "Dolor sit amet consectetur, adipisicing elit. Doloremque voluptas, officiis omnis est quo officia fugiat delectus? Iste, inventore ducimus",
                },
                {
                    id: 2,
                    title: "First Post",
                    datePosted: this.currentDate(),
                    readTime: 1,
                    postPreview:
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque voluptas, officiis omnis est quo officia. Amet consectetur, adipisicing elit lorem ipsum dolor sit amet",
                },
            ],
        };
    },

    methods: {
        currentDate: function () {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, "0");
            var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
            var yyyy = today.getFullYear();

            today = mm + "/" + dd + "/" + yyyy;
            return today;
        },
    },
};
</script>

<style>
</style>