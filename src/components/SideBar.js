import React from 'react'
import styled from 'styled-components'
import { Add, 
    Apps, 
    BookmarkBorder, 
    Create, 
    Drafts, 
    ExpandLess, 
    ExpandMore, 
    FiberManualRecord, 
    FileCopy, 
    Inbox, 
    InsertComment,  
    People,  
    PeopleAlt } from '@material-ui/icons'
import SideBarOptions from './SideBarOptions'
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';



const SideBar = () => {
    const [channels, loading , error] = useCollection(db.collection('rooms'))

    return (
        <SideBarContainer>
            <SideBarHeader>
                <SideBarInfo>
                    <h2>Team Chat HQ</h2>
                    <h4>
                    <FiberManualRecord/>
                        Sahil More
                    </h4>
                </SideBarInfo>
                <Create/>
            </SideBarHeader>
            <SideBarOptions Icon = {InsertComment} title="Threads"/>
            <SideBarOptions Icon = {Inbox} title="Mentions and reactions"/>
            <SideBarOptions Icon = {Drafts} title="Saved items"/>
            <SideBarOptions Icon = {BookmarkBorder} title="Channel Browser"/>
            <SideBarOptions Icon = {PeopleAlt} title="People and User Groups"/>
            <SideBarOptions Icon = {Apps} title="Apps"/>
            <SideBarOptions Icon = {FileCopy} title="File Browser"/>
            <SideBarOptions Icon = {ExpandLess} title="Show less"/>
            <hr/>
            <SideBarOptions Icon = {ExpandMore} title="Channels"/>
            <hr/>
            <SideBarOptions Icon = {Add} addChannelOption title="Add Channel"/>

            {channels?.docs.map((doc) =>(
            <SideBarOptions 
            key={doc.id} 
            id={doc.id} 
            Icon = {People} 
            title={doc.data().name}/>


    ))}
            


        </SideBarContainer>
    )
}

export default SideBar;

const SideBarContainer = styled.div`
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 250px;
    margin-top: 60px;
    background-color: var(--chat-color);

    >hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`;
const SideBarHeader = styled.div`
    display: flex;
    padding: 13px;
    border-bottom: 1px solid #49274b;



    > .MuiSvgIcon-root {
    padding: 8px;
    color: var(--chat-color);
    font-size: 18px;
    background-color: white;
    border-radius: 50%;
    
  }


`;
const SideBarInfo = styled.div`
flex:1;




> h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }


  >h4{
      display:flex;
      font-size: 15px;
      font-weight: 400;
      align-items:center;

  }

  > h4 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: red;
    
  }

`;
