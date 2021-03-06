import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from'./pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

//place the <Header/> outside the routes and switch like so
//now the header will always dispay at the top of ever page 
//in our app
import Header from './components/header/header.component';

const ContactPage = () => (
    
  <div>
  Contact Page under Construction
  </div>
);

function App() {
  return (
    <div>
    <Header/> 
      <Switch>
        <Route   exact path='/'       component={HomePage}/>
        <Route   exact path='/shop'   component={ShopPage}/>
        <Route   exact path='/signin' component={SignInAndSignUp}/>
        <Route   exact path='/contact' component={ContactPage}/>
      </Switch> 
    </div>
  );
}

export default App;
