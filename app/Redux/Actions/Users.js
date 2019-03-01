import axios from "axios";

// GET ALL PRODUCTS
export const getUsers = () => {
    return {
        type: 'GET_USERS',
        payload: axios.get('http://192.168.43.108:3333/api/v1/users/')
    }
}

// GET PRODUCTS DETAIL
export const getUsersDetail = (body, token) => {
    // axios.defaults.headers.common['Authorization'] = `Bearer +${token}`;
    return {
        type: 'GET_USERS_DETAIL',
        payload: axios.get(`http://192.168.43.108:3333/api/v1/users/${body}`),
        
    }
}

// CREATE USERS
export const createUsers = (body) => {
    return {
        type: 'CREATE_USERS',
        payload: axios({
            method: 'post',
            url: 'http://192.168.43.108:3333/api/v1/users/',
            // Body ini nanti untuk memasukan form ke url
            data: body
        })
    }
}