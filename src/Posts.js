import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import { Button } from 'bootstrap';
import { useState } from 'react';
import App from './App';

function Post() {
let[data,setdata] = useState([]);

axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts',
  })
    .then(function (response) {
    setdata(response.data);
    },[]);

      return (
   <div className="App">
   {/* <Button></Button> */}
   <div>
    <table border={1}>
        <tr>
            <td>id</td>
            <td>Title</td>
            <td>Body</td>
        </tr>
        {
            data.map((ele) => {
                return(
                    
                            <tr>
                            <td>{ele.id}</td>
                            <td>{ele.title}</td>
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

export default Post;    