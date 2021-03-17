import React from 'react';
import './Input.css';

const Input = ({setMessage, sendMessage, message}) => {
    return(
        <form>
              <input type="text" 
              className="input"
              placeholder="Type a message..."
              value={message} 
              onChange={({ target: { value } }) => setMessage(value)}
              onKeyPress={(event) => event.key === "Enter" ? sendMessage(event) : null}
              />
              <button className="sendButton" onClick={event => sendMessage(event)}>Send</button>
        </form>
    )
}

export default Input;