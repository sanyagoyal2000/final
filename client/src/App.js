import Home from './pages/home';
import AboutUs from './pages/about';
import Mentors from './pages/mentor';
import Mentees from './pages/mentee';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SignUp from './pages/signup';
import Login from './pages/login';
import ContactUs from './pages/contact';
import Blogs from './pages/blog';
import './App.css';


import NotFound from './pages/notfound';
function App() {

  return (
    <div className="App">
     <Router>
     <Switch>
     <Route exact path="/">
            <Home/>
          </Route>
              <Route  path = "/about" component = {AboutUs} exact />
              <Route  path = "/mentor" component = {Mentors} exact/>
              <Route  path = "/mentee" component = {Mentees} exact />
              <Route  path = "/signup" component = {SignUp} exact/>
              <Route  path = "/login" component = {Login} exact/>
              <Route  path = "/blog" component = {Blogs} exact/>
              <Route  path = "/contact" component = {ContactUs} exact/>
              
              
              <Route component={NotFound}/>
              
          
        </Switch>
     </Router>
    </div>
    
    
  );
}

export default App;
