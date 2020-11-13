import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';
import { v4 as uuid } from "uuid";

/**App
 * Renders Routes and NavBar
 * 
 * 
 * App -> {NavBar, Routes}
 */
function App() {

  return (
    <div className='App container'>
      <BrowserRouter>
        <header className='App-header jumbotron text-center py-5 px-5 mx-auto'>
          <h1 className="App-title display-4">Microblog</h1>
          <p className="lead font-italic mt-3">When Medium just isn't enough...</p>
          <NavBar />
        </header>
        <Routes />
      </BrowserRouter>
    </div>
  );
}


export default App;


//Another method to write comments:
 // function addComment1(id, formData) {
  //   let newComment = { ...formData, id: uuid(), dateTime: new Date()}
  //   // find relevant post and update its comments
  //   const updatedPosts = posts.map( post => {
  //     if(post.id === id) {
  //       let updatedComments = [...post.comments, newComment]
  //       return {...post, comments: updatedComments};
  //     } else {
  //       return post 
  //     }
  //   })

  //   setPosts(updatedPosts);
  // }