<template>
    <div>
    <div style="margin-bottom: 1rem;" class="card" v-for="imageGroup in ListofFiles" :key="imageGroup.key">            
            <div class="card-img">
                <div class="imgGridRow">
                    <img class="imgGridColumn" :src="imgPath(imageGroup.path, imageGroup.filenames2[0])">
                    <img class="imgGridColumn" :src="imgPath(imageGroup.path, imageGroup.filenames2[1])">
                    <img class="imgGridColumn" :src="imgPath(imageGroup.path, imageGroup.filenames2[2])">
                    <img class="imgGridColumn" :src="imgPath(imageGroup.path, imageGroup.filenames2[3])">
                </div>
            </div>
            <div class="card-txt">
                <h1 class="card-txt__title"> {{imageGroup.title}} </h1> 
                <div>             
                    <span class="card-txt__dateTime"> {{imageGroup.date}}</span> • 
                    <span class="card-txt__dateTime">{{imageGroup.location}}</span> •             
                </div>
                <p class="card-txt__imgDesc"> {{imageGroup.imageDescription}}</p>       
                <a class="card-txt__lnk" :href="`/gallery/${imageGroup.path}`"> View Images → </a>
            </div>                        
    </div>
    </div>
</template>

<script>
import ArtGalleryFiles from '@assets/jsons/ArtGallery.json'
export default {    
    data () {
        return {
            ListofFiles: ArtGalleryFiles
        }
    },
    computed: {
        post () {
            return this.$frontmatter
        }
    },
    methods: {
        imgPath (imageGroup, image) {
            return require(`@assets/gallery/${imageGroup}/${image}.jpeg`)
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

.imgGridRow:after {
  content: "";
  display: table;
  clear: both;
}

.imgGridColumn{
    float: left;
    width: 50%
}   

.imgGroupTxt{
    display: block;
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