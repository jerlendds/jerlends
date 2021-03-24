<template>
    <section>
        <div
            v-for="article in articles"
            :key="article.id"
        >
            <div class="c-dark-0 py-4 pb-0 m-2 my-6 rounded shadow-lg">
                <h2 class="px-4 text-xl font-semibold">{{ article.title }}</h2>
                <p class="px-4 text-sm t-white-2 py-3">{{ article.datePosted }} &#8226; {{ article.readTime }} min read</p>
                <p class="px-4 pb-4 t-white-0">{{ article.postPreview }}...</p>
                <router-link
                    :to="'articles/' + String(article.id)"
                    class="rounded w-full flex items-center pr-4 py-2 justify-between c-dark-4"
                >
                    <p class="t-green pl-4">read more</p>
                    <font-awesome-icon
                        class="text-lg t-green fill-current"
                        :icon="['fas', 'chevron-right']"
                    />
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Articles",
    data() {
        return {
            articles: [
                {
                    id: 0,
                    title: "botnets and covert communication",
                    datePosted: this.currentDate(),
                    readTime: 15,
                    postPreview:
                        "Lorem ipsum dolor sit amet. Doloremque voluptas, officiis omnis est quo officia fugiat delectus? Iste, inventore ducimus",
                },
                {
                    id: 1,
                    title: "the time I installed gentoo",
                    datePosted: this.currentDate(),
                    readTime: 8,
                    postPreview:
                        "Dolor sit amet consectetur, adipisicing elit. Doloremque voluptas, officiis omnis est quo officia fugiat delectus? Iste, inventore ducimus",
                },
                {
                    id: 2,
                    title: "first post",
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