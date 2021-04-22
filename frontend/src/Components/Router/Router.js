import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../Pages/Home';
import Needy from "../Needy/Needy";
import Volunteer from "../Volunteer";
import NeedHelp from "../NeedHelp";
import NeedyEx from "../NeedyEx";

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/Needy' component={Needy}/>
                <Route path='/NeedHelpForm' component={NeedHelp}/>
                <Route path='/VolunteerForm' component={Volunteer}/>
                <Route path='/NeedyExForm' component={NeedyEx}/>
            </Switch>
        );
    }
}

export default Router;