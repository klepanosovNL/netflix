import React from 'react';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import './deleteMovieModal.scss';

export default class DeleteMovieModal extends React.Component {
    render() {
        const [open, setOpen] = React.useState(false);

        const handleOpen = () => {
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
        };
        
        return (
            <>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className='deleteMovie__modal'
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                }}
          >
                    <Fade in={open}>
                        <CloseIcon onClick={handleClose} className="close" />
                        <h1>delete movie</h1>
                        <p>Are you sure you want to delete this movie?</p>
                        <Button variant="contained" color="secondary" onClick={handlClose}>confirm</Button>
                    </Fade>
                </Modal>
            </>
        )
    }
}