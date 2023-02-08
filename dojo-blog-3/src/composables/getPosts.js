import {ref} from 'vue'

const getPosts = () => {

    const posts = ref([])

    const error = ref(null)

    const load = async () => {
        try{
            let data = await fetch('http://localhost:3000/posts')
            if (!data.ok){ //checks to see if data is not correct
                throw Error('no data available')
            }
            posts.value = await data.json() 
        }
        catch(err){ //this "err" is the one thrown in Error pha kuThrowuwa iError
            error.value = err.message
            console.log(error.value)
        }
    }

    return {posts, error, load}

}

export default getPosts