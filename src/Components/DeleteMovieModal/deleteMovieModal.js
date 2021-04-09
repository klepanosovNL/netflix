import React from 'react';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import { deleteMovieById } from '../../api';
import { closeModal } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import './deleteMovieModal.scss';

export default ({ }) => {
    const dispatch = useDispatch();
    const isDeleteModalOpen = useSelector(state => state.isDeleteModalOpen);
    const movie = useSelector(state => state.movieToDelete); 

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className='deleteMovie__modal'
                open={isDeleteModalOpen}
                onClose={() => dispatch(closeModal())}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isDeleteModalOpen}>
                    <div className='deleteMovie__paper'>
                        <CloseIcon onClick={() => dispatch(closeModal())} className="deleteMovie__close" />
                        <h1>delete movie</h1>
                        <p>Are you sure you want to delete this movie?</p>
                        <Button variant="contained" color="secondary" onClick={() => dispatch(deleteMovieById(movie.id))}>confirm</Button>
                    </div>
                </Fade>
            </Modal>
        </>
    )
}