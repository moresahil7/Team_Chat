import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'



const Login=() => {
    const signin = (e)=>{
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => 
        alert(error.message));

    }
    return (
        <LoginContainer>
            <h1>Welcome to Team Chat!!</h1>
            <LoginInnerContainer>
<img src="https://lh3.googleusercontent.com/proxy/gNs6g5TDTZe4NVbWzCjn4haAODPCRVDheOxknfrVYPyhqr3TINMvMyOclN4MPPdvDQzH2r9fkAuoXZ6FAt6Lv1su1LdGRkPfcz-otVs0HL7gwcafKlKMDj8AgxDNc-TlXbuMoF06rXtDoudWquryqQOdKRbnETIaZg" 
alt="sahil" />            
<h1>SignIn to Team Chat</h1>
<Button  onClick={signin}>
    Sign in with Google
</Button>
</LoginInnerContainer>
        </LoginContainer>
    )
}


export default Login



const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;

`;


const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
>img {
    object-fit: contain;
    height: 200px;
    margin-bottom: 40px;
}
>button{
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: grey;
    color: white;
}
>button:hover{
    background-color: grey;
    color: black;
}
`;