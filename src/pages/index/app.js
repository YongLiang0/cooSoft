import layout from './index.vue';
import requireComponent from "@/components/index.js";

/**
 * 引入scss
 */
import "./index.scss";

/**
 * 引入组件
 */
requireComponent([
    "headerPc"
]);

new Vue({
    el: '#app',
    components: {
        layout
    },
    template: '<layout/>'
})