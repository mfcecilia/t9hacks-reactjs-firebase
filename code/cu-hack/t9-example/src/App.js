import React, { Component } from 'react';
import logo from './logo.svg';
import fire from './fire';
import './App.css';

class App extends Component {
 constructor(props) {
   super(props);
   this.addMessage = this.addMessage.bind(this);
   this.state = { messages: [] }; // <- set up react state
 }
 componentWillMount(){
   /* Create reference to messages in Firebase Database */
   let messages = fire.database().ref('messages').orderByKey().limitToLast(100);
   messages.on('child_added', snapshot => {
     /* Update React state when message is added at Firebase Database */
     let message = { text: snapshot.val(), id: snapshot.key };
     this.setState({ messages: [message].concat(this.state.messages) });
   })
 }
 addMessage(){
   fire.database().ref('messages').push( this.inputEl.value ); // <- Send the message
   this.inputEl.value = ''; // <- clear the input
 }
 render() {
   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        <input type="text" ref={ el => this.inputEl = el }/>
        <input value="Submit" type="button" onClick={this.addMessage}/>
        <ul>
         { /* Render the list of messages */
           this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
         }
        </ul>
      </p>
    </div>
   );
 }
}
export default App;