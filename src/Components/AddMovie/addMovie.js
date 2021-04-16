import React from 'react';
import { Button } from '@material-ui/core';
import {openAddModal} from '../actions';
import {useDispatch} from 'react-redux';

const AddMovie = () => {
    const dispatch = useDispatch();
    return (
        <>
            <Button variant="contained" color="secondary" onClick={() => dispatch(openAddModal())}>+ add movie</Button>
        </>
    )
}

export default AddMovie