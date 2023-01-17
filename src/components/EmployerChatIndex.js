import React, { Component } from "react";
import "./EmployerChatStyles.css";

import ChatWindow from "./EmployerChatWindow";
import ChatComposer from "./EmployerChatComposer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { text: <h1 className="black">Hello Applicant! We are pleased to inform you that we have shortlisted you for the position. Please reply to this message to take the next step with us.</h1> }
      ]
    };
  }

  // if new message was submitted from child component // process
  submitted = getNewMessage => {
    if (getNewMessage !== "") {
      // match the state format
      const newMessage = { text: getNewMessage };
      // merge new message in copy of state stored messages
      let updatedMessages = [...this.state.messages, newMessage];
      // update state
      this.setState({
        messages: updatedMessages
      });
    }
  };

  render() {
    return (
      <div className="App">
        {/* send stored messages as props to chat window */}
        <ChatWindow messagesList={this.state.messages} />
        {/* send submitted props to chat composer */}
        <ChatComposer submitted={this.submitted} />
      </div>
    );
  }
}

