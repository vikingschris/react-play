
import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Footer from "./footer";
import SportAction from "./SportAction";
import SportStore from "./SportStore";
import Sport from "./Sport";

export default class Layout extends React.Component{
    constructor(){
        super();
        this.model = new Sport();
        this.sportAction = new SportAction();
    }
    createSport(event){
        if(event.keyCode == 13) {
            this.sportAction.createSport(event.target.value);
        }
    }
    render(){
        return(
            <div>
                <input type="text" onKeyDown={this.createSport.bind(this)}/>
                <div>
                    <button onClick={this.sportAction.getSport.bind(this)}>Get</button>
                    <button onClick={this.sportAction.testSport.bind(this)}>Test</button>
                    <button onClick={this.sportAction.testStore.bind(this)}>Sport Store</button>
                </div>
                <Sport/>
            </div>
        );
    }
}