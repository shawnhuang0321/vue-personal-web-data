import Vue from 'vue'
import VueRouter from 'vue-router'



import Banner from '@/components/Banner'
import Main from '@/components/Main'

import About from '@/components/pages/About'
import Skills from '@/components/pages/Skills'
import Works from '@/components/pages/Works'
import Contact from '@/components/pages/Contact'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            name: 'index',
            path: '/',
            component: Banner
        },
        {
            name: 'Main',
            path: '/main',
            component: Main,
            children: [
                {
                    name: 'About',
                    path: '',
                    component: About
                },
                {
                    name: 'Skills',
                    path: 'skill',
                    component: Skills
                },
                {
                    name: 'Works',
                    path: 'work',
                    component: Works
                },
                {
                    name: 'Contact',
                    path: 'contact',
                    component: Contact
                },
            ]
        }
    ]
})