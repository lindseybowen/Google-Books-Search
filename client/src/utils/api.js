import axios from "axios"
export default {
    googleApi:function(title){
        return axios.get("/api/googleBooks/"+title)
    }
}

