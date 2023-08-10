import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session"
import NavigationBar from "./components/NavigationBar/NavigationBar";
import LandingPage from "./components/LandingPage/LandingPage";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import ListTemplate from "./components/ListTemplate/ListTemplate";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  return (
    <>
      <NavigationBar isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/home">
            <MainPage />
          </Route>
          <Route path="/tickets">
            <ListTemplate />
          </Route>
          <Route path="/parts">
            <ListTemplate />
          </Route>
          <Route path="/claims">
            <ListTemplate />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  )
}

export default App
