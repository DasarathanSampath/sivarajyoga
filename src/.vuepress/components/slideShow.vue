<template>
    <div>
        <carousel :autoplay="true" :autoplayHoverPause="true" :perPage=1>
            <slide>
                <img class="slider-image" src="/img/slider/slider1.jpg" alt>
            </slide>
            <slide>
                <img class="slider-image" src="/img/slider/slider2.jpg" alt>
            </slide>
            <slide>
                <img class="slider-image" src="/img/slider/slider3.jpg" alt>
            </slide>
            <slide>
                <img class="slider-image" src="/img/slider/slider4.jpg" alt>
            </slide>
        </carousel>
    </div>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel'

export default {
    components: {
        Carousel, Slide
    }    
}
</script>

<style lang="stylus" scoped>
.slider-image
    border-radius 10px
</style>