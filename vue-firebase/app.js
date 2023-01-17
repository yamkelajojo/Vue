const app = Vue.createApp({
    // data, functions
    //template: '<h2>I am the template</h2>'
    data(){
        return{
            showbooks: true,
            title: 'Things Change',
            author: 'Okonkwo',
            age: 126,
            x: 0,
            y: 0
        }
    },

    //we place functions or methods for any component here
    methods: {
        changeTitle(whatever){
            this.title = whatever
        },

        toggleBooks(){
            this.showbooks = !this.showbooks
        },

        handleEvent(e, data){
            console.log(e, e.type)
            if(data != null){
                console.log(data)
            }
        },

        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')