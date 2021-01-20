import React, { Component } from 'react'

class RobotForm extends Component{
    render(){
        return (
         <div>
            <h3 className="Text">Robot Name</h3>
            <input className="Input" type="text" id="name"/>
            <h3 className="Text">Robot Type</h3>
            <input className="Input" type ="text" id="type"/>
            <h3 className="Text">Robot Mass</h3>
            <input className="Input" type ="number" id="mass"/>
            <br/>
            <br/>
            <button id="add" className="Button">Add</button>
            <br/>
            <br/>
        </div>
        )
    }
}

export default RobotForm