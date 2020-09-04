<template>
    <div class="header-pc" :class="isFixed ? 'fixed' : ''">
        <div class="container">
            <div class="logo"> <span>COOSOFT</span>服务</div>
            <div class="nav">
                <ul>
                    <li v-for="(item, index) in navList" :key="index">
                        <a :class="item.isCurrent ? 'active' : ''" :href="item.path">{{item.name}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navList : [
                {
                    name : '首页',
                    path : '/index.html',
                    isFixed : false,
                },
                {
                    name : '解决方案',
                    path : '/product.html',
                    isFixed : true
                },
                {
                    name : '定制产品',
                    path : '/about_us.html',
                    isFixed : true
                },
                {
                    name : '联系我们',
                    path : '/about_us.html',
                    isFixed : true
                }
            ],
            isFixed : false
        }
    },

    mounted() {
        this.initNavList();
    },

    methods : {
        
        initNavList(){
            this.navList.forEach((item) => {
                if(item.path == location.pathname){
                    this.isFixed = item.isFixed;
                }
            });
        },

        onClickSwitchMenu(){
            this.isShow = !this.isShow;
        }
    },
}
</script>
