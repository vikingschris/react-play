
import React from "react";
import ReactDOM from "react-dom";

class One extends React.Component{
    constructor(){
        super();
        this.state = {
            num: 0
        };
    }
    setNumber(){
        this.setState({num: this.state.num + 1});
        ReactDOM.findDOMNode(this).style.color = (this.state.num % 2 == 0) ? "black" : "red";
    }
    componentWillUpdate(prevProps, prevState){
        console.log("will update");
        console.log(prevProps,prevState);
    }
    componentDidUpdate(){
        console.log("did updated");
    }
    componentWillMount(){
        console.log("will mount");
    }
    componentDidMount(){
        console.log("did mount");
    }
    render(){
        return(
            <div>
                <h1>ReactJS Tutorial</h1>
                <p>{this.state.num}</p>
                <button onClick={this.setNumber.bind(this)}>Change State</button>
            </div>
        )
    }
}