import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const Create = (props) => {
    
    const [ name, setName ] = useState();
    const [ type, setType ] = useState();
    const [ description, setDescription ] = useState();
    const [ favorite, setFavorite ] = useState();
    const [ skills, setSkills ] = useState(0);
    const [ errs, setErrs ] = useState({});
    

    const submitHandler = (e) => {
        e.preventDefault(); //bring in the event with 'e' and prevent default refresh
        
        axios.post("http://localhost:8000/api/lit", {
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
                    navigate("/lit");
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>New Author</h1> 
            <form onSubmit={submitHandler}>
                <div>
                    <label> Name: </label>
                    {
                        errs.name ?
                            <span className="error-text">{errs.name.message}</span>
                            : null
                    }
                    <input type="text"
                    name="name"
                    value={name}
                    onChange={ (e) => setName( e.target.value ) }
                    />


                </div>
                <div>
                    <label> Type: </label>
                    {
                        errs.type ?
                        <span className="error-text">{errs.type.message}</span>
                            : null
                    }
                    <input type="text"
                    name="type"
                    value={type}
                    onChange={ (e) => setType( e.target.value ) }
                    />
                </div>
                <div>
                    <label> Description: </label>
                    {
                        errs.description ?
                        <span className="error-text">{errs.description.message}</span>
                            : null
                    }
                    <input type="text"
                    name="description"
                    value={description}
                    onChange={ (e) => setDescription( e.target.value ) }
                    />

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
                    {
                        errs.skills ?
                        <span className="error-text">{errs.skills.message}</span>
                            : null
                    }
                    <input type="number"
                    name="skills"
                    min="0"
                    value={skills}
                    onChange={ (e) => setSkills( e.target.value ) }
                    />

                </div>
                <div>
                <button type="submit">Add Author</button>
                <button onClick={ () => navigate("/lit")}>Cancel</button>
                </div>
            </form>
        </div>
    )
};

export default Create;