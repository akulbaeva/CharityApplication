import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Router from './Components/Router/Router';
import PageLayout from './Components/Pages/PageLayout';


ReactDOM.render(
    <BrowserRouter>
        <PageLayout>
            <Router/>
        </PageLayout>
    </BrowserRouter>,

    document.getElementById('root'));