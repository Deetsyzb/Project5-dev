import './App.css' ;
import io from 'socket.io-client';
import { useState } from 'react';
import Chat from './ChatComponent'
import Composition from './Composition'

const socket = io("http://localhost:3001");

function Chatroom() {
  const [username, setUser] = useState("")
  const [room,setRoom] = useState("")
  const [showChat,setShowChat] = useState(false)

 const joinRoom = () =>{
   setRoom("X")
  if (username !== "" && room !== "") {
    socket.emit("join_room", room )
    setShowChat(true)
  }

 }
  return (
    <div >
      
      <div className ="App">
        {!showChat ?(
        <div className ="joinChatContainer">
        <h3>Join Chat</h3>
        <input type="text" placeholder="Name here" onChange = {(event) => {setUser(event.target.value)}}/>
        {/* <input type="text" placeholder="Room ID here"onChange = {(event) => {setRoom(event.target.value)}}/> */}
        <button onClick ={joinRoom}>Join Room</button>
        </div>
        ) : (
        <Chat socket = {socket} username={username} room ={room}/> )
      }
      </div>
    </div>
  );
}

export default Chatroom;
