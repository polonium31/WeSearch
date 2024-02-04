import React from 'react';
import axios from 'axios';


export default function ParticipantSignup(email,password, firstname, lastname, type){
    axios.post('http://localhost:5050/signin',{
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        type: type
    }).then(
        (res)=>{
            console.log(res);
        }).catch((error)=>{
            console.log(error)
        })
}