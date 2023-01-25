<template>
    <div class="backdrop" @click="closeModal">
        <div class="modal" :class="{sale:theme === 'sale'}"> <!--is equal to a boolean, if its true izovela, if its not true ayizuvela-->
            <h1>{{ header }}</h1>
            <p>{{ text }}</p>
        </div>
    </div>
</template>


<script>

export default{
    //"registering it"
    props: ['header', 'text', 'theme'],

    methods: {
        closeModal(){
            //creating custom event to be used in App.Vue js
            //like binding in a way, makes the component in App.vue listen to the event
            // makes it to be used like u@click, but it will be called @close in app, then calls function
            this.$emit('close')
        }
    }
}

</script>


<style>
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}

.backdrop {
    top: 0;
    left:0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}

h1 {
    border-bottom: 1px solid rgb(221, 221, 221);
    display: inline-block;
    padding-bottom: 10px;
    color: rgb(11, 124, 134);
}

.modal p{
    font-style: normal;
}

.modal.sale{
    background: crimson;
    color: white;
}

.modal.sale h1{
    color: white;
}

</style>