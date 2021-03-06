import React from 'react'
import '../Input/Input.css'

const Input=({message, setMessage, sendMessage}) => (    
   
    <form className="form">
        <input 
        className="input"
        type="text"
        placholder="Type a message..."
        value={message} 
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}/>

        <button className="sendButton" onClick = {(event) => sendMessage(event)}>Send</button>
    </form>
  
    )
export default Input;
