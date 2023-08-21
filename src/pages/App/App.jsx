import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import LoginPage from '../LoginPage/LoginPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import MovieListPage from '../MovieListPage/MovieListPage';
import './App.css';
import ActorListPage from '../ActorListPage/ActorListPage';
import NavBar from '../../components/NavBar/NavBar';
import { movies } from '../../data';


export default function App() {

  //iniitalze userstate to empty username
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      { user ?
         <> 
        <NavBar />
        <Routes>
          <Route path = "/movies/:movieName" element={<MovieDetailPage />} />
          <Route path = "/" element={<MovieListPage />} />
          <Route path = "/actors" element={<ActorListPage />} />
          
         </Routes>
         </>
        :
        <LoginPage />
      }
      
      
    </main>
  );

  //function to update users username 

  
}


