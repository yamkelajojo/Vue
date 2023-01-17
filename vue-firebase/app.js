const app = Vue.createApp({
    // data, functions
    //template: '<h2>I am the template</h2>'
    data(){
        return{
            showbooks: true,
            title: 'Things Change',
            author: 'Okonkwo',
            age: 126
        }
    },

    //we place functions or methods for any component here
    methods: {
        changeTitle(whatever){
            this.title = whatever
        },

        toggleBooks(){
            this.showbooks = !this.showbooks
        }
    }
})

app.mount('#app')