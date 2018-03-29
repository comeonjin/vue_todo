import Vue from 'vue'
import App from './components/app.vue'
import store from './store'


const container = document.createElement('div')
document.body.appendChild(container)

new Vue({
    render: (h) => h(App),
    store
}).$mount(container)