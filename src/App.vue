<template>
  <div id="app">
    <TheHeader
      :color="appMainColor"
      class="app__header"
    />
    <MainContent
      :color="appMainColor"
      class="app__content"
    />
    <TheFooter
      :color="appMainColor"
      class="app__footer"
    />
  </div>
</template>

<script>
import "@/assets/css/tailwind.css";
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

  data: () => ({
    appMainColor: "indigo" // tailwind color value
  })
};
</script>

<style lang="scss">
#app {
	display: flex;
  flex-direction: column;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-text);
	min-height: 100vh;
}
</style>
