import Home from './components/Home'; 
import About from './components/About'; 
import Contact from './components/Contact'; 
import User from './components/User';
import OldBooks from './components/OldBooks';
import NewBooks from './components/NewBooks';
import Login from './components/Login';
import { BrowserRouter , Routes  , Route , Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';


function ReactRouter(){
    return(
        <BrowserRouter>
        <div className="Router">
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/contact'>Contact Details</Link></li>
                <li> <Link to='/about'>About Us</Link></li>
                <li> <Link to='/user/1'>User 1</Link></li>
                <li> <Link to='/user/2'>User 2</Link></li>
                <li> <Link to='/books/old_books'>OldBooks</Link></li>
                <li> <Link to='/books/new_books'>NewBooks</Link></li>
                <li> <Link to='/login'>Login</Link></li>
                <li> <Link to='/dashboard'>Dashboard</Link></li>




            </ul>
        
            <Routes>
                <Route  path='/home' element={<Home/>}/>
                <Route  path='/contact' element={<Contact/>}/>
                <Route  path='/about' element={<About/>}/>
                <Route  path='/user/:id' element={<User/>}/>
                <Route path='/books'>
                <Route  path='old_books' element={<OldBooks/>}/>
                <Route  path='new_books' element={<NewBooks/>}/>

                </Route>
                <Route  path='login' element={<Login/>}/>
                <Route  path='dashboard' element={<Dashboard/>}/>



            </Routes>
        

        </div>
        </BrowserRouter>

    );
}
export default ReactRouter;