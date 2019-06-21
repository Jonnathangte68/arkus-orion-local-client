import React from 'react';
//import logo from './logo.svg';
import './SkillCreate.css';
import {Page, Frame, TopBar, Icon, Stack, Button} from '@shopify/polaris';
import { withRouter, Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import SkillTable from './SkillTable';
import {ChevronLeftMinor, ArrowLeftMinor, ArrowRightMinor} from '@shopify/polaris-icons';


function SkillCreate() {

    const topBarMarkup = (
        <TopBar className="center-logo" />
    );

  return (
    <Page>
        <div className="create-skill-page">
            <Frame topBar={topBarMarkup}>
            <Stack wrap="false">
                <Stack.Item>
                    <Icon source={ChevronLeftMinor} />
                </Stack.Item>
                <Stack.Item>
                    <span>SAT Skills</span>
                </Stack.Item>
                <Stack.Item fill>
                    <div className="float-right">
                        <Stack wrap="true">
                            <Stack.Item>
                                <Link><Icon source={ArrowLeftMinor}/></Link>
                            </Stack.Item>
                            <Stack.Item>
                                <Link><Icon source={ArrowRightMinor}/></Link>
                            </Stack.Item>
                        </Stack>
                    </div>
                </Stack.Item>
            </Stack>
            </Frame>
        </div>
    </Page>
  );
}

export default SkillCreate;
