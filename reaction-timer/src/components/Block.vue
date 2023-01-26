<template>
  <div class="block" v-if="showBlock">
    click me
  </div>
</template>

<script>
export default {
    props: ["delay"],

    data(){
        return{
            showBlock: false
        }
    },

    //is a lifecycle hook. when something has been mounted to the DOM
    mounted(){
        console.log("component mounted")
        setTimeout(()=> {
            this.showBlock = true
            console.log(this.delay)
        }, this.delay) //this second delay is the ixesha eliqale lihambe before it fires the function in setTimeout
    },

    //lifecycle hook. this function fires when any data inside our component has been updated.
    updated(){
        console.log("component update")
        console.log(this.showBlock)
    },

    unmounted(){
        console.log("component unmounted")
    }
}

</script>

<style>
    .block{
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>