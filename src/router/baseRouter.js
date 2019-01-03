import Login from "../components/Login.vue";
import form from "../components/form/form";
import imgCon from "../components/img/imgCon.vue";
import Img from "../components/img/Img.vue";
import Slots from "../components/Slots";
import AboutUS from "../components/AboutUS.vue";
import home from "../components/home.vue";
import KeyboardContainer from "../components/virtualkeyboard/KeyboardContainer.vue";

const baseRoutes = [
  { path: "/", name: "home", component: home },
  { path: "/Login", name: "login", component: Login },
  {
    path: "/aboutUs",
    name: "aboutus",
    meta: { notLogin: true },
    component: AboutUS
  },
  {
    path: "/virtualkeyboard",
    name: "virtualkeyboard",
    meta: { notLogin: true },
    component: KeyboardContainer
  },
  { path: "/form", name: "form", component: form },
  {
    path: "/img",
    name: "img",
    component: imgCon,
    children: [
      { path: "", name: "imgChildren", component: Img },
      { path: ":id", name: "imgChildren", component: Img }
    ]
  },
  { path: "/Slots", name: "Slots", component: Slots }
];

export default baseRoutes;
