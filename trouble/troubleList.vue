<template>
  <div>{{ msg }}</div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: "troubleList",
  computed: {
    ...mapState({
      msg: state => state.trouble.msg
    })
  },
  created() {
    this.setMsg('这是隐患页面')
  },
  methods: {
    ...mapActions(['setMsg'])
  }
}
</script>

<style scoped>

</style>