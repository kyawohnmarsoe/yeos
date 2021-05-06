import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/Home';
import BuyToJoin from './components/BuyToJoin';
import ContactUs from './components/ContactUs';
import Thankyou from './components/Thankyou';
import DailyWinner from './components/DailyWinner';
import HowToJoin from './components/HowToJoin';
import Terms from './components/Terms';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Submit from './components/Submit';

function App() {
  return (
    <Router>
     <Nav/>
     
       <Switch>
         <Route path="/" exact> <Home/> </Route>
         <Route path="/buy-to-join" > <BuyToJoin/> </Route>
         <Route path="/contact-us" > <ContactUs/> </Route>
         <Route path="/daily-winner" > <DailyWinner/> </Route>
         <Route path="/how-to-join" > <HowToJoin/> </Route>
         <Route path="/terms-and-conditions"> <Terms/> </Route>
         <Route path="/signup"> <SignUp/> </Route>
         <Route path="/profile"> <Profile/> </Route>
         <Route path="/submit"> <Submit/> </Route>
       </Switch>
     <Footer/>
    </Router>
  );
}

export default App;
