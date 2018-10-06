<template>
    <div class="bg pb-5">
        <div class="container" id="about">
            <h2 class="text-center py-4" style="font-size: 4em;">About Me</h2>
            <hr>
            <div class="row justify-content-center pt-5 pb-5">
                <div class="d-flex flex-wrap ml-2 mr-2 justify-content-center">
                    <div class="text-center col-lg-5 col-md-12 col-sm-12 mt-3">
                        <img src="../../assets/myPhoto_3.jpg" alt="" width="320px" class="img-fluid rounded-circle img-border p-2">
                    </div>
                    <div class="about rounded ml-5 col-lg-5 col-md-12 col-sm-12 mt-3">
                        <ul>
                            <li class="mt-3">2016年畢業於國立中興大學環境工程學系。</li>
                            <li class="mt-3">個性內向、木訥寡言。</li>
                            <li class="mt-3">喜愛閱讀書籍。</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'About',
    }
</script>

<style scoped>
.bg{
    background-image: url(../../assets/puzzle.jpg);
    background-attachment: scroll;
    background-position: center center;
    background-size: cover;
    padding: 0;
}
.img-border{
    border: 1px solid silver;
}
.about{
    background: rgba(255,255,255,.5);
    box-shadow: 0 0 5px 2px grey;
}
.about h2{
    font-size: 4em;
}
.about li{
    font-size: 1.5em;
    margin-bottom: 5px;
}
</style>
