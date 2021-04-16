const initialState = {
    movies: [],
    isModalOpen: false,
    movieToEdit: {},
    isDeleteModalOpen: false,
    currentFilter: [],
    currentSorts: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MOVIES_LOADED':
        case 'ADD_MOVIE':
        case 'UPDATE_MOVIE':
        case 'DELETE_MOVIE':
            return {
                ...state,
                movies: [...action.movies]
            }
        case 'OPEN_EDIT_MODAL': 
            return {
                ...state,
                isModalOpen: action.isModalOpen,
                movieToEdit: action.movie
            }
        case 'OPEN_ADD_MODAL':
        case 'CLOSE_MODAL':
            return {
                ...state,
                isModalOpen: action.isModalOpen,
                isDeleteModalOpen: action.isDeleteModalOpen,
                movieToEdit: {}
            }

        case 'OPEN_DELETE_MODAL': 
        return {
            ...state,
            isDeleteModalOpen: action.isDeleteModalOpen,
            movieToDelete: action.movie
        }

        case 'SET_FILTER': 
        return {
            ...state,
            currentFilter: [...action.filters]
        }
        case 'SET_SORT':
            return {
                ...state,
                currentSort: action.sorts
            }

        default: 
            return state;    
    }
}

export default reducer;