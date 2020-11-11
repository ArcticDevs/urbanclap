<template>

<div class="container border">
    <div>
        <div id="flexbox">
            
            <router-link to="/" id="box">
                <img src="/haircut.png" alt="" class="mt-2 mb-2">
                <p>Hair Cut at home</p>
            </router-link>
            <router-link to="/" id="box">
                <img src="/salon.png" alt="" class="mt-2 mb-2">
                <p>Salon At Home</p>
            </router-link>
            <router-link to="/" id="box">
                <img src="/cleaning.png" alt="" class="mt-2 mb-2">
                <p>Cleaning & Disinfection</p>
            </router-link>
            <router-link to="/" id="box">
                <img src="/repair.png" alt="" class="mt-2 mb-2">
                <p>Appliance Repair</p>
            </router-link>
            <router-link to="/" id="box">
                <img src="/paint.png" alt="" class="mt-2 mb-2">
                <p>Painter</p>
            </router-link>
            <router-link to="/" id="box">
                <img src="/electrician.png" alt="" class="mt-2 mb-2">
                <p>Eletricians</p>
            </router-link>
        </div>
                <div id="flexbox">
            <router-link to="/"  id="box">
                <img src="/plumber.png" alt="" class="mt-2 mb-2">
                <p>Plumbers</p>
            </router-link>
            <router-link to="/" id="box">
                <img src="/carpenter.png" alt="" class="mt-2 mb-2">
                <p>Capenters</p>
            </router-link>
            <router-link to="/" id="box">
                <img src="/massegeMen.png" alt="" class="mt-2 mb-2">
                <p>Massage For Men</p>
            </router-link>
            <router-link to="/" id="box">
                <img src="/pest.png" alt="" class="mt-2 mb-2">
                <p>Pest Control</p>
            </router-link>
            <router-link to="/" id="box">
                <img src="/massegeW.png" alt="" class="mt-2 mb-2">
                <p>Massage For Women</p>
            </router-link>
            <router-link to="/" id="box">
                <img src="/geyser.png" alt="" class="mt-2 mb-2">
                <p>Geyser Service</p>
            </router-link>
        </div>
    </div>
</div>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
#flexbox{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;

}
 img{
     height: 25px;
     width: 25px;
 }

 /* router-link{
     width: 160px;
     height: 112px;
 } */

 #box{
     margin-top: 30px;
     margin-bottom: 36px;
     height: 90px;
     width: 125px;
     text-decoration: none;
     color: #212121;
     /* background-color: grey; */

 }
 router-link#box :hover{
     background-color: #dddddd;
 }
</style>