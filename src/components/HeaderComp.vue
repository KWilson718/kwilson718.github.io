<script>
    import navigationMethods from '@/mixins/navigation.js';

    export default{
        name: 'HeaderComponent',
        methods: {
            ...navigationMethods.methods,
        }
    }
</script>

<template>
    <div id="navbarContainer" class="navbar">
        <div id="leftSide">
            <img id="logo" src="../assets/favicon/android-chrome-512x512.png" alt="Current Logo" @click="navigateTo('/')">
        </div>
        <div id="middle">
            <div class="navButton" @click="navigateTo('/')">
                <h1 class="navButtonText">Home</h1>
            </div>
            <div class="navButton" @click="navigateTo('/about')">
                <h1 class="navButtonText">About</h1>
            </div>
            <div class="navButton" @click="navigateTo('/experience')">
                <h1 class="navButtonText">Experience</h1>
            </div>
            <div class="navButton" @click="navigateTo('/projects')">
                <h1 class="navButtonText">Projects</h1>
            </div>
            <div class="navButton" @click="navigateTo('/resume')">
                <h1 class="navButtonText">Resume</h1>
            </div>
            <div class="navButton" @click="navigateTo('/misc')">
                <h1 class="navButtonText">Misc</h1>
            </div>
        </div>
        <div id="rightBumper"></div>
    </div>
    
</template>

<style scoped>
    /* Formats size of each section of the bar */
    #navbarContainer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color:gray;
        z-index: 10;
    }
    #leftSide{
        flex: 1;
        display: flex;
        align-items: left;
        justify-items: flex-start;
    }
    #middle{
        flex: 3;
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #rightBumper{
        flex: 1;
    }

    /* Formatting the Main Nav Buttons */
    .navButton{
        flex: 1;
        cursor: default;
    }
    .navButtonText{
        font-size: 1.12rem;
    }

    /* Handles sizing of the logo image to the top left */
    #logo{
        padding: .25rem;
        padding-top: .35rem;
        margin-left: .25rem;
        width: 3rem;
        height: 3rem;
    }
</style>