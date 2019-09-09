import React,{Component} from 'react';

import Myrouter from '../router/router'

import '../mock/mock'

import '../style/style.css'

class App extends Component{
    constructor(){
        super();
        this.state = {

        };
    }
    handleClick = ()=>{
        
    }
    render(){
        return (
            <div className="app">
				<Myrouter></Myrouter>
            </div>
        )
    }
}

export default App;

