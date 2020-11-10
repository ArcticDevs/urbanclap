<template>

<div class="container border">
    <div>
        <div id="flexbox">
            
            <router-link to="/">
                <img src="/haircut.png" alt="" srcset="">
                <p>Hair Cut at home</p>
            </router-link>
            <router-link to="/">
                <img src="/salon.png" alt="" srcset="">
                <p>Salon At Home</p>
            </router-link>
            <router-link to="/">
                <img src="/cleaning.png" alt="" srcset="">
                <p>Cleaning & Disinfection</p>
            </router-link>
            <router-link to="/">
                <img src="/repair.png" alt="" srcset="">
                <p>Appliance Repair</p>
            </router-link>
            <router-link to="/">
                <img src="/paint.png" alt="" srcset="">
                <p>Painter</p>
            </router-link>
            <router-link to="/">
                <img src="/electrician.png" alt="" srcset="">
                <p>Eletricians</p>
            </router-link>
        </div>
                <div id="flexbox">
            <router-link to="/">
                <img src="/plumber.png" alt="" srcset="">
                <p>Plumbers</p>
            </router-link>
            <router-link to="/">
                <img src="/carpenter.png" alt="" srcset="">
                <p>Capenters</p>
            </router-link>
            <router-link to="/">
                <img src="/massegeMen.png" alt="" srcset="">
                <p>Massage For Men</p>
            </router-link>
            <router-link to="/">
                <img src="/pest.png" alt="" srcset="">
                <p>Pest Control</p>
            </router-link>
            <router-link to="/">
                <img src="/massegeW.png" alt="" srcset="">
                <p>Massage For Women</p>
            </router-link>
            <router-link to="/">
                <img src="/geyser.png" alt="" srcset="">
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

 router-link{
     width: 160px;
     height: 112px;
 }
</style>