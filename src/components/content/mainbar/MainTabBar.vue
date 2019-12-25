<template>
    <tab-bar>
        <tab-bar-item path="/home">
            <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
            <img slot="item-icon-active" src="@/assets/img/tabbar/home-active.svg" alt="">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/ad">
            <img slot="item-icon" src="@/assets/img/tabbar/ad.svg" alt="">
            <img slot="item-icon-active" src="@/assets/img/tabbar/ad-active.svg" alt="">
            <div slot="item-text">广告</div>
        </tab-bar-item>
        <tab-bar-item path="/database">
            <img slot="item-icon" src="@/assets/img/tabbar/database.svg" alt="">
            <img slot="item-icon-active" src="@/assets/img/tabbar/database-active.svg" alt="">
            <div slot="item-text">资料库</div>
        </tab-bar-item>
        <tab-bar-item path="/account">
            <img slot="item-icon" src="@/assets/img/tabbar/account.svg" alt="">
            <img slot="item-icon-active" src="@/assets/img/tabbar/account-active.svg" alt="">
            <div slot="item-text">账号</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from "@/components/common/tabbar/Tabbar";
    import TabBarItem from "@/components/common/tabbar/TabBarItem";

    export default {
        name: "MainTabBar",
        components:{
            TabBarItem,
            TabBar
        }
    }
</script>

<style scoped>

</style>