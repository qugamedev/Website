import React, { useState, useEffect } from 'react';
import './sql.css';
import * as Showdown from "showdown";
import { Interweave } from 'interweave';

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});

const SQL = ()=> {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const handleBlogs = async () => {
            fetch('http://localhost:3002/api/blogs/get'
            ,{
                headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                }
            }
            )
            .then(function(response){
                return response.json();
            })

            .then(function(myJson) {
                setBlogs(myJson);
            });
            }
            handleBlogs();
    })

    if (blogs.length > 0) {
        return(
            <div>
                <a className="editButton" href="/edit">EDIT</a> <br/>
                <a className="editButton" href="/create">CREATE</a>
                
                {blogs.map((props) => {
                    return (
                        <div>
                            
                            <br/>
                            Title: {props.title}
                            <br/>
                            Author: {props.author}
                            <br/>
                            <img src={props.image} alt="test"/>
                            <br/>
                            Body:<br/> 
                            <Interweave content={converter.makeHtml(props.body)} />
                        </div>
                    );
                })}
            </div>
        )
    }else {
        return (
            <div>
                <a className="editButton" href="/edit">EDIT</a> <br/>
                <a className="editButton" href="/create">CREATE</a>
            </div>
        )
    }

    
}

export default SQL;