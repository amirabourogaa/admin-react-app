import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
        };
      }
      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
      render() {
        return (
          <form>
         <div className="chat">
  <div className="chat-title">
    <h1>Test</h1>
    <figure className="avatar">
      <img src="https://img.bfmtv.com/i/0/0/37b/e4bef2fbdad29c17c26214e98e36c.jpg" /></figure>
  </div>
  <div className="messages">
    <div className="messages-content"></div>
  </div>
  <div className="message-box">
    <textarea type="text" className="message-input" placeholder="Type message..."></textarea>
    <button type="submit" className="message-submit">Send</button>
  </div>

</div>
          </form>
         
        );
      }
    }
    
  export default MessageForm;