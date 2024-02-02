import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import { Button } from 'bootstrap';
import { useState } from 'react';

function Album() {
    let [data, setdata] = useState([]);

    axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/albums',
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
                        <td>Id</td>
                        <td>Title</td>

                    </tr>
                    {
                        data.map((ele) => {
                            return (

                                <tr>
                                    <td>{ele.id}</td>
                                    <td>{ele.title}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    );
}

export default Album;