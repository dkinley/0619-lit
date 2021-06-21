import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteButton = (props) => {
    const [ authorId, setAuthorId ] = useState (props.id);
    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/api/lit/${ authorId }`)
            .then((res) => {
                console.log(res.data);
                // setAllSongs(allSongs.filter((songElement) => songElement._id !== songID))
                navigate('/lit');
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <button onClick={ () => deleteAuthor(props._id) }>Delete</button>
    )
}

export default DeleteButton;