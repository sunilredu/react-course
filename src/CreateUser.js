import { Button } from 'bootstrap';
import React, { useState } from 'react';

function CreateUser() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    function makeuser() {
        let data={name,age};
        console.warn("called",data);
    }

    return (
        <div>

            <h1>create new user</h1>
            <input type="text" onChange={(e) => setName(e.target.value)} name="username" value={name} />
            <br />
            <input type="text" onChange={(e) => setAge(e.target.value)} name="age" value={age} />
            <br />
            <button onClick={makeuser}>Create User</button>

        </div>
    )
}
export default CreateUser;