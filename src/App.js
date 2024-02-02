import logo from './logo.svg';
import { Routes, Route } from "react-router-dom"

import './App.css';
import Posts from './Posts';
// import Photo from './Pho to';
import Album from './Album';
import Todo from './Todo';
import Comment from './Comment';
import User from './User';

function App() {
  return (
    <>
    <Posts></Posts>
    
    {/* <Routes>
        <Route path="/Posts" element={ <Posts/> } />
        <Route path="/Photo" element={ <Photo/> } />
        <Route path="/Album" element={ <Album/> } />
        <Route path="/Todo" element={ <Todo/> } />
        <Route path="/Comment" element={ <Comment/> } />
        <Route path="/User" element={ <User/> } />

      </Routes> */}
      
    </>
    );
}

export default App;
