import { Route, Routes } from 'react-router-dom';
import './App.css';
import Friends from './component/Friends/Friends';
import Home from './component/Home/Home';
import About from './component/About/About'
import NotFound from './component/NOtFound/NotFound';
function App() {
  return (
    <div className="App">
      <h1>Welcome to may Routoing website</h1>
      <p>Home, Friend, About </p>
      <Routes>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Friend' element={<Friends />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
