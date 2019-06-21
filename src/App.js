import React from 'react';
import { withRouter } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import {Page, TopBar, Frame, Card, TextField, Button} from '@shopify/polaris';

function App(props) {

  const topBarMarkup = (
    <TopBar className="center-logo" />
  );

  function activateLasers(e) {
    e.preventDefault();
    let path = `/dashboard-skills`;
    props.history.push(path);
  }

  return (
    <Page>
      <Frame topBar={topBarMarkup}>
        <div className="login-bx">
          <Card sectioned spacing="500px">
            <form className="log-in-frm">
              <legend><b>Log In</b></legend>
              <br/>
              <TextField
                label="Email"
                placeholder="Your email goes here."
              />
              <TextField
                label="Password"
                placeholder="Keep it secret. Keep it safe."
              />
              <Button submit onClick={activateLasers}>Log In</Button>
              <br/>
              <a className="forgot-lnk">Forgot password?</a>
            </form>
          </Card>
        </div>
      </Frame>
    </Page>
  );
}

export default withRouter(App);
