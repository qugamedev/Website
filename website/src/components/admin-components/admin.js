import { useAuth } from '../../Auth/AuthContext.js'
import { Outlet, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import '../../CSS/admin.css'
import Adminheader from './AdminHeader.js';


const Admin = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogout = (event) => {
        auth.logout()
        navigate("/login")
    }

    const [users, setUsers] = useState([])
    const [selectedId, setSelectedId] = useState(null)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [display, setDisplay] = useState("")

    const [confirmPassword, setConfirmPassword] = useState("")
    const [currentFrom, setCurrentForm] = useState('none')

    const deleteUser = (id)=>{
        fetch(`http://localhost:3002/api/admins/delete/${id}`, {
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
        formData.append("username", username)
        formData.append("password", password)
        formData.append("display", display)

        const response = await fetch("http://localhost:3002/api/admins/create",{
            method: "PUT",
            body: formData,
        })

        if (response.status === 200) {
          alert("User Created")
          window.location.reload()
        } else {
          console.log("Error")
        }
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        console.log("submit went through")
        const response = await fetch(`http://localhost:3002/api/admins/put/${selectedId}`,{
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password, display }),

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
        setUsername(props.username)
        setDisplay(props.display_name)
        setCurrentForm("edit")
      }

      const handleCreateClick = () => {
        setUsername('')
        setDisplay('')
        setPassword('')
        setConfirmPassword('')
        setCurrentForm("create")
      }
    
    useEffect(() => {
        console.log("data fetched")
        const handleAdmin = async () =>{
            const response = await fetch("http://localhost:3002/api/admins/get")
            const newUsers = await response.json()
            await setUsers(newUsers)
            console.log(newUsers)
        }
        handleAdmin()
    }, [])


    if (users != null && users.length > 0){
        return(
            <div className="admin-all">
                <div className="all-forms">
                    <Adminheader/>
                    {(currentFrom === "edit") && (
                        <form className="edit-form" onSubmit={handleEdit}>
                            <h1>Editing User ID <span>{selectedId}</span></h1>

                            <label>Username:</label>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            <label>Password:</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label>Display Name:</label>
                            <div className="edit-gr">
                                <input type="text" value={display} onChange={(e) => setDisplay(e.target.value)} />
                            </div>
                            <div className="edit-buttons">
                                <button className="edit-save" type="submit">Save</button>
                                <button className="edit-close" onClick={() => setCurrentForm("none")}>X</button>
                            </div>
                            

                        </form>
                    )}
                    {currentFrom === "create" && (
                        <form className="create-form" onSubmit={handleCreateUser}>
                            <h1>Creating a new User</h1>
                            <label>Username:</label>
                            <br/>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            <br/>
                            <label>Password:</label>
                            <br/>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <br/>
                            <label>Confirm Password:</label>
                            <br/>
                            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                            <br/>
                            <label>Display Name:</label>
                            <br/>
                            <input type="text" value={display} onChange={(e) => setDisplay(e.target.value)}/>
                            <br/>
                            <div className="create-buttons">
                                <button className="create-create" type="submit">Create User</button>
                                <button className='create-close' onClick={() => setCurrentForm("none")}>X</button>
                            </div>      
                        </form>
                    )}
                </div>
                
                    
                    {currentFrom == "none" && (<button className='create-user-button' onClick={() => handleCreateClick()}>Create User</button>)}
                    <div className="table-container">
                        <table table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>USERNAME</th>
                                    <th>DISPLAY NAME</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((props) => {
                                    return(
                                        <tr key = {props.id}>
                                            <td>{props.id}</td>
                                            <td>{props.username}</td>
                                            <td>{props.display_name}</td>
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