const app = Vue.createApp({
    // data, functions
    //template: '<h2>I am the template</h2>'
    data(){
        return{
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/250px-S3_Splatfest_Logo.png', isFav: true},
                {title: 'Art of war', author: 'smart guy', img: 'assets/Coat_of_arms_of_the_Soviet_Union_(1956–1991).svg.png', isFav: false},
                {title: 'Life of Dojo', author: 'DojoMyNigga', img: 'assets/Logo_Suprema_Corte_de_Justicia_de_la_Nación_México.svg.png', isFav: true}
            ]
        }
    },

    //we place functions or methods for any component here
    methods: {
        changeTitle(whatever){
            this.title = whatever
        },

        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },

        toggleFav(book){
            book.isFav = !book.isFav
        }
    },

    //Compute Porperty: a way to define a data property inside our componetsthat depends on other data that we have inside that component
    computed:{
        filteredBooks(){
            return this.books.filter((book)=> book.isFav)
        }
    }
})

app.mount('#app')