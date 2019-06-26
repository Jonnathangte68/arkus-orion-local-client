import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ApolloConsumer } from 'react-apollo'
//import logo from './logo.svg';
import gql from 'graphql-tag'
import './App.css';
import { Page, TopBar, Frame, Card, TextField, Button } from '@shopify/polaris';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.loadData = this.loadData.bind(this)
  }

  async loadData(client) {
    const data = await client.query({
      query: gql`
        {
          users{
            name
          }
        }
        `
    })

    console.log(data)
    this.setState
      ({
        
      })
      if(data){
        let path = `/users`;
        this.props.history.push(path);
      }
  }

  render() {
    return (
      <>
        <Page>
          <Frame topBar={<TopBar className="center-logo" />}>
            <div className="login-bx">
              <Card sectioned spacing="500px">
                <form className="log-in-frm">
                  <legend><b>Log In</b></legend>
                  <br />
                  <TextField
                    label="Email"
                    placeholder="Your email goes here."
                  />
                  <TextField
                    label="Password"
                    placeholder="Keep it secret. Keep it safe."
                  />
                  <ApolloConsumer>
                    {client => (
                      <Button onClick={() => this.loadData(client)}>Log in </Button>
                    )}
                  </ApolloConsumer>
                  <br />
                  <a className="forgot-lnk">Forgot password?</a>
                </form>
              </Card>
            </div>
          </Frame>
        </Page>
      </>
    )
  }
}

export default withRouter(App);
