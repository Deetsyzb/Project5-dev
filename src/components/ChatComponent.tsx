import React from 'react';
import { useState, useEffect} from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

function Chat({socket,username,room} : {socket:any,username:string,room:any}) {
  const [currentMessage, setCurrentMessage] = useState<string>("")
  const [messageList,setMessageList] = useState<any[]>([])

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: new Date(Date.now()).getHours() + 
        ":" + 
        new Date(Date.now()).getMinutes()
      } 
      
      await socket.emit("send_message", messageData)
      setMessageList((list: any) => [...list, messageData])
      setCurrentMessage("")
    }
  }

  useEffect(()=>{
    socket.on("receive_message",(data: any) => {
      setMessageList((list: any) => [...list, data])
    });
  }, [socket]);

  return(
        <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
        
      <div className="chat-body">
        <ScrollToBottom className = "message-container">
        {messageList.map((messageContent: { author: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | null | undefined; message: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; time: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
          return (<div className="message" id={username === messageContent.author ? "you":"other"}>
          <div>
              <div className="message-content">
                <p>{messageContent.message}</p>
              </div>
              <div className="message-meta">
                 <p id= "time">{messageContent.time}</p>
                 <p id = "author">{messageContent.author}</p>
            </div>
          </div>;
          
       </div>
        )
        })}
       </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input 
        type="text" 
        value = {currentMessage}
        placeholder="Send a message..."
        onChange = {(event) => {
          setCurrentMessage(event.target.value)
        }
      }
      onKeyPress = {(event) => {event.key === 'Enter' && sendMessage()}}
          />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  )
}

export default Chat