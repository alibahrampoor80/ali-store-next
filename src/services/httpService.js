import axios from "axios";
import {baseUrl} from "../../app/constants/api";

const app = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
    withCredentials: true,

})

const http = {
    get: app.get,
    post: app.post,
    put: app.put,
    delete: app.delete
}
export default http