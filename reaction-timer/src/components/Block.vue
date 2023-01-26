<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    click me
  </div>
</template>

<script>
export default {
    props: ["delay"],

    data(){
        return{
            showBlock: false,
            timer: null,
            reactionTime: 0,
        }
    },

    //is a lifecycle hook. when something has been mounted to the DOM
    mounted(){
        console.log("component mounted")
        setTimeout(()=> {
            this.showBlock = true
            this.startTimer()
            console.log(this.delay)
        }, this.delay) //this second delay is the ixesha eliqale lihambe before it fires the function in setTimeout
    },

    methods:{
        startTimer(){
            this.timer = setInterval(() => {
                this.reactionTime += 10
            },10) // that 10 means that the function will run every 10ms
        },

        stopTimer(){
            clearInterval(this.timer) //stop the increase of timer
            console.log(this.reactionTime+"ms")
            this.$emit('end', this.reactionTime)
        }

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