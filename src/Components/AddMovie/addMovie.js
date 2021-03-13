import React from 'react';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import './addMovie.scss';

const AddMovie = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <>
            <Button variant="contained" color="secondary" onClick={handleOpen}>+ add movie</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className='addMovie__modal'
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
            }}
      >
                <Fade in={open}>
                    <div className="addMovie__paper">
                        <CloseIcon onClick={handleClose} className="close" />
                        <h2 id="transition-modal-title">add movie</h2>
                        <label>title</label>
                        <input type="text" placeholder="title"></input>
                        <label>release date</label>
                        <input type="date" placeholder="select date"></input>
                        <label>movie url</label>
                        <input type="text" placeholder="movie url here"></input>
                        <label>genre</label>
                        <select>
                            <option defaultValue>select genre</option>
                            <option>1</option>
                            <option>2</option>
                        </select>
                        <label>overview</label>
                        <input type="text" placeholder="overview here"></input>
                        <label>runtime</label>
                        <input type="text" placeholder="runtime here"></input>
                        <div className="action">
                            <Button variant="outlined" color="secondary">reset</Button>
                            <Button variant="contained" color="secondary">submit</Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </>
    )
}

export default AddMovie