import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Button } from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';
import CloseIcon from '@material-ui/icons/Close';
import './CustomModal.scss';
import { closeModal } from '../actions';
import { addMovie, editMovie } from '../../api';
import Modal from 'react-modal';
import TextField from '@material-ui/core/TextField';

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

    const validationSchema = yup.object({
        title: yup
            .string()
            .required('required'),
        release_date: yup
            .string()
            .required('required'),
        poster_path: yup
            .string()
            .required('required'),
        overview: yup
            .string()
            .required('required'),
        runtime: yup
            .number()
            .required('required'),
    });

    const formik = useFormik({
        initialValues: {
            title: title || '',
            release_date: release_date || '',
            poster_path: poster_path || '',
            overview: overview || '',
            runtime: runtime || '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            if (isEditForm) {
                dispatch(editMovie({title, release_date, runtime, poster_path, overview, genres, id}))
    
            } else {
                dispatch(addMovie({title, release_date, runtime, poster_path, overview, genres}))
            }
        },
    });

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          maxWidth              : '500px',
          width                 : '100%',
          padding               : '0',
          background            : 'none' 
        }
    };

    // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
    Modal.setAppElement('#root')

    return (
        <> 
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => {
                    formik.resetForm();
                    dispatch(closeModal());
                }}
                style={customStyles}
            >
                <div className='addMovie__modal'>
                    <form onSubmit={(formik.handleSubmit)}>
                        <div className="addMovie__paper">
                            <CloseIcon onClick={() => {
                                    formik.resetForm();
                                    dispatch(closeModal());
                            }} className="close" />
                            <h2 id="transition-modal-title">{modalTitle}</h2>
                            <label>title</label>
                            <TextField 
                                type="text"
                                placeholder="title"
                                value={title || formik.values.title}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                    formik.handleChange();
                                }}
                                error={formik.touched.title && Boolean(formik.errors.title)}
                                helperText={formik.touched.title && formik.errors.title}
                            />
                            <label>release date</label>
                            <TextField 
                                type="date" 
                                placeholder="select date"
                                value={release_date || formik.values.release_date}
                                onChange={(e) => {
                                    setReleaseDate(e.target.value);
                                    formik.handleChange();
                                }}
                                error={formik.touched.release_date && Boolean(formik.errors.release_date)}
                                helperText={formik.touched.release_date && formik.errors.release_date}
                            />
                            <label>movie url</label>
                            <TextField 
                                type="text" 
                                placeholder="movie url here"
                                value={poster_path || formik.values.poster_path}
                                onChange={(e) => {
                                    setPosterPath(e.target.value);
                                    formik.handleChange();
                                }}
                                error={formik.touched.poster_path && Boolean(formik.errors.poster_path)}
                                helperText={formik.touched.poster_path && formik.errors.poster_path}
                            />
                            <label>genre</label>
                            <select onChange={(e) => setGenres(genres => [...genres, ...e.target.value])}>
                                { options }
                            </select>
                            <label>overview</label>
                            <TextField 
                                type="text" 
                                placeholder="overview here"
                                value={overview || formik.values.overview}
                                onChange={(e) => {
                                    setOverview(e.target.value);
                                    formik.handleChange();
                                }}
                                error={formik.touched.overview && Boolean(formik.errors.overview)}
                                helperText={formik.touched.overview && formik.errors.overview}
                            />
                            <label>runtime</label>
                            <TextField
                                type="text" 
                                placeholder="runtime here"
                                value={runtime || formik.values.runtime}
                                onChange={(e) => {
                                    setRuntime(Number(e.target.value));
                                    formik.handleChange();
                                }}
                                error={formik.touched.runtime && Boolean(formik.errors.runtime)}
                                helperText={formik.touched.runtime && formik.errors.runtime}
                            />
                            <div className="action">
                                <Button variant="outlined" color="secondary" onClick={() => {
                                    formik.resetForm();
                                    dispatch(closeModal());
                                }}>reset</Button>
                                <Button variant="contained" color="secondary" type="submit">submit</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    )
}

export default CustomModal