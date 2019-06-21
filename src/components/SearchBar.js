import React from 'react';
//import logo from './logo.svg';
import './SearchBar.css';
import { withRouter } from 'react-router-dom';
import {TopBar, Card, Select, Button, TextField, Icon} from '@shopify/polaris';
import {SearchMinor} from '@shopify/polaris-icons';

function SearchBar() {

  return (
    <Card sectioned>
        <div className="box">
            <div className="div-left">
              <Select
                  label="Subject"
                />
            </div>
            <div className="div-left space-left">
              <Select
                  label="Status"
                />
            </div>
        </div>
        <div className="box top-space">
            <div className="div-left">
              <TextField
                label="Skill"
                prefix={<Icon source={SearchMinor} />}
              />
            </div>
            <div className="div-left space-left">
              <TextField
                label="Skill"
                prefix={<Icon source={SearchMinor} />}
              />
            </div>
            <div className="div-left space-left">
              <TextField
                label="Skill"
                prefix={<Icon source={SearchMinor} />}
              />
            </div>
            <div className="div-left div-left-last top-space">
              <Button>Clear</Button>
              <Button>Filter</Button>
            </div>
        </div>
    </Card>
  );
}

export default SearchBar;
