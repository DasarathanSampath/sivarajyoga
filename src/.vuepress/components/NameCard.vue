<template>
    <div class="card">
        <img src="/img/name-card.jpg" alt="Avatar" class="name-card-img">
        <div class="container">
            <h4><b>Sri Ramakrishna Yogashramam</b></h4>
            <h3> Dr. Siva Rajendran </h3>            
            <h3 style="color: gray;"> Phone: +91 97905 67188 </h3>
            <a href="mailto:kanchisivarajyoga@gmail.com" style="word-wrap: break-word;"> kanchisivarajyoga@gmail.com </a>
            <p style="text-align: left;"> Head Office <br/>
            Registered No - 89/2010 <br/>
            19.E, Singaperumal koil sannadhi street, <br/>
            Kanchipuram - 631 501 </p>
            <span> <b> Google Map </b>
              <a href="https://goo.gl/maps/5AZfuxUHt5RKcuwF7" target="_blank"> 
                <i class="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                <i class="location">{{$themeLocaleConfig.location}}</i>
              </a>
            </span>            
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.card {
  box-shadow: 0 0.5rem 1rem 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  text-align center
  border-radius 10px
  line-height 0.7   rem  
}

.card:hover {
  box-shadow: 0 1rem 2rem 0 rgba(0,0,0,0.2);
}

.container {
  padding: 0.25rem 2rem 0.25rem 1rem;
}

.name-card-img
    width 75%

</style>