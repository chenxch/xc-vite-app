
<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
import { h,ref, reactive } from 'vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // data() {
  //   return {
  //     count: 0
  //   }
  // }
  // =>
  setup() {
    const count = ref(0);
    const object = reactive({ foo: 'bar'});
    return {
      count,
      object
    }
    // return () => h('div',[count.value, object.foo])
  }
}
</script>
