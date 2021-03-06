import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css'

import InforBar from '../InfoBar/InforBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages'
import TextContainer from '../TextContainer/TextContainer';

let socket;

const Chat = ({location}) => {

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'https://chat-application--server.herokuapp.com/';

    const sendMessage = (event) => {
        event.preventDefault();

        if(message){
            socket.emit('sendMessage', message, () => {
                setMessage('');
            })
        }
    }


    useEffect(() => {
        const {name, room} = queryString.parse(location.search);

        socket = io(ENDPOINT, { transport : ['websocket', 'polling', 'flashsocket']  });

        setName(name);
        setRoom(room);

        socket.emit('join', {name, room}, (error) => {
            if(error){
                alert(error);
            }
        });

        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    },[ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);

    return(
        <div className="outerContainer">
            <div className="container">
                <InforBar room={room}/>
                <Messages messages={messages} name={name}/>
               <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
            <TextContainer users={users}/>
        </div>
    )
}

export default Chat;