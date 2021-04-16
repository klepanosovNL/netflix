import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteMovieModal from '../DeleteMovieModal';
import { openEditModal, openDeleteModal } from '../actions';
import { useDispatch } from 'react-redux';
import './movieSettings.scss';

const MovieSettings = ({movie}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpenDeleteModal, setDeleteModal] = useState(false);
    const dispatch = useDispatch();
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        event?.stopPropagation();
        setAnchorEl(null);
    };

    return (
        <>
            <DeleteMovieModal isOpen={isOpenDeleteModal} toggle={() => setDeleteModal(false)} />
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className="movie__edit"
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={() => dispatch(openEditModal(movie))}>edit</MenuItem>
                <MenuItem onClick={() => dispatch(openDeleteModal(movie))}>delete</MenuItem>
            </Menu>
        </>
    )
}

export default MovieSettings