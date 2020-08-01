const addUsers = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USERS':
            return {...state, users : action.payload}
        case 'ADD_POSTS':
            return {...state, posts: action.payload}
    }

    return state
}

export default addUsers;
