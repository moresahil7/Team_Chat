import React from 'react'
import styled from 'styled-components';
import { db } from '../firebase';



const SideBarOptions = ({Icon , title, addChannelOption, id}) => {


    const addChannel = () =>{
        const channelName = prompt('Please enter Channel name');

        if(channelName){
            db.collection('rooms').add({
                name: channelName,
            })
        }

    }
    const selectChannel = () =>{
        
    };
    return (


        
        <SideBarOptionContainer
        onClick = {addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon style ={{padding: 10}}/>}

            {Icon ?(
                <h4>{title}</h4>
            ):(
                <SideBarOptionChannel>
                    <span>#</span>{title}
                </SideBarOptionChannel>
            )}
        </SideBarOptionContainer>
    )
}


export default SideBarOptions;




const SideBarOptionContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;

    :hover{
        opacity:0.6 ;
        background-color: gray;
    }

    >h4 {
        font-weight: 500;
    }
    >h4>span {
        padding: 15px;
       }
`;
const SideBarOptionChannel = styled.h4`
    padding: 10px 0;
    font-weight: 300;

`;
