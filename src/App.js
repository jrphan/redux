import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import NotFound from './components/NotFound';


// const Header = React.lazy(() => import('./components/Header'))

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading.....</div>}>
        <BrowserRouter>
          <Header/>
          <Banner/>

          <Switch>
            <Redirect exact from="/" to="/photos"/>

            <Route path="/photos" component={NotFound}/>
            <Route  component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
