import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import { Button } from 'bootstrap';
import { useState } from 'react';

function Comment() {
    let [data, setdata] = useState([]);

    axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/comments',
    })
        .then(function (response) {
            setdata(response.data);
        }, []);

    return (
        <div className="App">

            <div>
                <table border={1}>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Body</td>
                    </tr>
                    {
                        data.map((ele) => {
                            return (
                                <tr>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.body}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    );
}

export default Comment;