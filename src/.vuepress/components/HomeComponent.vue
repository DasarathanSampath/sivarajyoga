<template>
    <div class="row">        
            <div class="left-column">
                left
                <!-- <NameCard />
                <ForAppointment />
                <TheAccordion    
                  :allTimings="Object.values(theTimings)"
                /> -->
            </div>
            <div class="middle-column">
                middle
              <!-- <div class="slideShow">
                <component v-if="dynamicComponent" :is="dynamicComponent"></component>
              </div>
              <MainContent /> -->
               
            </div>
            
            <div class="right-column">
                right
                <!-- <ContactForm />
                <div style="padding: 1rem 0.25rem 0.25rem 0.25rem; float: center;">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.139138472408!2d79.70174971482052!3d12.834284190946041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52c30b907f94a7%3A0x9489e0ebdcf4c815!2sDr%20V.%20Magesh%20DM%20Cardio%20Om%20Shanthi%20Heart%20Care%20Centre!5e0!3m2!1sen!2sin!4v1606737468287!5m2!1sen!2sin" frameborder="5px" style="border:2px; width:100%; border: 2px solid #555" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div> -->
            </div>
        </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>

.row:after
  content ""
  display table
  clear both

.left-column 
  float left
  width 30%

.middle-column 
  float left
  width 50%
  padding 0 1% 0 1%
  

.right-column 
  float left
  width 18%

@media screen and (max-width $MQNarrow) {
  .left-column, .right-column, .middle-column{
    width 100%
    padding 0
  }
}

.slideShow
    padding 0.25rem 0 0 0
    border-radius 20px

</style>

