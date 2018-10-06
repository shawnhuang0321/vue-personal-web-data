<template>
    <div>
        <Navbar/>
        <router-view></router-view>
        <Footer/>
    </div>
</template>


<script>

import Navbar from './Navbar'
import Footer from './Footer'


    export default{
        name: 'Main',
        components: {
            Navbar,
            Footer
        }
    }
</script>