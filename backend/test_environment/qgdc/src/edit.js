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


const Edit = ()=> {
    const [blogs, setBlogs] = useState([]);

    const [selectedId, setSelectedId] = useState(null)

    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");


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

    const handleEditClick = (props) => {
        setAuthor(props.author)
        setTitle(props.title)
        setImage(props.image)
        setBody(props.body)

        setSelectedId(props.id)
    }

    const diagnosticPrint = (props) => {
        alert(author + " " + title + " " + image + " " + body)

    }

    const handleEdit = async (e) => {
        e.preventDefault()
        console.log("Submitted")

        const formData = new FormData()
        formData.append("author", author)
        formData.append("title", title)
        formData.append("image", image)
        formData.append("body", body)

        // alert(author + " " + title + " " + image + " " + body)

        const response = await fetch(`http://localhost:3002/api/blogs/put/${selectedId}`,{
            method: "PUT",
            processData: false,
            // contentType: false,
            body: formData,
        })

        if (response.status === 200) {
          alert("Updated")
          window.location.reload()
        } else {
          console.log("Error")
        }
    }

    return(
        <div className="holder">
            <a className="editButton" href="/">BACK</a>
            Pick a post to edit:
            {blogs.map((props) => {
                return (
                    <div className="box">
                        <h1>{props.id}. {props.title} </h1>
                        <button className="button" onClick={()=>{handleEditClick(props)}}>Edit</button>
                    </div>
                );
            })}

            <div>
                <h1>Currently Editting Id {selectedId}</h1>
                <form className="form" onSubmit={handleEdit}>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>

                    <label>Author:</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>

                    <label>Image:</label>
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)}/>

                    <label>Body:</label>
                    <textarea type="text" rows="20" value={body} onChange={(e) => setBody(e.target.value)} />

                    <h1>Preview:</h1>
                    <Interweave className="preview" content={converter.makeHtml(body)} />

                    
                    <button className="submit" type="submit">Save</button>
                </form>
                <button className="test" onClick={() => {diagnosticPrint()}}>test</button>
            </div>
        </div>
    )
}

export default Edit;