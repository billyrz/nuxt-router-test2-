<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <ul>
        <li>path: {{ $route.path }}</li>
        <li>params: {{ $route.params }}{{ re }}</li>
        <li></li>
      </ul>
    </v-col>
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title
          >h5 这是一级目录 {{ this.$route.path }} 的子目录
        </v-card-title>
        <v-cart-text> <> </v-cart-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  asyncData() {
    //故意设置延时.......
  },
  data() {
    return {
      re: '2344343434',
    };
  },
};
</script>
