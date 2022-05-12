export default [
  {
    path: "/alarm",
    name: "Alarm",
    component: () => import(/* webpackChunkName: "Alarm" */ `./alarmList`),
  },
];
