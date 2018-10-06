<template>
    <div>
        <div class="container" id="work">
            <div class="d-flex flex-column pt-5 pb-5 justify-content-center">
                <h2 class="text-center" style="font-size: 4em;">My Works</h2>
                <div class="row justify-content-center pt-4">
                    <!-- work 1 -->
                    <div class="workbox col-lg-5 text-center">
                        <div class="work-img-box">
                            <img src="../../assets/works_1.png" alt="work1" class="img-fluid rounded img-border p-2 work01">
                            <div class="overlay d-flex justify-content-center align-items-center rounded">
                                <a href="https://shawnhuang0321.github.io/RWD-web/" class="txt" target="_blank">響應式網頁設計</a>
                            </div>
                        </div>
                        <div class="text-left mt-3">
                            <h5 class="mt-3 far fa-hand-point-right">利用bootstrap製作響應式網頁。</h5>
                            <h5 class="mt-3 far fa-hand-point-right">熟悉flexbox概念。</h5>
                            <h5 class="mt-3 far fa-hand-point-right">自動適應桌機、平版與手機等，不同規格的螢幕大小。</h5>
                        </div>
                    </div>
                    <!-- work 2 -->
                    <div class="workbox col-lg-5 text-center">
                        <div class="work-img-box">
                            <img src="../../assets/KoreaTripPicWallWeb.png" alt="work2" class="img-fluid rounded img-border p-2 work01">
                            <div class="overlay d-flex justify-content-center align-items-center rounded">
                                <a href="https://shawnhuang0321.github.io/KoreaTrip/" class="txt" target="_blank">韓國旅遊照片牆</a>
                            </div>
                        </div>
                        <div class="text-left mt-3">
                            <h5 class="mt-3 far fa-hand-point-right">Masonry Plugin 製作瀑布流版型。</h5>
                            <h5 class="mt-3 far fa-hand-point-right">light Box Plugin 製作燈箱效果。</h5>
                            <h5 class="mt-3 far fa-hand-point-right">Nivo Slider Plugin 製作輪播特效。</h5>
                        </div>
                    </div>
                    <!-- work 3 -->
                    <div class="workbox col-lg-5 text-center">
                        <div class="work-img-box">
                            <img src="../../assets/KaoHsiungTravelInfo.png" alt="work2" class="img-fluid rounded img-border p-2 work01">
                            <div class="overlay d-flex justify-content-center align-items-center rounded">
                                <a href="https://shawnhuang0321.github.io/KaoHsiungTravelInfo/" class="txt" target="_blank">高雄旅遊資訊網</a>
                            </div>
                        </div>
                        <div class="text-left mt-3">
                            <h5 class="mt-3 far fa-hand-point-right">AJAX 介接 open data 的 JSON 資料。</h5>
                            <h5 class="mt-3 far fa-hand-point-right">使用 Vue.js 框架編程。</h5>
                            <h5 class="mt-3 far fa-hand-point-right">Google maps API 製作地圖、定位標記。</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Works'
    }
</script>

<style scoped>
.workbox{
    border: 2px solid dimgray;
    border-radius: 15px;
    padding: 1%;
    margin: 5px 1%;
}
/* work hover */
.work-img-box{
    width: 77%;
    position: relative;
    margin: 0 auto;
}
.overlay{
    position: absolute;
    top: 0;
    background-color: black;
    width: 100%;
    height: 100%;
    transition: all .3s ease;
    opacity: 0;
}
.txt{
    font-size: 28px;
    color: aliceblue;
}
.txt:hover{
    text-decoration: none;
    color: aliceblue;
}
.work-img-box:hover .overlay{
    opacity: .8;
}
</style>
