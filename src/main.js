import Vue from "vue";
import App from "./App.vue";
import Typewriter from "typewriter-effect/dist/core";
import GraphemeSplitter from "grapheme-splitter";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");

const innerdemo = document.getElementById("inner-demo-2");

const stringSplitter = (string) => {
  const splitter = new GraphemeSplitter();
  return splitter.splitGraphemes(string);
};

const typewriter = new Typewriter(innerdemo, {
  loop: true,
  delay: 100.0,
  stringSplitter
});

typewriter
  .pauseFor(1000)
  .typeString("Howdy, I'm Tri! 👋")
  .pauseFor(420)
  .deleteAll()
  .typeString("I'm a creator committed to unconventional craftsmanship. 💡")
  .pauseFor(420)
  .deleteAll()
  .typeString("Let's build together! 🤝")
  .pauseFor(420)
  .deleteAll()
  .pauseFor(1000)
  .start();
