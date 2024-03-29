import Cards from './components/Cards/Cards.jsx'
import Error from './components/Error/Error.jsx'
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import { useState, useEffect  } from 'react'
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/actions";




function App() {

  
  // console.log(location)  // para ver que trae esa funcion por consola
  // location permite generar una condicion para una ruta. 
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  //const username = 'malgor.jose@gmail.com';
  //const password = '12345678';
  const navigate = useNavigate();

  // function login (userData) {
  //   if (userData.username === username  && 
  //     userData.password === password) {
  //         setAccess(true);
  //         navigate('/home');
  //       }
  // }
  const dispatch = useDispatch();
  const user = useSelector((state) => state.idUser);

  function logIn(userData) {
    dispatch(login(userData.username, userData.password));
    if (user) {
      setAccess(true);
      navigate("/home");
    }
  }

  function logout() {
    setAccess(false);
  }


  useEffect(() => {
    !access && navigate('/');
 }, [access]);

 // siempre que access sea falso useEffect me va a estar redirigiendo a / . useEffect es un metodo que se ejecuta cuando una variable cambia en este caso la variable esta entre corchetes [acces]



  const onSearch = (character) => {
    fetch(`http://localhost:3001/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          characters.find((element) => element.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])
            : alert("Personaje repetido, prueba otro ID");
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
      
  }

  function random() {
    let randomId = Math.floor(Math.random() * 826);
    onSearch(randomId);
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  }

  const location = useLocation(); 

  return (
    <div className='styles.App' style={{ padding: '25px' }}>
      {location.pathname !== '/' && <Nav onSearch={onSearch} random={random} logout={logout}/>}
      <Routes>
        <Route exact path='/' element={<Form logIn={logIn}/>} />
        <Route exact path='/home' element={<Cards characters={characters}
          onClose={onClose} />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/favorites' element={<Favorites />} />
        <Route exact path='/detail/:detailId' element={<Detail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App
