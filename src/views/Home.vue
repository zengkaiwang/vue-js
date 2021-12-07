<template>
  <div class="home">
    <!-- css实现跑马灯 -->
    <NoticeBarCss></NoticeBarCss>

    <!-- js实现跑马灯 -->
    <NoticeBar></NoticeBar>

    <!-- 渲染函数 -->
    <blog-post>
      <template v-slot:header>
        <h1>About Me 我是header插槽</h1>
      </template>

      <p>
        111 Here's some page content, which will be included in vm.$slots.default, because it's not
        inside a named slot.
      </p>

      <template v-slot:footer>
        <p>Copyright 2016 Evan You 我是footer插槽</p>
      </template>

      <p>
        222 If I have some content down here, it will also be included in vm.$slots.default.
      </p>
      .
    </blog-post>

    <!-- 自定义指令 -->
    <BaseDirective></BaseDirective>

    <!-- 多元素过渡 -->
    <transition>
      <div v-if="items.length > 0">午安啦</div>
      <p v-else>Sorry, no items found.</p>
    </transition>

    <!-- vue过渡效果 -->
    <div>
      <button v-on:click="show = !show">Toggle</button>
    </div>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>

    <!-- 强制刷新 -->
    <el-button type="dafault" @click="updateCom">点击更新数组，同时强刷新</el-button>

    <!-- 访问子组件实例或子元素 -->
    <base-input ref="usernameInput"></base-input>

    <!-- sync修饰符实践 -->
    <el-button type="text" @click="showDialog">点击打开 Dialog</el-button>
    <BaseDialog :visible.sync="dialogVisible"></BaseDialog>

    <!-- 自动化局部注册 -->
    <BaseButton></BaseButton>
    <ul id="example-1">
      <li v-for="item in items" :key="item.message">{{ item.message }}</li>
    </ul>

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NoticeBar from '@/components/NoticeBar.vue'
import NoticeBarCss from '@/components/NoticeBarCss.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    NoticeBar,
    NoticeBarCss
  },
  data () {
    return {
      dialogVisible: false,
      show: false,
      items: [{ message: 'Foo' }, { message: 'Bar' }]
    }
  },

  created () {
    // console.log('执行了组件created')
    // console.log('父组件的dialogVisible', this.dialogVisible)
  },
  mounted () {
    // console.log('this.$refs.usernameInput', this.$refs.usernameInput)
    this.$refs.usernameInput.focus()
  },
  methods: {
    showDialog () {
      this.dialogVisible = true
    },
    updateCom () {
      this.items.length = 0
      this.$forceUpdate()
    }
  },
  watch: {
    dialogVisible (newQuestion, oldQuestion) {
      console.log('newQuestion', newQuestion, oldQuestion)
    }
  },

  beforeRouteEnter (to, from, next) {
    // debugger
    next()
  }
}
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
