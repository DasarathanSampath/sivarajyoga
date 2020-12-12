<template>
  <component v-if="dynamicComponent" :is="dynamicComponent"></component>
</template>

<script>
export default {
  props: {
      componentName:{
          required: true,
          type: String
      }
  },
  data() {
    return {
      dynamicComponent: null
    }
  },

  mounted () {
    import(`./${this.componentName}`).then(module => {
      this.dynamicComponent = module.default
    })
  }
}
</script>