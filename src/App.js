import { Route, Routes } from 'react-router-dom';
import './App.css';
import Friends from './component/Friends/Friends';
import Home from './component/Home/Home';
import About from './component/About/About'
import NotFound from './component/NOtFound/NotFound';
import FriendsName from './component/FriendsName/FriendsName';
import Header from './component/Header/Header';
import FriendDetail from './component/FriendDetail/FriendDetail'

function App() {
  return (
    <div className="App">
      <Header />
      <p>Home, Friend, About,Friend/FriendsName </p>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Friends' element={<Friends />}></Route>
        <Route path='/Friend/:friendid' element={<FriendDetail></FriendDetail>} s></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Friend/FriendsName' element={<FriendsName />}></Route>
        <Route path='*' element={<NotFound />}></Route>

      </Routes>
    </div >
  );
}

export default App;
