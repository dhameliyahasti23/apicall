import './App.css';
import axios from 'axios';
import { Button } from 'bootstrap';
import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function User() {
let[data,setdata] = useState([]);

axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users',
  })
    .then(function (response) {
    setdata(response.data);
    },[]);

      return (
   <div className="App">
       {/* <Button></Button> */}

   <div>
    <table border={1}>
        <tr border={2}>
            <td className='bold'>id</td>
            <td className='bold'>name</td>
            <td className='bold'>username</td>
            <td className='bold'>email</td>
            <td className='bold'>address<span className='remove'> -street</span></td>
            <td>suite</td>
            <td>city</td>
            <td>zipcode</td>
            <td className='bold'>phone</td>
            <td className='bold'>website</td>
            <td className='bold'>company<span className='remove'> -name</span></td>
            <td>catchPhrase</td>
            <td>Bs</td>



        </tr>
        {
            data.map((ele) => {
                return(
                
                        <tr>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.username}</td>
                        <td>{ele.email}</td>

                        <td>{ele.address.street}</td>
                        <td>{ele.address.suite}</td>
                        <td>{ele.address.city}</td>
                        <td>{ele.address.zipcode}</td>

                        <td>{ele.phone}</td>
                        <td>{ele.website}</td>

                        <td>{ele.company.name}</td>
                        <td>{ele.company.catchPhrase}</td>
                        <td>{ele.company.bs}</td>

                        </tr>
                )
            })
        }
    </table>
   </div>
   </div>
  );
}

export default User;