<template>
    <div class="wrap_square">
        <div class="square">
            <div class="item">
                <img src="./../assets/devServer-headers.png" alt="">
            </div>
            <div class="item">
                <img src="./../assets/directive-use.png" alt="">
            </div>
            <div class="item">
                <img src="./../assets/directive.png" alt="">
            </div>
            <div class="item">
                <img src="./../assets/useRoute-2.png" alt="">
            </div>
            <div class="item">
                <img src="./../assets/useRoute-3.png" alt="">
            </div>
            <div class="item">
                <img src="./../assets/useRoute.png" alt="">
            </div>
        </div>
    </div>
    
</template>
<script>
export default{
    name:'square'
}
</script>
<style lang="less" scoped>
@item-width:300px;
@keyframes identifier {
    from{
        transform: rotateX(0) rotateY(0);
    }
    to{
        transform: rotateX(360deg) rotateY(360deg);
    }
}
.wrap_square{
    perspective: 500000px;
}
.square{
    transform-origin: 50% 50%;
    animation: identifier 20s linear infinite;
    width: @item-width;
    height: @item-width;
    position: relative;
    transform-style: preserve-3d;
    .item{
        width: @item-width;
        height: @item-width;
        position: absolute;
        color: white;
        img{
            width: 100%;
            height: 100%;
        }
    }
    //前
    .item:nth-of-type(1){
        background-color: rgb(23, 63, 45);
        transform: translateZ(calc(~"@{item-width}/2"));
    }
    //后
    .item:nth-of-type(2){
        background-color: green;
        transform: translateZ(calc(~"-@{item-width}/2"));
    }
    //左
    .item:nth-of-type(3){
        background-color: red;
        transform: rotateY(90deg) translateZ(calc(~"-@{item-width}/2"));
    }
    //右
    .item:nth-of-type(4){
        background-color: black;
        transform: rotateY(90deg) translateZ(calc(~"@{item-width}/2"));
    }
    //上
    .item:nth-of-type(5){
        background-color: orange;
        transform: rotateX(90deg) translateZ(calc(~"@{item-width}/2"));
    }
    //下
    .item:nth-of-type(6){
        background-color: rgb(34, 23, 135);
        transform: rotateY(180deg) rotateX(270deg) translateZ(calc(~"@{item-width}/2"));
    }
}
</style>