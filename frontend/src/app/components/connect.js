import React from 'react';
import axios from 'axios';


export function ParticipantSignup(email,password, firstname, lastname, type){

    axios.post('http://localhost:5050/signin',{
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        type: type
    }, {
        headers: {'Content-Type': 'application/json'}
    }).then(
        (res)=>{
            console.log(res);
        }).catch((error)=>{
            console.log(error.response.data)
        })
}

export function login(email,password, type){
    console.log("attempting to login");
    axios.post('http://localhost:5050/login',{
        email: email,
        password: password,
        type: type
    }, {
        headers: {'Content-Type': 'application/json'}
    }).then(
        (res)=>{
            console.log(res);
        }).catch((error)=>{
            console.log(error.response.data)
        })
}