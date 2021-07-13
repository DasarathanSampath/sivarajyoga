<template>
    <div>
    <div class="artGalleryRow">
        <div class="artGalleryColumn" v-for="imageName in photoGroup.filenames2" :key="imageName.key">  
            <expandable-image
            class="artGalleryImage"
            :src="imgPath(imageName)"
            alt="dog"
            title="dog"
            />
        </div>
    </div>
    <div style="clear: both;"></div>
    </div>
</template>

<script>
import ExpandableImage from './ExpandableImage'
import ArtGalleryFiles from '@assets/jsons/ArtGallery.json'
export default {
    components: { ExpandableImage },
    data () {
        return {
            
        }
    },
    computed: {
        post () {
            return this.$frontmatter
        },
        photoGroup (){
            return ArtGalleryFiles[this.post.id]
        }
    },
    methods: {
        imgPath (imageName) {
            return require(`@assets/gallery/${this.post.id}/${imageName}.jpeg`)
        }
    }
}
</script>
<style>
#artgallery {  
  width: 600px;
  max-width: 100%;
  margin: 50px auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.artGalleryImage {
  width: 100%;
}
/* Clear floats after the columns */
.artGalleryRow:after {
  content: "";
  display: table;
  clear: both;
}
/* Create three equal columns that floats next to each other */
.artGalleryColumn {
  float: left;
  width: 30%;
  padding: 1%;
}
</style>