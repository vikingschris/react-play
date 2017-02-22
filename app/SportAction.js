
import Dispatcher from "./SportDispatcher";

/*
export function createSport(text){
    Dispatcher.dispatch({
        type: "CREATE SPORT",
        text
    });
}

export function deleteSport(){
    Dispatcher.dispatch({
        type: "DELETE SPORT"
    });
}

export function getSport() {
    Dispatcher.dispatch({
        type: "GET SPORT"
    });
}

export function testSport(){
    Dispatcher.dispatch({
        type: "TEST SPORT"
    });
}*/
export default class SportAction{
    createSport(team){
        Dispatcher.dispatch({
            type: "CREATE SPORT",
            team: team
        })
    }
    testSport(){
        Dispatcher.dispatch({
            type: "TEST SPORT"
        });
    }
    testStore(){
        Dispatcher.dispatch({
            type: "TEST SPORT STORE"
        });
    }
    getSport(){
        Dispatcher.dispatch({
            type: "GET SPORT",
            vorname: "john"
        });
    }
}
