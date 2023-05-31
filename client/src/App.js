import './App.css';
import { Home, Form, Detail, Landing } from './Views'
import NavBar from './Components/NavBar/NavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
function App() {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname !== '/' && <NavBar />}
      {/* {location.pathname !== '/' && !location.pathname.startsWith('/detail/') && <SearchBar />} */}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </div>
  );
}
export default App;