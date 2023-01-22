<template>
    <div class="backdrop">
        <div class="modal" :class="{sale:theme === 'sale'}">
            <h1>{{ header }}</h1>
            <p>{{ text }}</p>
        </div>
    </div>
</template>


<script>

export default{
    props: ['header', 'text']
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
</style>