import React from "react";
import styled from "styled-components";
import axios from "axios";

export default function AfrotMatch() {

   

    const clearMatches = () => {
        
            .put(`${Url}clear`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response))
    }

    return(
        <>
            <button onClick={() => props.changeScreen("matches")}>Matches</button>
            <button onClick={() =>props.changeScreen("choose")}>Escolher</button>
            <button onClick={clearMatches}>Limpar Match</button>
        </>
    )
}