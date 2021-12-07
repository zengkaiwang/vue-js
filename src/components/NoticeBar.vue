<template>
  <div class="notice-bar">
    <div class="box">
      <div class="content">
        <p class="text">1.文字如果超出了宽度自动向左滚动文字如果超出了宽度自动向左滚动。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timer: null
    }
  },
  mounted () {
    const [box, content, text] = [
      document.querySelector('.box'),
      document.querySelector('.content'),
      document.querySelector('.text')
    ]
    let [textWidth, boxWidth] = [text.offsetWidth, box.offsetWidth]

    // 判断文字长度是否大于盒子长度
    if (boxWidth > textWidth) {
      return false
    }
    content.innerHTML += content.innerHTML
    document.querySelector('.text').classList.add('padding')
    // 更新
    textWidth = document.querySelector('.text').offsetWidth
    this.toScrollLeft()
  },
  methods: {
    toScrollLeft () {
      const [box, text] = [document.querySelector('.box'), document.querySelector('.text')]
      const [textWidth, boxWidth] = [text.offsetWidth, box.offsetWidth]
      //  如果文字长度大于滚动条距离，则递归拖动
      if (textWidth > box.scrollLeft) {
        box.scrollLeft++
        clearTimeout(this.timer)
        this.timer = setTimeout(this.toScrollLeft, 18)
      } else {
        // 重新一轮的滚动
        box.scrollLeft = 0
        clearTimeout(this.timer)
        this.timer = setTimeout(this.toScrollLeft, 1000)
      }
    }
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  margin-left: 200px;
  margin-top: 100px;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  width: 300px;
  background: #000;
}
.content p {
  display: inline-block;
}
.content p.padding {
  padding-right: 300px;
}
</style>
