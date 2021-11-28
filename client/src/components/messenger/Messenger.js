import React, { useEffect, useState } from 'react'

import Conversation from '../Conversation/Conversation';
import Message from '../Message/Message';
import {  ButtonChat, ChatBox, ChatBoxBottom, ChatBoxTextarea, ChatBoxTop, ChatBoxWrapper, ChatMenu, ChatMenuInput, ChatMenuWrapper,  ChatOnlineMessanger, ChatOnlineWrapper, MeessangerContent, MessangerSection, MessangerWrapper } from './MessangerStyles';
import { useDispatch, useSelector } from "react-redux";

import axios from 'axios';
import { getAuthUser } from '../../JS/actions/user';
const Messanger = () => {
 const dispatch = useDispatch();
   const user = useSelector((state) => state.userReducer.user);

     useEffect(() => {
   dispatch(getAuthUser())
   }, [])


 const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);

  
   useEffect(() => {
    const getConversations = async() => {
      try {
         const res = await axios.get("/conversation/" + user._id)
         console.log(res);
        setConversations(res.data)
      } catch (error) {
        console.log(error);
      }
     
    }
    getConversations()
   }, [user._id])
    return (
    <MessangerSection id="profil2">
     <MessangerWrapper>
     <MeessangerContent>
       <ChatMenu>
       
       <ChatMenuWrapper>
     
       {conversations.map(c=>(
<Conversation conversation={c} currentUser={user}/>
       ))}
       
       
       </ChatMenuWrapper>
       </ChatMenu>


        <ChatBox>
         
       <ChatBoxWrapper>


       <ChatBoxTop>
       <Message/>
        <Message own={true}/>
        <Message/>
         <Message own={true}/>
        <Message/>
         <Message own={true}/>
        <Message/>
         <Message own={true}/>
        <Message/>
         <Message own={true}/>
        <Message/>
         <Message own={true}/>
        <Message/>
         <Message own={true}/>
        <Message/>
         <Message own={true}/>
        <Message/>
       </ChatBoxTop>



       <ChatBoxBottom>
       
       <ChatBoxTextarea placeholder="hello"></ChatBoxTextarea>
       <ButtonChat>send</ButtonChat>
       </ChatBoxBottom>
       </ChatBoxWrapper>
        
        </ChatBox>
         <ChatOnlineMessanger>
          
       <ChatOnlineWrapper>
  
       </ChatOnlineWrapper>
       
       </ChatOnlineMessanger>
         </MeessangerContent>
      </MessangerWrapper>
      </MessangerSection>
    )
}

export default Messanger