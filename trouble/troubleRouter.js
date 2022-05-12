export default [
  {
    path: "/trouble",
    name: "Trouble",
    component: () => import(/* webpackChunkName: "Trouble" */ `./troubleList`),
  },
];
