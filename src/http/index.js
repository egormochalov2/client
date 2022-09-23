import axios from "axios";

const $host = axios.create({
    baseURL: 'http://95.214.62.73:7000',
    responseType: "json",
})

const $authHost = axios.create({
    baseURL: 'http://95.214.62.73:7000',
    responseType: "json",
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}
