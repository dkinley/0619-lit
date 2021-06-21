import React, { useEffect, useState } from 'react';
// import { Link, navigate } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const Details = (props) => {
    const [ author, setAuthor ] = useState({});
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/lit/' + props.id) // postman verified url
            .then((res) => {
                console.log(res.data); //.then gives response object which is commonly referred to as res
                setAuthor(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        }, [props.id ]);

    return (
        <div>
            <h1>Author Details</h1>
            <table>
                <tr>
                <td>
                    Name:
                </td>
                <td>
                    { author.name }
                </td>
                </tr>
                <tr>
                <td>
                    Type:
                </td>
                <td>
                    { author.type }
                </td>
                </tr>
                <tr>
                <td>
                    Description:
                </td>
                <td>
                    { author.description }
                </td>
                </tr>
                <tr>
                <td>
                    Favorite:
                </td>
                <td>
                    { 
                        author.favorite ?
                        <span>Yes</span>
                        :<span>No</span> 
                    }
                </td>
                </tr>
                <tr>
                <td>
                    Skills:
                </td>
                <td>
                    { author.skills }
                </td>
                </tr>
            </table>
            <DeleteButton _id={ author._id }/>
        </div>
    )
};

export default Details;