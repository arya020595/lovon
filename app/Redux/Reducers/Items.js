const initialState = {
    data: [],
    isLoading: false,
    detail: [],
    detailuser: []
}

export default Items = (state = initialState, action) => {
    switch (action.type) {

        // GET ALL ITEMS
        case 'GET_ITEMS_PENDING':
            return {

                ...state,
                isLoading: true
            }

        case 'GET_ITEMS_REJECTED':
            return {
                ...state,
                isLoading: false
            }

        case 'GET_ITEMS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                data: action.payload.data
            }

        // GET ITEM BY ID
        case 'GET_ITEMS_DETAIL_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'GET_ITEMS_DETAIL_REJECTED':
            return {
                ...state,
                isLoading: false
            }

        case 'GET_ITEMS_DETAIL_FULFILLED':
            // console.warn(action.payload.data)
            return {
                ...state,
                isLoading: false,
                detail: action.payload.data
            }

        // GET ITEM BY ID
        case 'GET_ITEMS_USERS_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'GET_ITEMS_USERS_REJECTED':
            return {
                ...state,
                isLoading: false
            }

        case 'GET_ITEMS_USERS_FULFILLED':
            // console.warn(action.payload.data)
            return {
                ...state,
                isLoading: false,
                detailuser: action.payload.data
            }

        case 'CREATE_ITEMS_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'CREATE_ITEMS_REJECTED':
            return {
                ...state,
                isLoading: false
            }

        case 'CREATE_ITEMS_FULFILLED':
            return {
                ...state,
                isLoading: false
            }

        case 'UPDATE_ITEM_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'UPDATE_ITEM_REJECTED':
            return {
                ...state,
                isLoading: false
            }

        case 'UPDATE_ITEM_FULFILLED':
            return {
                ...state,
                isLoading: false
            }

        case 'DELETE_ITEM_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'DELETE_ITEM_REJECTED':
            return {
                ...state,
                isLoading: false
            }

        case 'DELETE_ITEM_FULFILLED':
            return {
                ...state,
                isLoading: false
            }

        default:
            return state;
    }
}