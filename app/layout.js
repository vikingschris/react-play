/**
 * Created by andrew25ism on 12/11/2016.
 */

import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";
export default class Layout extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}