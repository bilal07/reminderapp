import React, { Component } from 'react';


class App extends Component {
    render() {
        return (
            <div className="App">
                <img src="" alt=""/>
                <div className="reminder-title">
                    <h2>what should u do ?</h2>
                </div>
                <input 
                    className="form-control"
                    type="text" 
                    placeholder="Enter what u think .."
                />
                <input 
                    className="form-control"
                    type="datetime-local" 
                    placeholder="Enter what u think .."
                />
                <button className="btn btn-primary btn-block">Add Reminder</button>
                <button className="btn btn-danger btn-block">Clear Reminder</button>
            </div>
        );
    }
}

export default App;