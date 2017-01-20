/**
 * Created by andrew25ism on 12/26/2016.
 */
import React from "react";
import ReactDOM from "react-dom";
import Eins from "../TodoService/eins";

export default class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            ppl: [
                {
                    name: "John",
                    color: "Red"
                },
                {
                    name: "Jane",
                    color: "Green"
                }
            ]
        };
    }
    getAll(){
        return this.state.ppl;
    }
    addPerson(){
        this.state.ppl.push({
            name: "Sally",
            color: "Blue"
        });
        this.setState(this.state);
    }
    clear(x,y){
        x.value = "";
        y.value = "";
    }
    inputPerson(){
        var vorname = document.getElementById("vorname");
        var fabre = document.getElementById("fabre");
        var btn = document.getElementById("btn");
        var obj = {};
        this.state.ppl.push({
            name: vorname.value,
            color: fabre.value
        });
        this.setState(this.state);
        this.clear(vorname,fabre);
    }
    render(){
        return(
            <div id="container">
                <table>
                    <tbody>
                    {this.state.ppl.map(function (val) {
                        return (
                            <tr key={Eins.nonce(5)}>
                                <td key={Eins.nonce(4)}>{val.name}</td>
                                <td key={Eins.nonce(4)}>{val.color}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                <section>
                    <p><input type="text" placeholder="name..." id="vorname"/>
                        <input type="text" placeholder="color..." id="fabre"/></p>
                    <button id="btn" onClick={this.inputPerson.bind(this)}>Add Person</button>
                </section>
            </div>
        );
    }
}