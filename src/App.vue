<template>
  <div id="app">
    <TheHeader class="app__header" />
    <MainContent class="app__content" />
    <TheFooter class="app__footer" />
  </div>
</template>

<script>
import "@/assets/scss/app.scss";
import TheHeader from "@/components/TheHeader";
import MainContent from "@/components/MainContent";
import TheFooter from "@/components/TheFooter";

export default {
  name: "App",
  components: {
    TheHeader,
    MainContent,
    TheFooter
  },
  data: () => ({})
};
</script>

<style lang="scss"></style>
