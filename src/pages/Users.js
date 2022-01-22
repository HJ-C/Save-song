import React, { useEffect, useState } from "react";
import axios from 'axios'
import UserList from "../components/UserList";

const Users = ()=> {

    const [users, setUsers] = useState([])

    useEffect( ()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( res => {
            setUsers(res.data)
        } )
    },[])


    return (
        <>
            <h1>Users</h1>
            <UserList users={users}></UserList>
        </>
    )
}

export default Users