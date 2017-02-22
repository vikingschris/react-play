
import { EventEmitter } from "events";
import Dispatcher from "./SportDispatcher";
import Sport from "./Sport";
import React from "react";
class SportStore extends EventEmitter{

    constructor(){
        super();
        this.sports = [];
    }
    createSport(team){
        this.sports.push({
            id: Date.now(),
            team: team
        });
        this.emit('change');
    }
    getAll(){
        return this.sports;
    }
    checkAction(action){
        switch (action.type) {
            case "GET SPORT":
                console.log("i got sport");
                break;
            case "TEST SPORT":
                console.log("i test sport");
                break;
            case "CREATE SPORT":
                sStore.createSport(action.team);
                break;
        }
    }
}
var sStore = new SportStore();
Dispatcher.register(sStore.checkAction.bind(this));
export default sStore;

/*
view is rerendered when the store has changed or something has changed


after store update themselves in response to an action, they emit a change event
special views called controller-views, listen for change events, retrieve the data from the stores and
provide the new data to the entire tree of their child views
 */