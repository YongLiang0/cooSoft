<template>
    <div class="header-mobile">
        <div class="header" :class="isShowNav ? 'fixed' : ''">
        </div>
        <div class="nav" :class="isShowNav ? 'show' : ''">
            <ul>
                <li v-for="(item, index) in navList" :key="index">
                    <a :href="item.path">{{item.name}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShowNav : false,
            navList : [
                {
                    name : '首页',
                    path : '/index/mobile.html'
                },
                {
                    name : '产品与服务',
                    path : '/product/mobile.html'
                },
                {
                    name : '关于我们',
                    path : '/about_us/mobile.html'
                }
            ],
        }
    },

    mounted() {
        this.init();
    },

    methods : {
        
        init(){

        },

        onClickShowNav(){
            this.isShowNav = !this.isShowNav;
        }
    },
}
</script>