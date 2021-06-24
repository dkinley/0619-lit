import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const Edit = (props) => {
    const [ name, setName ] = useState("");
    const [ type, setType ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ favorite, setFavorite ] = useState("");
    const [ skills, setSkills ] = useState("");
    const [ errs, setErrs ] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/lit/' + props.id) // postman verified url
            .then((res) => {
                console.log(res.data); 
                let author = res.data;
                setName(author.name); //this is saying set licensed to song license
                setType(author.type);
                setDescription(author.description);
                setFavorite(author.favorite);
                setSkills(author.skills);
            })
            .catch((err) => {
                console.log(err);
            });
        }, [props.id ]);

    const submitHandler = (e) => {
        e.preventDefault(); //bring in the event with 'e' and prevent default refresh
        axios.put("http://localhost:8000/api/lit/" + props.id, {
            name: name,
            type: type,
            description: description,
            favorite: favorite,
            skills: skills,

            }) //axios sends data, use postman url, add .then, .catch
            .then((res) => {
                if(res.data.errors) {
                    console.log(res.data.errors)
                    setErrs(res.data.errors);
                }
                else {
                    console.log(res.data)
                    navigate("/lit/" + props.id); //this takes the :id via props so after editing user is now on the details
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1>Edit Author</h1> 
            <form onSubmit={submitHandler}>
                <div>
                    <label> Name: </label>
                    <input type="text"
                    name="title"
                    value={name}
                    onChange={ (e) => setName( e.target.value ) }
                    />
                    {
                        errs.name ?
                            <span className="error-text">{errs.name.message}</span>
                            : null
                    }
                </div>
                <div>
                    <label> Type: </label>
                    <input type="text"
                    name="type"
                    value={type}
                    onChange={ (e) => setType( e.target.value ) }
                    />
                    {
                        errs.type ?
                        <span className="error-text">{errs.type.message}</span>
                            : null
                    }
                </div>
                <div>
                    <label> Description: </label>
                    <input type="text"
                    name="description"
                    value={description}
                    onChange={ (e) => setDescription( e.target.value ) }
                    />
                    {
                        errs.description ?
                        <span className="error-text">{errs.description.message}</span>
                            : null
                    }
                </div>
                    <div>
                        <input type="checkbox"
                        name="favorite"
                        checked={favorite}
                        onChange={ () => setFavorite( !favorite ) }
                        />
                    <label> Favorite? </label>
                </div>
                <div>
                    <label> Skills: </label>
                    <input type="number"
                    name="skills"
                    min="0"
                    value={skills}
                    onChange={ (e) => setSkills( e.target.value ) }
                    />
                    {
                        errs.skills ?
                        <span className="error-text">{errs.skills.message}</span>
                            : null
                    }
                </div>
                <div>
                <button type="submit">Update Author</button>
                <button onClick={ () => navigate("/lit")}>Cancel</button>
                </div>
            </form>
        </div>
    )
};

export default Edit;