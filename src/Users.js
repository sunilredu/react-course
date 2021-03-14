import { useState, useEffect, Fragment } from "react";
import { Button, Table } from 'react-bootstrap';

function Users() {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((data) => {
            data.json().then(result => {
                console.warn("data", result)
                setUser(result.data)
            })
        }
        )
    },[])
    // const [user, setUser] = useState([
    //     { name: 'Sunil', age: '30' },
    //     { name: 'Anil', age: '28' },
    //     { name: 'Ajay', age: '30' },
    //     { name: 'Deepak', age: '20' },
    //     { name: 'Saket', age: '3' },
    //     { name: 'Monu', age: '11' }

    // ])

    return (
        <Fragment>
            <h1>User listing is here</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Age</th>
                    </tr>

    {
        user.map((item,index)=>
        <tr key={index}>
            <td>{item.id}</td>
            <td>{item.mployee_name}</td>
            <td>{item.employee_salary}</td>
            <td>{item.employee_age}</td>
            </tr>
        )
    }

                </thead>
                <tbody>

                </tbody>
            </Table>
        </Fragment >


    )
}
export default Users;