import axios from "axios";

// GET ALL ITEM
export const getItems = () => {
    return {
        type: 'GET_ITEMS',
        payload: axios.get('http://192.168.43.108:3333/api/v1/items/')
    }
}

// GET ITEM DETAIL
export const getItemsDetail = (body) => {
    return {
        type: 'GET_ITEMS_DETAIL',
        payload: axios.get(`http://192.168.43.108:3333/api/v1/items/${body}`),
    }
}

//  GET ITEM BASED ON USER
export const getItemsUsers = (body) => {
    return {
        type: 'GET_ITEMS_USERS',
        payload: axios.get(`http://192.168.43.108:3333/api/v1/items/user/12`),
    }
}

// CREATE ITEMS
export const createItems = (body) => {
    return {
        type: 'CREATE_PRODUCTS',
        payload: axios({
            method: 'post',
            url: 'http://192.168.43.108:3333/api/v1/items/',
            data: body
        })
    }
}

export const UpdateItems = (body, data) => {
    return {
        type: 'UPDATE_PRODUCTS',
        payload: axios({
            method: 'post',
            url: `http://192.168.43.108:3333/api/v1/items/${body}`,
            data: data
        })
    }
}

// DELETE ITEMS
export const deleteItems = (body) => {
    return {
        type: 'DELETE_PRODUCTS',
        payload: axios({
            method: 'delete',
            url: `http://192.168.43.108:3333/api/v1/items/${body}`,
        })
    }
}