<template>
    <div>
        <div class="card" v-for="post in postHeads" :key="post.key">
            <img class="card-img" :src="imgPath(post.frontmatter['id'])" />
            <div class="card-txt">            
                <h1 class="card-txt__title"> {{post.title}} </h1> 
                <div>             
                    <span class="card-txt__dateTime"> {{post.frontmatter['author']}}</span> • 
                    <span class="card-txt__dateTime">{{post.frontmatter['date']}}</span> •             
                </div>
                <p class="card-txt__imgDesc"> {{post.frontmatter['imgDesc']}}</p>
                <p class="card-txt__desc"> {{post.frontmatter['desc']}} </p>            
                <a class="card-txt__lnk" :href="post.path"> {{toRead}} → </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        postHeads(){
            const postHeadNaturopathy = this.$site.pages.filter(page => page.path.includes('/naturopathy/') && page.relativePath.includes('index.md'))
            const postHeadMeditation = this.$site.pages.filter(page => page.path.includes('/meditation/') && page.relativePath.includes('index.md'))
            const postHeadYoga = this.$site.pages.filter(page => page.path.includes('/yoga/') && page.relativePath.includes('index.md'))
            const postHeadVarmam = this.$site.pages.filter(page => page.path.includes('/varmam/') && page.relativePath.includes('index.md'))
            const postHeadGallery = this.$site.pages.filter(page => page.path.includes('/gallery/') && page.relativePath.includes('index.md'))
            const postHeads = postHeadNaturopathy.concat(postHeadVarmam, postHeadYoga, postHeadMeditation, postHeadGallery)
            var iP = postHeads.length
            while (iP--) {
                if (postHeads[iP].frontmatter.articleLang !== this.$lang) { 
                    postHeads.splice(iP, 1)
                } 
            }      
            return postHeads
        },
        toRead(){
            return this.$themeConfig.locales[this.$localePath].read
        }
    },
    methods: {
        imgPath (id) {
            return require(`@assets/thumbnails/${id}/_thumbnail.png`)
        }
    }
}
</script>