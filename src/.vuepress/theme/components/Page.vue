<template>
  <main class="page">
    <slot name="top" />
    <div class="row">        
      <div class="left-column">
        <name-card/>
        <contact-form />  
      </div>
      <div class="right-column">
        <Content class="theme-default-content" style="margin-top: -60px;"/>                
      </div>      
    </div>
    <PageEdit />
    <PageNav v-bind="{ sidebarItems }" />
    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import NameCard from '../../components/NameCard.vue'
import ContactForm from '../../components/ContactForm.vue'

export default {
  components: { PageEdit, PageNav, NameCard, ContactForm },
  props: ['sidebarItems']
}
</script>

<style lang="stylus" scoped>
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  padding-top 4rem  
  display block

.row:after
  content ""
  display table
  clear both

.left-column 
  float left
  width 23%
  padding 0 1% 0 1%

.right-column 
  float left
  width 74%
  padding 0 0 0 1%

@media screen and (max-width $MQNarrow) {
  .left-column, .right-column{
    width 100%
    padding 0
  }
}

.slideShow
    padding 0.25rem 0 0 0
    border-radius 20px

</style>
