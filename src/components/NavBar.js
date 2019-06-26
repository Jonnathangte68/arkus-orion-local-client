import React from 'react'
import {Page, TopBar, Frame, List, Button} from '@shopify/polaris';

const NavBar = () =>{
    const topBarMarkup = (
        <TopBar className="center-logo" />
      );

      return (
        <Page>
          <Frame topBar={topBarMarkup}>

          </Frame>
        </Page>
      );
} 

export default NavBar;