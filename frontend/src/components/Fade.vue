<template>
    <section class="w-full h-full flex items-center">

        <div class="w-full h-full flex flex-col items-center justify-center">
            <transition name="fade">
                <p class="text-2xl leading-8">Are you</p>
            </transition>
            <transition name="slideappear">
                <p class="text-2xl leading-8">paying attention?</p>
            </transition>
        </div>

    </section>
</template>

<script>
export default {
    name: "Fade",
};
</script>