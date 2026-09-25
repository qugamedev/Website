import * as React from "react";
import './sql.css';
import * as Showdown from "showdown";
import { Interweave } from 'interweave';

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});

// import * as Showdown from "showdown";



const Create = ()=> {
    const [blogs, setBlogs] = React.useState([]);

    const [selectedId, setSelectedId] = React.useState(null)

    const [author, setAuthor] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [image, setImage] = React.useState("");
    const [body, setBody] = React.useState("");

      React.useEffect(() => {
        console.log("Fetching blog posts");
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
                console.log(response)
                return response.json();
            })

            .then(function(myJson) {
                console.log(myJson);
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
            body: formData,
        })

        if (response.status === 200) {
          alert("Updated")
          window.location.reload()
        } else {
          console.log("Error")
        }
    }

    const handleCreateUser = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("author", author)
        formData.append("title", title)
        formData.append("image", image)
        formData.append("body", body)

        const response = await fetch("http://localhost:3002/api/blogs/create",{
            method: "POST",
            body: formData,
        })

        if (response.status === 200) {
          alert("Posted")
          console.log(image)
          window.location.reload()
        } else {
          console.log("Error")
        }
    }

    return(
        <div className="holder">
            <a className="editButton" href="/">BACK</a>

            <div>
                <h1>Make a new post:</h1>
                <form className="form" onSubmit={handleCreateUser}>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>

                    <label>Author:</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>

                    <label>Image:</label>
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)}/>

                    <label>Body:</label>
                    <textarea type="text" rows="20" value={body} onChange={(e) => setBody(e.target.value)} />
                    <Interweave className="preview" content={converter.makeHtml(body)} />

                    
                    <button className="submit" type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}

export default Create;