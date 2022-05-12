<template>
  <div>{{ msg }}</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "alarmList",
  computed: {
    ...mapState({
      msg: state => state.alarm.msg,
    }),
  },
  created() {
    this.setMsg("这是报警页面");
  },
  methods: {
    ...mapActions("alarm", ["setMsg"]),
  },
};
</script>

<style scoped></style>
