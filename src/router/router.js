import {BrowserRouter,Switch,Redirect,Route} from 'react-router-dom'

import React, { Component } from 'react';

import Home from '../view/home'

import Xiangqing from '../view/xiangqing'

import Shop from '../view/shop'

import Add from '../view/add'
 
export class Myrouter extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path='/home' component={Home}></Route>
                        <Route path='/xiangqing' component={Xiangqing}></Route>
                        <Route path='/shop' component={Shop}></Route>
                        <Route path='/add' component={Add}></Route>
                        <Redirect from='/' to='/home'></Redirect>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Myrouter;
