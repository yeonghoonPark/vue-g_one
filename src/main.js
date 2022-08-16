import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
// import AppCard from "@/components/AppCard.vue";
import "./assets/main.css";

const app = createApp(App);
// app.component("AppCard", AppCard);
app.provide("app-message", "main.js에서 온 전역 app message 입니다.");
app.mount("#app");
import "bootstrap/dist/js/bootstrap.js";
