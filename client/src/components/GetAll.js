import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const GetAll = (props) => {
    const [ allAuthors, setAllAuthors ] = useState([]); // put in an array, as there is an array of objects expected, see postman which gets back and array of objects
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/lit") //use the same string that works for a 'get' in postman
            .then((res) => {
                console.log(res.data); //this is just checking that the data came back correctly in the console
                //need state to hold onto the data we just called, do this above with const all
                setAllAuthors(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <th>Authors Info</th>
                    <th>Actions Available</th>
                </thead>
                <tbody>
                    {
                        allAuthors.map((author, index) => (
                        <tr>
                            <td>
                                <Link to={ `/lit/${author._id}`} >{author.name} </Link>
                            </td>
                            <td>
                            <DeleteButton _id={ author._id }/>
                                <Link to={ `/lit/${author._id}/edit`}><button>Edit</button></Link>
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
};

export default GetAll;