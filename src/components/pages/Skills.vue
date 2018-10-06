<template>
    <div>
        <div class="bg opa-0" id="skill">
            <div class="col-12 pt-5 pb-5">
                <div class="container">
                    <h2 class="text-center mb-5" style="font-size: 4em;">My Skills</h2>
                    <hr>
                    <!-- skill 1 -->
                    <div class="row ml-3">
                        <h2 class="fab fa-css3-alt"></h2>
                        <h2 class="skill-title ml-4">HTML/CSS/Bootstrap</h2>
                    </div>
                    <div class="skillbar">
                        <div class="skillbar-top sk01 text-center pt-1 bar-run-1">
                            <h2>80%</h2>
                        </div>
                    </div>
                    <!-- skill 2 -->
                    <div class="row ml-3 mt-3">
                        <h2 class="fab fa-js-square"></h2>
                        <h2 class="skill-title ml-4">JavaScript/jQuery/AJAX</h2>
                    </div>
                    <div class="skillbar">
                        <div class="skillbar-top sk02 text-center pt-1 bar-run-2">
                            <h2>60%</h2>
                        </div>
                    </div>
                    <!-- skill 3 -->
                    <div class="row ml-3 mt-3">
                        <h2 class="fab fa-github"></h2>
                        <h2 class="skill-title ml-4">Github</h2>
                    </div>
                    <div class="skillbar">
                        <div class="skillbar-top sk01 text-center pt-1 bar-run-1">
                            <h2>80%</h2>
                        </div>
                    </div>
                    <!-- skill 4 -->
                    <div class="row ml-3 mt-3">
                        <h2 class="fab fa-vuejs"></h2>
                        <h2 class="skill-title ml-4">Vue.js</h2>
                    </div>
                    <div class="skillbar">
                        <div class="skillbar-top sk03 text-center pt-1 bar-run-3">
                            <h2>50%</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'Skills'
    }
</script>

<style scoped>
.bg{
    background-color: #F4F1F0;
    
}
.fab.fa-css3-alt{
    color: #229FDF;
    font-size: 5.5em;
}
.fab.fa-js-square{
    color: #FFDA3E;
    font-size: 5em;
}
.fab.fa-github{
    color: #000;
    font-size: 5em;
}
.fab.fa-vuejs{
    color: #41b883;
    font-size: 5em;
}
.skill-title{
    font-size: 2.5em;
}
.skillbar{
    width: 100%;
    height: 50px;
    background-color: dimgrey;
    border-radius: 15px;
    position: relative;
}
.skillbar-top{
    width: 0%;
    height: 50px;
    position: absolute;
    background-color: blue;
    border-radius: 15px 0px 0px 15px;
    color: aliceblue;
    opacity: 0;
}
.bar-run-1{
    animation: barrun01 3s forwards;
}
.bar-run-2{
    animation: barrun02 3s forwards;
}
.bar-run-3{
    animation: barrun03 3s forwards;
}
/* barrun */
@keyframes barrun01{
    from{width: 0%;opacity: 0;}
    to{width: 80%;opacity: 1;}
}
@keyframes barrun02{
    from{width: 0%;opacity: 0;}
    to{width: 60%;opacity: 1;}
}
@keyframes barrun03{
    from{width: 0%;opacity: 0;}
    to{width: 50%;opacity: 1;}
}
</style>
