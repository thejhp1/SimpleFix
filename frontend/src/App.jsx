import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session"
import NavigationBar from "./components/NavigationBar/NavigationBar";
import LandingPage from "./components/LandingPage/LandingPage";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import ListTemplate from "./components/ListTemplate/ListTemplate";
import Ticket from "./components/Ticket/Ticket";
import CreateTicket from "./components/Ticket/CreateTicket";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import ScheduleRoutePage from "./components/Schedule/ScheduleRoutePage";

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
          <Route path="/tickets/new">
            <CreateTicket />
          </Route>
          <Route path="/tickets/:ticketId">
            <Ticket />
          </Route>
          <Route path="/route">
            <ScheduleRoutePage />
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
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  )
}

export default App
