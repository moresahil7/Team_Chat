import React from 'react'
import styled from 'styled-components';
import { enterRoom } from '../features/counter/appSlice';
import { db } from '../firebase';
import { useDispatch } from 'react-redux';



const SideBarOptions = ({Icon , title, addChannelOption, id}) => {
 const dispatch = useDispatch();

    const addChannel = () =>{
        const channelName = prompt('Please enter Channel name');

        if(channelName){
            db.collection('rooms').add({
                name: channelName,
            })
        }

    }
    const selectChannel = () =>{
        if (id){
            dispatch(enterRoom({
                roomId:id,
            }))


        }
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
