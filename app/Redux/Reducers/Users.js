const initialState = {
    data: [],
    isLoading: false,
    detail: []
}
// this.setState({
//   // contacts: {
//   //   number
//   // }
// })
export default Items = (state = initialState, action) => {
    switch (action.type) {

        // GET ALL USERS
        case 'GET_USERS_PENDING':
            return {
                isLoading: true
            }

        case 'GET_USERS_REJECTED':
            return {
                isLoading: false
            }

        case 'GET_USERS_FULFILLED':
            return {
                isLoading: false,
                data: action.payload.data
            }

        // GET PRODUCT BY ID
        case 'GET_USERS_DETAIL_PENDING':
            return {
                isLoading: true
            }

        case 'GET_USERS_DETAIL_REJECTED':
            return {
                isLoading: false
            }

        case 'GET_USERS_DETAIL_FULFILLED':
            // console.warn(action.payload.data)
            return {
                isLoading: false,
                detail: action.payload.detail
            }

        case 'CREATE_USERS_PENDING':
            return {
                isLoading: true
            }

        case 'CREATE_USERS_REJECTED':
            return {
                isLoading: false
            }

        case 'CREATE_USERS_FULFILLED':
            return {
                isLoading: false
            }

        default:
            return state;
    }
}