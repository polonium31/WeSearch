import React from 'react';
import axios from 'axios';


export function Participantsignup(email,password, fullname, type){

    axios.post('http://localhost:5050/signin',{
        email: email,
        password: password,
        fullname:fullname,
        type: type
    }, {
        headers: {'Content-Type': 'application/json'}
    }).then(
        (res)=>{
            console.log(res);
            if (res.status == 200) {
                window.location.replace("/login");
            }
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
            console.log(res.status);
            if (res.status == 200) {
                window.location.replace("/participantHome");
            }
        }).catch((error)=>{
            console.log(error.response.data)
        })
}