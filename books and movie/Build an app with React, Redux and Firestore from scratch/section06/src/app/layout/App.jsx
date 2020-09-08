import React from "react";
import { Route, useLocation } from "react-router-dom";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar";
import HomePage from "../../features/home/HomePage";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetailedPage from "../../features/events/eventDetaild/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import Sandbox from "../../features/sandbox/Sandbox";

function App() {
  const { key } = useLocation();

  return (
    <>
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
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
