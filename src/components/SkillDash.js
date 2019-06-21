import React from 'react';
//import logo from './logo.svg';
import './SkillDash.css';
import { withRouter } from 'react-router-dom';
import {Page, TopBar, Frame, List, Button} from '@shopify/polaris';
import SearchBar from './SearchBar';
import SkillTable from './SkillTable';
import { Link } from 'react-router-dom';

function SkillDash(props) {

  const topBarMarkup = (
    <TopBar className="center-logo" />
  );

  function addNewSkill() {
    props.history.push('/skill/new');
  }

  return (
    <Page>
      <Frame topBar={topBarMarkup}>
        <div className="skill-dashboard">
          <div className="top-row-list">
            <List>
              <List.Item>
                SAT Skills
              </List.Item>
              <List.Item>
                <Link to="/skill/new">
                  <Button onClick={addNewSkill}>+ New Skill</Button>
                </Link>
              </List.Item>
            </List>
          </div>
          <div className="search-bar">
            <SearchBar></SearchBar>
          </div>
          <div className="main-content">
            <SkillTable></SkillTable>
          </div>
        </div>
      </Frame>
    </Page>
  );
}

export default withRouter(SkillDash);
