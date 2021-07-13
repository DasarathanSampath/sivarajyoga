<template>
    <div v-if="thisLang">
      <a :href="altPath" class="action-button"> 
          {{alternateLang}}
      </a>
    </div>
</template>

<script>

export default {  
  computed:{
    thisLang(){
      return this.$page.frontmatter.altLang
    },
    alternateLang() {
      return this.$lang =='en-US' ? 'தமிழில்' : 'in English'
    },
    altPath() {
      if(this.$lang == 'en-US') {
        return `/ta${this.$page.path}`
      }
      else {
        return (this.$page.path).substring(3)
      }
    },
  }
}
</script>

<style lang="stylus" scoped>
.action-button
      display inline-block
      font-size 1.2rem
      font-weight 600
      color #205B43      
      // padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken(#205B43, 10%)
      &:hover
        background-color #000000
        color white
</style>
