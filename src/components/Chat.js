import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { selectRoomId } from '../features/counter/appSlice'
import styled from 'styled-components'
import ChatInput from './ChatInput'
import { db } from '../firebase'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import Message from './Message'


const Chat = () => {
    const chatRef = useRef(null)
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument (
        roomId && db.collection('rooms').doc(roomId)
    );
    const [roomMessages, loading] = useCollection(
        roomId &&
        db
        .collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy("timestamp", "asc")
    );

   useEffect(() => {
       chatRef?.current?.scrollIntoView({
           behavior:"smooth",
   });
   }, [roomId, loading]);
    return (
        <ChatContainer>
            {roomDetails && roomMessages && (
                 <>
                 <Header>
                     <HeaderLeft>
                         <h4><strong>{roomDetails?.data().name}</strong>
                         <StarBorderOutlined/></h4>
     
                     </HeaderLeft>
                     <HeaderRight>
                         <p>
                             <InfoOutlined/>Details
                         </p>
     
                     </HeaderRight>
     
                 </Header>
     
     
     
     
     
                 <ChatMessages>
                     {roomMessages?.docs.map(doc => {
                         const {message , timestamp,user, userImage} =doc.data();
                         return(
                             <Message
                             key ={doc.id}
                             message = {message}
                             timestamp= {timestamp}
                             user = {user}
                             userImage = {userImage}
                             />
                         )
                     })}
                     <ChatBottom ref={chatRef}/>
     
                 </ChatMessages>
                 <ChatInput
                   chatRef={chatRef}
                   channelName={roomDetails?.data().name}
                   channelId = {roomId} 
                 />
     
                 
                 </>

            )}
           
            
        </ChatContainer>
    );
}


export default Chat
const ChatBottom = styled.div`
    padding-bottom: 100px;
    margin-bottom: 50px;
`;

const ChatMessages = styled.div`

`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
>h4{
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
}

>h4> .MuiSvgIcon-root{
    padding:3px;
    margin-left: 5px;
    font-size: 18px;
}
`;
const HeaderRight = styled.div`
    >p{
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    >p> .MuiSvgIcon-root{
    margin-left: 5px;
    font-size: 16px;
}
`;
const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;


`;