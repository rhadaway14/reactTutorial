import React, {useState, useEffect, useRef} from "react";

import Button from "../components/buttons";
import Cards from "../components/cards";
import Field from "../components/inputs";

import Greet from "../functions/greetings/greetings";



export default function Card() {

    function Greet() {
        let greeting = "hello"
        console.log(greeting)
    }

    return(
        <Cards>
            <Cards.Title>This is a Title</Cards.Title>
            <Cards.Content>
                <Field></Field>
            </Cards.Content>
            <Cards.Desc>This is description</Cards.Desc>
        <Button>
            <Button.Rectangle onClick={() => Greet()}>this is a button</Button.Rectangle>
        </Button>
        </Cards>
    )
    

}