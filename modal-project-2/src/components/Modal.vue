<template>
    <div class="backdrop" @click.self="closeModal"> <!-- la . self makes it work on backdrop only and not on anything else inside th element, cause if akekho it will still trigger after clicking on Modal-->
        <div class="modal" :class="{sale:theme === 'sale'}"> <!--is equal to a boolean, if its true izovela, if its not true ayizuvela-->
            <slot></slot>
            <div class="actions">
                <slot name = "links"></slot>
            </div>
        </div>
    </div>
</template>


<script>

export default{
    //"registering it"
    props: ['theme'],

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

.modal .actions{
    text-align:center;
    margin: 30px 0 10px 0;
}

.modal .actions a{
    color: #333;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin:10px;
}

.modal.sale{
    background: crimson;
    color: white;
}

.modal.sale .actions h1{
    color: white;
}

.modal.sale .actions a{
    color: white;
}

.modal.sale h1{
    color: white;
}
</style>