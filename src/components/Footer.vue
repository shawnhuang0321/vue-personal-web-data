<template>
    <div>
        <div class="icons d-flex justify-content-center">
            <a href="https://www.facebook.com/profile.php?id=100000185693039" target="_blank" class="fab fa-facebook-square" title="Facebook"></a>
            <a href="#" class="fab fa-instagram" target="_blank" title="Instagram"></a>
            <a href="https://github.com/shawnhuang0321/about-me" target="_blank" class="fab fa-github-square" title="Github"></a>
        </div>
        <h4 class="text-center mt-3 mb-3">Copyright © Po-Sheng Huang All rights reserved</h4>
    </div>
</template>


<script>
    export default{
        name: 'Footer'
    }
</script>

<style scoped>
.icons{
    margin-top: 80px;
}
.icons a{
    color: #999;
    font-size: 2.5em;
    margin: 0 20px;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 4px #fff, 0px 0px 0px 5px rgba(0, 0, 0, 0.1);
    border-radius: 100%;
    width: 1.5em;
    height: 1.5em;
    line-height: 1.5em;
    text-align: center;
}
.icons a:hover{
    text-decoration: none;
}
.top{
    color: #999;
    padding: 8px;
    font-size: 3em;
    border: #999 2px solid;
    border-radius: 100%;
    box-shadow: 3px 3px 3px dimgray;
    position: fixed;
    right: 30px;
    bottom: 30px;
    transition: all .1s;
    opacity: 0;
}
.top:hover{
    text-decoration: none;
    color: #fff;
    background-color: dimgray;
}
</style>
