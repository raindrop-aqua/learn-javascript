import React from "react";
import { Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "semantic-ui-react";
import { ToastContainer } from "react-toastify";
import NavBar from "../../features/nav/NavBar";
import HomePage from "../../features/home/HomePage";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetailedPage from "../../features/events/eventDetaild/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import Sandbox from "../../features/sandbox/Sandbox";
import ModalManager from "../common/modals/ModalManager";
import AccountPage from "../../features/auth/AccountPage";
import ProfilePage from "../../features/profiles/profilePage/ProfilePage";
import ErrorComponent from "../common/errors/ErrorComponent";
import LoadingComponent from "./LoadingComponent";

function App() {
  const { key } = useLocation();
  const { initialized } = useSelector((state) => state.async);

  if (!initialized) {
    return <LoadingComponent content='Loading app...' />;
  }

  return (
    <>
      <ModalManager />
      <ToastContainer position='bottom-right' hideProgressBar />
      <Route exact path='/' component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route exact path='/events' component={EventDashboard} />
              <Route exact path='/sandbox' component={Sandbox} />
              <Route path='/events/:id' component={EventDetailedPage} />
              <Route
                path={["/createEvent", `/manage/:id`]}
                component={EventForm}
                key={key}
              />
              <Route path='/account' component={AccountPage} />
              <Route path='/profile/:id' component={ProfilePage} />
              <Route path='/error' component={ErrorComponent} />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
