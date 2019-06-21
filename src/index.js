import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SkillDash from './components/SkillDash';
import SkillCreate from './components/SkillCreate';
import * as serviceWorker from './serviceWorker';
import {AppProvider} from '@shopify/polaris';



import {
    BrowserRouter,
    Route
} from 'react-router-dom';

const theme = {
    colors: {
        topBar: {
        background: '#06368a',
        },
    },
    logo: {
        width: 124,
        topBarSource:
        'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
        url: 'http://jadedpixel.com',
        accessibilityLabel: 'Jaded Pixel',
        marginLeft: 25
    },
};

ReactDOM.render(
    <AppProvider theme={theme}>
         <BrowserRouter>
            <Route exact path="/" component={App} />
            <Route path="/dashboard-skills" component={SkillDash} />
            <Route path="/skill/new" component={SkillCreate} />
        </BrowserRouter>
    </AppProvider>,
    document.querySelector('#root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
