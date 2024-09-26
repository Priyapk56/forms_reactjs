import React from "react";

function Result({inputs,secretNum}){
    let result;
    if(inputs)
        {
        if(inputs > secretNum)
        {
            result='Higher';
        }
        else if(inputs < secretNum)
        {
            result='Lower'
        }
        else if(inputs==secretNum)
        {
            result ='Yipee! Correct'
        }
        else
        {
            result='Enter Valid Input'
        }
    } 
    return <h3> You Guessed:{result}</h3>
}
export default Result;