import React from "react";

const UserList = ({users}) =>{
    console.log(users)
    return (
        <div>
            {users.map( users=>{
                return ( 
                    <div className="card mb-3" key={users.id}>
                        <div className="card-body p-3">
                            {users.name}
                        </div>
                    </div>)
            })}
        </div>
    )
}

export default UserList