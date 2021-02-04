import React, { Component } from 'react';
import { add_Reminder, remove_Reminder } from '../actions'
import { connect } from 'react-redux'

class App extends Component {
    state = {
        text : '',
        date: new Date()
    }

    render_Reminders = () => {
        const reminders = this.props.reminders
        return(
            <ul className="list-group">
                {
                    reminders.map(reminder => {
                        return (
                            <li className="list-group-item" key={Math.random()}>
                                <div>{reminder.text}</div>
                                <div>{reminder.date}</div>
                                <div className="remove btn btn-danger" onClick={() => this.props.remove_Reminder(reminder.id)}>X</div>
                            </li>
                        )
                    })
                }
            </ul>
        )
        
    }
    render() {
        console.log(this.props)
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
                    onChange={(e) => {this.setState({text: e.target.value})}}
                />
                <input 
                    className="form-control"
                    type="datetime-local" 
                    placeholder="Enter what u think .."
                    onChange={(e) => {this.setState({date: e.target.value})}}
                />
                <button 
                    onClick={ () => this.props.add_Reminder(this.state.text, this.state.date)}
                    className="btn btn-primary btn-block"
                >
                    Add Reminder
                </button>
                {this.render_Reminders()}
                <button className="btn btn-danger btn-block">Clear Reminder</button>
            </div>
        );
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         add_Reminder : () =>dispatch(add_Reminder())
//     }
// }
// function mapStateToProps(state){
//     return {
//         reminders : state
//     }
// }

export default connect(state => {return {reminders : state}} , {add_Reminder, remove_Reminder})(App);