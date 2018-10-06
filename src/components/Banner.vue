<template>
  <div>
    <section class="banner">
        <div class="inner text-center">
            <h1>This is Shawn .</h1>
            <p class="mt-5 mb-5">Do you know who I am ?
                <br> If you don't ,let me show you .</p>
            <router-link to="/main" class="btn btn-primary btn-lg about-btn">Know More</router-link>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Banner',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner{
    background-image: url(../assets/banner.jpg);
    background-attachment: scroll;
    background-position: center;
    background-size: cover;
    max-width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    animation-delay: 0.8s;
}
.banner::before{
    display: block;
    background-color: #000;
    opacity: 0.65;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    content: '';
}
.inner{
    z-index: 2;
    opacity: 1;
    position: relative;
    animation-delay: 1.8s;
}
.banner h1{
    color: #FFF;
    font-size: 4em;
}
.banner p{
    color: silver;
    font-size: 2em;
}
</style>
