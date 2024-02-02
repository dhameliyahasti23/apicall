import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { Button } from 'bootstrap';

function Todo() {
    let [data, setdata] = useState([]);

    axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/todos',
    })
        .then(function (response) {
            setdata(response.data);
        }, []);

    return (
        <div className="App">   
         {/* <Button></Button> */}

            <div>
                <table border={1}>
                    <tr>
                        <td>userId</td>
                        <td>id</td>
                        <td>title</td>
                        <td>completed</td>

                    </tr>
                    {
                        data.map((ele) => {
                            return (

                                <tr>
                                    <td>{ele.userId}</td>
                                    <td>{ele.id}</td>
                                    <td>{ele.title}</td>
                                    <td>{ele.completed}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    );
}

export default Todo;