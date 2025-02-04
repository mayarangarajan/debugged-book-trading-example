<template>

    <img :src="book.cover" :alt="book.title" height="400" width="200">
    <h3>{{ book.title }}</h3>
    <p>{{ book.author }}</p>
</template>

<script lang="ts">
export default {
    props: {
        book: {
            cover: String,
            title: String,
            author: String
        }
    }

}
</script>
