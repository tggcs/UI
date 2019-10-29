const defaultPath = () => import("../components/test.vue");
const button = () => import("../components/button.vue");

export default [{
  path: '/',
  component: defaultPath
}, {
  path: '/button',
  component: button
}]