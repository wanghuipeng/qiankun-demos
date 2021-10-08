import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI);


let instance = null;

export async function bootstrap() {
    console.log('react app bootstraped');
}

function singleRender() {
    instance = new Vue({
        router,
        store,
        render: (h) => h(App)
    }).$mount('#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    singleRender();
}

function render(props = {}) {
    instance = new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')

}

export async function mount(props) {
    console.log('props from main framework', props);
    render(props);
}



export async function unmount() {
    instance.$destroy();
    instance.$el.innerHTML = "";
    instance = null;
}