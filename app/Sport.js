
import React from "react";
import {EventEmitter} from "events";
import SportStore from "./SportStore";
export default class Sport extends React.Component{
    constructor() {
        super();
        this.state = {
            sports: SportStore.getAll()
        };
    }
    componentWillMount(){
        var self = this;
        SportStore.on("change", function () {
            self.setState(SportStore.getAll());
        });
    }
    // implemented when the event isn't in use
    componentWillUnmount(){
        var self = this;
        SportStore.removeListener("change", function () {
            self.setState(SportStore.getAll());
        });
    }
    render(){
        return(
            <div>
                <ul>
                    {this.state.sports.map(function(val){
                        return(
                            <li key={val.id}>{val.team}</li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}