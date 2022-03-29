import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import FriendsDetails from './components/FriendsDetails/FriendsDetails';
import NotFound from './components/NotFound/NotFound';
import Posts from './components/Posts/Posts';
import PostDetails from './PostDetails/PostDetails';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path='/friend/:friendId' element={<FriendsDetails></FriendsDetails>}></Route>
        <Route path='/posts' element={<Posts></Posts>}>
          <Route path=':postId' element={<PostDetails></PostDetails>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  )
}

export default App
