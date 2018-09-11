<template>
    <section class="header">
            <h1 class="title">{{ title }}</h1>
            <slot/>
            <button class="cta header__cta">{{ cta }}</button>
        </section>
    </template>
<script>
export default {
  name: "header-component",
  props: ["title", "cta"]
}
</script>