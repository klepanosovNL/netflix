import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Button } from '@material-ui/core';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import './CustomModal.scss';
import { closeModal } from '../actions';
import { addMovie, editMovie } from '../../api';

const CustomModal = () => {
    const movie = useSelector(state => state.movieToEdit)
    const [id, setId] = useState(0)
    const [title, setTitle] = useState('');
    const [release_date, setReleaseDate] = useState('');
    const [runtime, setRuntime] = useState(0);
    const [poster_path, setPosterPath] = useState('');
    const [overview, setOverview] = useState('');
    const [genres, setGenres] = useState([]);
    const isEditForm = !!movie.title;
    const modalTitle= isEditForm ? "edit movie": "add movie"
    const [options, setOptions] = useState([]);
    const isModalOpen = useSelector(state => state.isModalOpen);
    const dispatch = useDispatch();

    useEffect(() => {
        setId(movie.id);
        setTitle(movie.title);
        setReleaseDate(movie.release_date);
        setRuntime(movie.runtime);
        setPosterPath(movie.poster_path);
        setOverview(movie.overview);
        setGenres(movie.genres);
        let optionList = movie.genres?.map((item) => {
            return <option key={item}>{ item }</option> 
        }) || [];

        setOptions([...optionList]);
    }, [movie])

    const onSubmit = () => {
        if (isEditForm) {
            dispatch(editMovie({title, release_date, runtime, poster_path, overview, genres, id}))

            console.log(genres)
        } else {
            dispatch(addMovie({title, release_date, runtime, poster_path, overview, genres}))
        }
    }

    return (
        <>
            <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className='addMovie__modal'
                    open={isModalOpen}
                    onClose={() => dispatch(closeModal())}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
            >
                <Fade in={isModalOpen}>
                    <div className="addMovie__paper">
                        <CloseIcon onClick={() => dispatch(closeModal())} className="close" />
                        <h2 id="transition-modal-title">{modalTitle}</h2>
                        <label>title</label>
                        <input 
                            type="text"
                            placeholder="title"
                            value={title || ''}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <label>release date</label>
                        <input 
                            type="date" 
                            placeholder="select date"
                            value={release_date || ''}
                            onChange={(e) => setReleaseDate(e.target.value)}
                        />
                        <label>movie url</label>
                        <input 
                            type="text" 
                            placeholder="movie url here"
                            value={poster_path || ''}
                            onChange={(e) => setPosterPath(e.target.value)}
                        />
                        <label>genre</label>
                        <select onChange={(e) => setGenres(genres => [...genres, ...e.target.value])}>
                            <option defaultValue>select genre</option>
                            { options }
                            
                        </select>
                        <label>overview</label>
                        <input 
                            type="text" 
                            placeholder="overview here"
                            value={overview || ''}
                            onChange={(e) => setOverview(e.target.value)}
                        />
                        <label>runtime</label>
                        <input 
                            type="text" 
                            placeholder="runtime here"
                            value={runtime || ''}
                            onChange={(e) => setRuntime(Number(e.target.value))}
                        />
                        <div className="action">
                            <Button variant="outlined" color="secondary" onClick={() => dispatch(closeModal())}>reset</Button>
                            <Button variant="contained" color="secondary" onClick={onSubmit}>submit</Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </>
    )
}

export default CustomModal;