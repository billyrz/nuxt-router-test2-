<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12">
      <v-list>
        <v-list-item>
          <H3 class="red--text">
            自动生成的动态路由的嵌套路由 从index.vue 就开始了
          </H3>
        </v-list-item>
        <v-list-item>
          <span class="green--text"> Path:</span> {{ this.$route.path }}
        </v-list-item>
        <v-list-item>
          <span class="pink--text"> Params:</span>
          {{ this.$route.params['index'] }}
        </v-list-item>
        <v-list-item>
          <span class="indigo--text">Self Data:</span> {{ re }}
        </v-list-item>
      </v-list>
    </v-col>
    <v-col cols="12" sm="12">
      <v-card>
        <v-card-title>
          这是一级目录 {{ this.$route.path }} 的子目录
        </v-card-title>
        <v-cart-text>
          <v-chip-group active-class="primary--text" column>
            <v-chip
              v-for="(tag, index) in items"
              :key="index"
              nuxt
              :to="$route.path + '/' + tag.link"
            >
              {{ tag.name }}
            </v-chip>
          </v-chip-group>
        </v-cart-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
export default {
  async asyncData() {
    //故意设置延时.......
    await sleep(parseInt(Math.random() * 6000 + 2000));
    let items = [];
    for (let j = 0; j < 23; j++) {
      let second = {};
      second.name = 'item ' + j;
      second.link = 'item-' + j;
      items.push(second);
    }

    return { items: items };
  },

  created() {
    console.log(this.$route.params);
  },
  data() {
    return {
      re: '2344343434',
    };
  },
};
</script>
