const moviesLoaded = (newMovies) => {
    return {
        type: 'MOVIES_LOADED',
        movies: newMovies
    }
}

const addNewMovie = (movies) => {
    return {
        type: 'ADD_MOVIE',
        movies
    }
}

const updateMovie = (movies) => {
    return {
        type: 'UPDATE_MOVIE',
        movies
    }
}

const deleteMovie = (movies) => {
    return {
        type: 'DELETE_MOVIE',
        movies
    }
}

const openEditModal = (movie) => {
    return {
        type: 'OPEN_EDIT_MODAL',
        isModalOpen: true,
        movie
    }
}

const openDeleteModal = (movie) => {
    return {
        type: 'OPEN_DELETE_MODAL',
        isDeleteModalOpen: true,
        movie
    }
}

const openAddModal = () => {
    return {
        type: 'OPEN_ADD_MODAL',
        isModalOpen: true
    }
}

const closeModal = () => {
    return {
        type: 'CLOSE_MODAL',
        isModalOpen: false,
        isDeleteModalOpen: false
    }
}

const setFilter = (filter) => {
    return {
        type: 'SET_FILTER',
        filters: [filter]
    }
}

const setSort = (sortItem) => {
    return {
        type: 'SET_SORT',
        sorts: sortItem
    }
}



export {moviesLoaded, setFilter, updateMovie, openEditModal, openAddModal, closeModal, addNewMovie, deleteMovie, openDeleteModal, setSort }