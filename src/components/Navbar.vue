<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-dark p-3">
            <router-link to="/" class="logo text-light ml-3" style="font-size: 26px;">Shawn'Web</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="fas fa-bars text-light"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto">
                    <router-link to="/main" class="btn btn-outline-light mr-3 ml-3 mt-1 about-btn">About</router-link>
                    <router-link to="/main/skill" class="btn btn-outline-light mr-3 ml-3 mt-1 about-btn">Skills</router-link>
                    <router-link to="/main/work" class="btn btn-outline-light mr-3 ml-3 mt-1 about-btn">Works</router-link>
                    <router-link to="/main/contact" class="btn btn-outline-light mr-3 ml-3 mt-1 about-btn">Contact</router-link>
                </div>
            </div>
        </nav>
    </div>
</template>


<script>
    export default{
        name: 'Navbar',
        methods: {
            
        }
    }
</script>

<style scoped>
.pd-15{
    padding: 15px;
}
</style>
