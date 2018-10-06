<template>
    <div>
        <div class="bg pb-5" id="contact">
            <div class="container pt-5 pb-5 text-center">
                <h2 class="text-center col-12" style="font-size: 4em;">Contact Me</h2>
                <hr>
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <img src="../../assets/myPhoto_4.jpg" alt="" class="img-fluid img-border rounded-circle p-2">
                    </div>
                    <div class="contact text-left col-lg-6">
                        <h3 class="mb-4 fas fa-user-alt">黃柏勝 (Shawn)</h3>
                        <h3 class="mb-4 fas fa-envelope"> shawn123456177@gmail.com</h3>
                        <h3 class="mb-4 fas fa-mobile-alt"> +886 921 767 310</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Contact'
    }
</script>

<style scoped>
.bg{
    background-image: url(../../assets/wall.jpg);
    background-attachment: scroll;
    background-position: center center;
    background-size: cover;
    padding: 0;
}
.img-border{
    border: 1px solid silver;
}
.contact{
    background: rgba(255,255,255,.5);
    box-shadow: 0 0 5px 2px grey;
    padding: 50px;
}
</style>
