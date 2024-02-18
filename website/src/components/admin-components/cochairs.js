import { useAuth } from '../../Auth/AuthContext.js'
import { Outlet, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Adminheader from './AdminHeader.js';

import '../../CSS/admin.css'


const Admin = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogout = (event) => {
        auth.logout()
        navigate("/login")
    }

    const [cochairs, setCochairs] = useState([])
    const [selectedId, setSelectedId] = useState(null)

    const [name, setName] = useState([])
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")

    const [currentForm, setCurrentForm] = useState('none')

    const deleteUser = (id)=>{
        fetch(`http://localhost:3002/api/cochairs/delete/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            console.log(response)
            alert("User Deleted")
            window.location.reload()
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleCreateUser = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("name", name)
        formData.append("title", title)
        formData.append("image", image)

        const response = await fetch("http://localhost:3002/api/cochairs/create",{
            method: "PUT",
            body: formData,
        })

        if (response.status === 200) {
          alert("Exec Created")
          window.location.reload()
        } else {
          console.log("Error")
        }
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        console.log("submit went through")
        const response = await fetch(`http://localhost:3002/api/cochairs/put/${selectedId}`,{
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, title, image }),

            //right now it creates a new date object but we only want first half
        })
        if (response.status === 200) {
          alert("Row Updated")
          window.location.reload()
        } else {
          console.log("Error")
        }
    }

      const handleEditClick = (props) => {
        setSelectedId(props.id)
        setName(props.name)
        setTitle(props.title)
        setImage(props.image)
        setCurrentForm("edit")
      }

      const handleCreateClick = () => {
        setName('')
        setTitle('')
        setImage('')
        setCurrentForm("create")
      }
    
    useEffect(() => {
        console.log("data fetched")
        const handleAdmin = async () =>{
            const response = await fetch("http://localhost:3002/api/cochairs/get")
            const newUsers = await response.json()
            await setCochairs(newUsers)
            console.log(newUsers)
        }
        handleAdmin()
    }, [])


    if (cochairs != null && cochairs.length > 0){
        return(
            <div className="admin-all">
                
                <div className="all-forms">
                    <Adminheader/>
                    {(currentForm === "edit") && (
                        <form className="edit-form" onSubmit={handleEdit}>
                            <h1>Editing User ID <span>{selectedId}</span></h1>

                            <label>Name:</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                            <label>Title/Role:</label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                            <label>Image:</label>
                            <div className="edit-gr">
                                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                            </div>
                            <div className="edit-buttons">
                                <button className="edit-save" type="submit">Save</button>
                                <button className="edit-close" onClick={() => setCurrentForm("none")}>X</button>
                            </div>
                            

                        </form>
                    )}
                    {currentForm === "create" && (
                        <form className="create-form" onSubmit={handleCreateUser}>
                            <h1>Creating a new Exec</h1>
                            <label>Name:</label>
                            <br/>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                            <br/>
                            <label>Title/Role:</label>
                            <br/>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                            <br/>
                            <label>Image:</label>
                            <br/>
                            <input type="text" value={image} onChange={(e) => setImage(e.target.value)}/>
                            <br/>
                            <div className="create-buttons">
                                <button className="create-create" type="submit">Create Cochair</button>
                                <button className='create-close' onClick={() => setCurrentForm("none")}>X</button>
                            </div>      
                        </form>
                    )}
                </div>
                
                    
                    {currentForm == "none" && (<button className='create-user-button' onClick={() => handleCreateClick()}>Create Cochair</button>)}
                    <div className="table-container">
                        <table table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>TITLE/ROLE</th>
                                    <th>Image</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cochairs.map((props) => {
                                    return(
                                        <tr key = {props.id}>
                                            <td>{props.id}</td>
                                            <td>{props.name}</td>
                                            <td>{props.title}</td>
                                            <td>{props.image}</td>
                                            <td>
                                                <button className='button' onClick={() => handleEditClick(props)}>Edit</button>
                                                <button className='button' onClick={() => deleteUser(props.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
            

                <button onClick = {handleLogout} className="button">Logout</button>
                <div className="spacer"></div>
            </div>
        )} else{
        return(
            <div>
                <Adminheader/>
                <h1>This is the admin panel !!!</h1>
                <button onClick = {handleLogout}>Logout</button>
            </div>
        )
    }
        
    
}

export default Admin