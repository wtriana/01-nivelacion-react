import { useState } from "react";
import styled from "@emotion/styled"
import {handleClick} from "../helpers/handleClick"
import "./counter.css"

//manera de agregar estilos como un componente a partir de styled/emotion lib
const BtnDiminish = styled.button`
    color: tomato;
    padding: 1rem;
    background-color: black;
    &:hover{
        background-color: cyan;
    }
`

const  Counter = () => {
    const [counter,setCounter] = useState(0) //[estado, funcCambioEstado()]
 
 return <>
        <div className='counterContainer'>
            <h1> Counter {counter}</h1>
            <button style={
                { padding: "1rem",background:"#758456" }
                } onClick={()=>{
                    setCounter(handleClick(counter, 10));
                }}>Add</button>
        
            <BtnDiminish onClick={()=>{
                setCounter(handleClick(counter, - 5));
            }}>
                diminish
            </BtnDiminish>
        </div>
        
        
    </>
}

export default Counter;