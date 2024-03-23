import Login from './pages/Login'
import Signup from './pages/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPrivatePage from './pages/LoginPrivatePage'
import PrivateDashboard from './pages/PrivateDashboard';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import FoodView from './pages/FoodView';
import Profile from './pages/Profile';
import Post from './pages/Post';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route element={<LoginPrivatePage/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/foodview' element={<FoodView/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='/post' element={<Post/>}/>
            <Route path='/foodview/:id' element={<FoodView/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
